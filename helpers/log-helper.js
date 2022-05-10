const mongoose = require("mongoose");

const Admin = require("../models/admin");
const User = require("../models/regular-user");
const Record = require("../models/student-record");
const Log = require("../models/log");

exports.addLog = async (log) => {
    try{
        const newLog = new Log(log);
        await newLog.save();
        return true;
    }
    catch (e){
        console.log(e);
        return false
    }
}

exports.viewAllLogs = async () => {
    try {
        const logs = await Log.find();
        return logs;
    }
    catch(e) {
        console.log(e);
        return false;
    }    
}

exports.viewLogsByUser = async (email) => {
    try {
        let log_editor = {};
        // look in admin collection
        const buffer_1 = await Admin.findOne({user.email: email});
        if (userAdmin != null) {
            editor = buffer_1;
        }

        else{
            // else, look in user collection
            const buffer_2 = await User.findOne({user.email: email});
            if (buffer_2 != null) {
                editor = buffer_2;
            }
            else{
                throw "User Not Found!";
            }
        }

        logs = await Log.find({editor: log_editor._id});
        if (logs != null) {
            return logs;
        }
        else{
            throw "No Existing Log/s";
        }


    }
    catch (e){
        console.log(e);
        return false;
    }
}

exports.viewLogsByStudRecord = async (student_No) => {
    try {
        // look in student record collection
        const stud_record = await Record.findOne({studentNumber: student_No});
        if (stud_record == null) {
            throw "Student Record Not Found!"
        }

        logs = await Log.find({record: stud_record._id});
        if (logs != null) {
            return logs;
        }
        else{
            throw "No Existing Log/s";
        }


    }
    catch (e){
        console.log(e);
        return false;
    }
}