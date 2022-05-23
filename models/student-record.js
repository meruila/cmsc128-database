/*******************************
 * 
 * STUDENT RECORD SCHEMA
 * Attributes:
 *      Name
 *          - first                 (String)
 *          - last                  (String)
 *      Student Number              (String)
 *      Degree Program              (Reference to Degree model)
 *      Total Units Taken           (String)
 *      GWA                         (String)
 *      Records                     (Array)
 *          - Semester              (String)
 *          - Academic Year         (String)
 *          - Subjects Taken        (Array)
 *          - Units                 (String)
 *          - Status                (String)
 *      Verified By                 (Array) (Reference to Admin or User model)
 *      Remarks                     (String)
********************************/

const mongoose = require("mongoose");       

// //semester schema
const Semester_Schema = new mongoose.Schema({
    sem: {
        type: String,       // originally Number, made it String to accommodate midyear (M)
        required: true
    },
    year: {
        type: String,
        required: true
    },
    subjects: {
        type: [[String]]
    },
    units: {
        type: String,        // originally Number
        required: true
    },
    status: {
        type: String,
        required: true
    }
});
//#endregion

//student record schema
const StudentRecord_Schema = new mongoose.Schema({
    //#region single-valued attribute
    name: {
        last: {
            type: String,
            required: true
        },
        first: {
            type: String,
            required: true
        }
    },
    course: {                              
        type: String,                  
        required: true,
        // ref: 'Degree'
    },
    studentNo : {
        type: String,                               
        unique: true,                               
        required: true                             
    }, 
    records: {
        type: [Semester_Schema],
        required: true
    },
    totalUnitsTaken: {
        type: Number,
        required: true
    },
    totalUnitsRequired: {
        type: Number,
        required: true
    },
    GWA: {
        type: Number,
        required: true
    },
    uploadedBy: {
        type: String,
        required: true
    },
    
    verifiedBy: {
        type: [mongoose.ObjectId]
    },
    remarks: {
        type: String
    }
},
{ collection : 'student-record' });

module.exports = mongoose.model("StudentRecord", StudentRecord_Schema);