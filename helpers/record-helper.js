const mongoose = require("mongoose");
const StudentRecord = require("../models/student-record");

/*
Given a student number, save a student record to database
*/
exports.saveRecord = async(records) => {
  try{
      record_arr = records.formattedArray;

      for (let i = 0; i < record_arr.length; i++) {
        record = record_arr[i].data;
        let buffer = await StudentRecord.findOne({ "studentNumber": record.studentNo });
        if (buffer != null){
            return false; // student already exists
        }

        // creating base data for student record
        student_record = {
            name: {
                lname: record.name.last,
                fname: record.name.first
            },
            degreeProgram: record.course,
            studentNumber: record.studentNo,
            records: [ ],
            totalUnitsTaken: record.totalUnitsTaken,
            totalUnitsRequired: record.totalUnitsRequired,
            GWA: record.GWA,
            verifiedBy: [ ]
        }
        semesters = record.records
        
        for (let j = 0; j < semesters.length; j++) {
            // populating semesters
            semester = {
                sem: semesters[j].sem,
                year: semesters[j].year,
                subjects: [],
                units: semesters[j].units,
                status: semesters[j].status
            }

            semSubjects = semesters[j].subjects
            for (let k = 0; k < semSubjects.length; k++) {
                // populating subject data
                subject = {
                    code: semSubjects[k][0],
                    grade: semSubjects[k][1],
                    units: semSubjects[k][2],
                    gradepoint: semSubjects[k][3],
                    summation: semSubjects[k][4]
                }
                semester.subjects.push(subject);
            }
            student_record.records.push(semester);
        }
        
        // console.log(student_record);
        const studentRecord = new StudentRecord(student_record);
        await studentRecord.save();
      }
      return true;        
  }
  catch(err){
      throw err;
  }
  
}