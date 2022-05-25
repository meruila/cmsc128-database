const mongoose = require("mongoose");
const StudentRecord = require("../models/student-record");
const User = require("../models/regular-user");

/*
Given a student number, save a student record to database
*/
exports.saveRecord = async(recs, email) => {
    let savedList = [];
    try{
        if (recs.length === 0) {
            return savedList;// empty array of records
        }
        
        for (i in recs){
            let record = recs[i].data;
            let buffer = await StudentRecord.findOne({ "studentNo": record.studentNo });
            if (buffer != null){ // if user is found, do not save
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
                verifiedBy: record.verifiedBy,
                uploadedBy: email
            }
            let studentDocument = new StudentRecord(studentRecord);
            await studentDocument.save();
            savedList.push(recs[i].filename);
        }
        return savedList;
    }catch (e){
        throw {e: e, savedList: savedList};
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
exports.viewStudentRecord = async(studentNo) => {
    try{        
        const record = await StudentRecord.findOne({studentNo: studentNo});
        return record;
    }catch(e){
        console.log(e);
        throw(e);
    }
}

/*
Given a student number, replace a student record in the database
*/
exports.editStudentRecord = async(record) => {
    try {
        let buffer = await StudentRecord.findOne({ "studentNo": record.studentNo });
        if (buffer == null) {
            return false; //student does not exist
        }
        const studentRecord = new StudentRecord(record);
        await StudentRecord.replaceOne({
            "studentNo": record.studentNo
        }, studentRecord )
        // await StudentRecord.replaceOne({
        //     "studentNumber": record.studentNo
        // }, { studentRecord } )
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
exports.delStudentRecord = async(studentNo) => {
    try{        
        const res = await StudentRecord.deleteOne({studentNo: studentNo});
        if (res.deletedCount <= 0){
            return false;
        } else {
            return true;
        }    
    }catch(e){
        console.log(e);
        throw(e);
    }
}

exports.showSummary = async() => {
    try {
        try{        
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
                if (recs[i].verifiedBy.length < 2) {
                    continue;
                }
                for (j in recs[i].verifiedBy) {
                    let user = await User.findOne({ "_id": recs[i].verifiedBy[j] });
                    record.verifiedBy.push(user.user.email);
                }
                records.push(record);
            }
            return records;
        }catch(e){
            console.log(e);
            throw(e);
        }

//         > array of student records. Array contains:
        // {
        //   studentNo: {}
        //   {name: last{}, first{}},
        //   course: {},
        //   GWA: {},
        //   verificationStatus: {}
        // }

    } catch(e) {
        throw (e);
    }
}

// db["student-record"].updateOne(
//     { studentNo: "2019-09876" },
//     { $push: { verifiedBy: { $each: [ ObjectId("628b8cf74f761e30d07a8cb8"), ObjectId("628cade02f48da2058e6df12") ] } } }
//  )