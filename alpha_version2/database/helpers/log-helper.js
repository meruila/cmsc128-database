const mongoose = require("mongoose");

// const Admin = require("../models/admin");
const User = require("../models/regular-user");
const Record = require("../models/student-record");
const Log = require("../models/log");

findUserName = async(email) => {
    let name = "";
    let toFind = await User.findOne({ "user.email": email });
    name += toFind.first + " " + toFind.last;
    return name;
}

const getCurrentTime = () => {
    var today = new Date();
    var date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes();
    var dateTime = date+' '+time;
    return dateTime;
 }

const saveLogHelper = async (currentTime, msg, studNum, email) => {
    try{
        let newLog = {
            time: currentTime,
            description: msg,
            recordNumber: studNum,
            editorEmail: email
        }
        
        let logDocument = new Log(newLog);
        // console.log("SAVED LOG: ", logDocument);
        await logDocument.save();
        return true;
    }
    catch (e){
        console.log(e);
        return false
    }
}

exports.saveLog = saveLogHelper;

exports.viewAllLogs = async () => {
    try {
        const logs = await Log.find();
        let formattedLogs = [];
        for (i in logs) {
            log = {
                time: logs[i].time,
                description: logs[i].description,
                recordNumber: logs[i].recordNumber,
                editorName: logs[i].email
            }
            formattedLogs.push(log);
        }
        return formattedLogs;
    }
    catch(e) {
        console.log(e);
        return false;
    }    
}

const logsCountHelper = async() => {
    try {
        const allLogs = Log.find();
        return Promise.all([allLogs]);
    } catch (e) {
        throw e;
    }
}

exports.delAllLogs = async(email) => {
    try {
        const logs = await logsCountHelper();
        const toDelete = await Log.deleteMany();
        if (toDelete.deletedCount == logs[0].length) {
            await saveLogHelper(getCurrentTime(), "Cleared Previous Logs", "N/A", email);
            return true;
        } else {
            return false;
        }
    } catch (e) {
        throw e;
    }
}