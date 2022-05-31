const mongoose = require("mongoose");
const StudentRecord = require("../models/student-record");
const User = require("../models/regular-user");
const dbLog = require("./log-helper")
var ObjectId = require('mongodb').ObjectId;

const getCurrentTime = () => {
    var today = new Date();
    var date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes();
    var dateTime = date+' '+time;
    return dateTime;
 }

/*
Given a student number, save a student record to database
TODO: send reasons why student record was not saved
*/
exports.saveRecord = async(recs, email) => {
    let savedList = [];
    let errList = [];
    try{
        if (recs.length === 0) {
            return savedList;// empty array of records
        }
        let nowTime = getCurrentTime();
        
        for (i in recs){
            let record = recs[i].data;
            let buffer = await StudentRecord.findOne({ "studentNo": record.studentNo });
            if (buffer != null){ // if student record is found, do not save
                errList.push({filename: recs[i].filename, err: "Student record already exists."});
                continue;
            }
            let studentRecord = {
                name: {
                    last: record.name.last,
                    first: record.name.first
                },
                course: record.course,
                studentNo: record.studentNo,
                records: record.records,
                totalUnitsTaken: record.totalUnitsTaken,
                totalUnitsRequired: record.totalUnitsRequired,
                GWA: record.GWA,
                verifiedBy: [],
                uploadedBy: email
            }

            let studentDocument = new StudentRecord(studentRecord);
            await studentDocument.save();
            await dbLog.saveLog(nowTime, "Added", record.studentNo, email);
            savedList.push(recs[i].filename);
        }
        return {savedList: savedList, errList:errList};
    }catch (e){
        throw {e: e, savedList: savedList, errList:errList};
    }
}

/*
Returns all student recs.
Returns [] if there is no record found
*/
exports.retrieveStudentRecords = async () => {
    try{        
        const recs = await StudentRecord.find({}).select({_id:0, studentNo: 1, name:1, course:1});
        return recs;
    }catch(e){
        console.log(e);
        throw(e);
    }
}

/*
Returns a single student record.
*/
exports.viewStudentRecord = async(studentNo, email) => {
    try{     
        const record = await StudentRecord.findOne({studentNo: studentNo});

        await dbLog.saveLog(getCurrentTime(), "Viewed", studentNo, email);
        return record;
    }catch(e){
        console.log(e);
        throw(e);
    }
}

/*
Given a student number, replace a student record in the database
*/
exports.editStudentRecord = async(record, email) => {
    try {
        let buffer = await StudentRecord.findOne({ "studentNo": record.studentNo });
        if (buffer == null) {
            return false; //student does not exist
        }
        
        await StudentRecord.updateOne({
            studentNo: record.studentNo
        }, {
            $set: {
                "name.last": record.name.last,
                "name.first": record.name.first,
                "course": record.course,
                "records": record.records,
                "totalUnitsTaken": record.totalUnitsTaken,
                "totalUnitsRequired": record.totalUnitsRequired,
                "GWA": record.GWA
            }
        })
        await dbLog.saveLog(getCurrentTime(), "Updated", studentNo, email);
        return true;   
    }
    catch(e) {
        throw e;
    }
}

/*
Deletes a student record.
Returns true if deleted, false if not deleted.
*/
exports.delStudentRecord = async(studentNo, email) => {
    try{        
        const res = await StudentRecord.deleteOne({studentNo: studentNo});
        if (res.deletedCount <= 0){
            return false;
        } else {
            await dbLog.saveLog(getCurrentTime(), "Deleted", studentNo, email);
            return true;
        }    
    }catch(e){
        console.log(e);
        throw(e);
    }
}

exports.showSummary = async(email) => {
    try {      
        const recs = await StudentRecord.find({});
        if (recs.length == 0) {
            return recs;
        }
        let records = [];
        for (i in recs) {
            record = {
                studentNo: recs[i].studentNo,
                name: recs[i].name,
                course: recs[i].course,
                GWA: recs[i].GWA,
                verifiedBy: []
            }
            
            // check if verifiedBy is less than 2
            if (recs[i].verifiedBy.length < 2) {
                continue;
            }
            for (j in recs[i].verifiedBy) {
                record.verifiedBy.push(recs[i].verifiedBy[j]);

            }
            records.push(record);
        }
        await dbLog.saveLog(getCurrentTime(), "Viewed", "Summary", email);
        return records;

    } catch(e) {
        console.log(e);
        throw e;
    }
}

exports.affixSign = async(studentNo, email) => {
    try {
        const viewRecord = await StudentRecord.findOne(
            {studentNo: studentNo}
        )
        
        if (viewRecord.verifiedBy.includes(email)) {
            return false;
        }

        const record = await StudentRecord.updateOne(
            { studentNo: studentNo },
            { $push: { verifiedBy: email } }
        )

        if (record === null) {
            return false;
        }
        
        await dbLog.saveLog(getCurrentTime(), "Signed", studentNo, email);
        // record.verifiedBy.push(user_objectID);
        return true;
    } catch (e) {
        throw e;
    }
    
}

recordsCountHelper = async() => {
    try {
        const allStudentRecords = StudentRecord.find();
        const verified = StudentRecord.find({'verifiedBy.1':{$exists:true}});
        
        return Promise.all([allStudentRecords, verified]);
    } catch (e) {
        throw e;
    }
}

exports.recordsCount = async() => {
    try{
        const records = await recordsCountHelper();
        return [records[0].length, records[1].length];
    } catch(e) {
        throw e;
    }
        
}

exports.adminRemoved = async(studentNo, email) => {
    const record = await StudentRecord.updateOne(
        { studentNo: studentNo },
        { $set: { verifiedBy: [] } }
    )

    if (record.modifiedCount <= 0) {
        return false;
    }

    await dbLog.saveLog(getCurrentTime(), "Unsigned", "All Records", email);
    return true;
}

exports.removeSign = async(studentNo, email) => {
    try {
        const viewRecord = await StudentRecord.findOne(
            { studentNo: studentNo }
        )

        const user = await User.findOne(
            { 'user.email': email }
        )

        if (!viewRecord || !user){
            return false;
        }

        if (viewRecord.verifiedBy.length === 0 || viewRecord.verifiedBy.length > 1) {
            return false;
        }

        if (user.user.email == viewRecord.verifiedBy[0]) {
            const record = await StudentRecord.updateOne(
                { studentNo: studentNo },
                { $set: { verifiedBy: [] } }
            )
        } else {
            return false;
        }
        
        await dbLog.saveLog(getCurrentTime(), "Unsigned", studentNo, email);
        // record.verifiedBy.push(user_objectID);
        return true;
    } catch (e) {
        throw e;
    }
}

exports.delStudentRecords = async(email) => {
    try {
        const records = await recordsCountHelper();
        const toDelete = await StudentRecord.deleteMany();
        if (toDelete.deletedCount == records[0].length) {
            await dbLog.saveLog(getCurrentTime(), "Deleted", "All Records", email);
            return true;
        } else {
            return false;
        }
    } catch (e) {
        throw e;
    }
}