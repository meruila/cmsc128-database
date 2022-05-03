/*******************************
 * 
 * STUDENT RECORD SCHEMA
 * Attributes:
 *      Name
 *          - first                 (String)
 *          - last                  (String)
 *      Student Number              (String)
 *      Degree Program              (Reference to Degree model)
 *      Total Units Taken           (Number)
 *      GWA                         (Number)
 *      Records                     (Array)
 *          - Semester              (Number)
 *          - Academic Year         (String)
 *          - Subjects Taken        (Array)
 *              - Subject Code      (Reference to Subject model)
 *              - Grade             (String)
 *              - Gradepoint        (Number)
 *              - Summation         (Number)
 *          - Units                 (Number)
 *          - Status                (String)
 *      Verified By                 (Array) (Reference to Admin or User model)
 * 
********************************/

const mongoose = require("mongoose");       

//#region subdocument schema
//taken subject schema
const TakenSubject_Schema = new mongoose.Schema({
    subjectCode: {
        type: mongoose.ObjectId,
        required: true,
        ref: 'Subject'
    },
    grade : {
        type: String,
        required: true
    },
    gradepoint : {
        type: Number,
        required: true
    },
    summation : {
        type: Number,
        required: true
    }
});

//semester schema
const Semester_Schema = new mongoose.Schema({
    sem: {
        type: Number,
        required: true
    },
    acadYear: {
        type: String,
        required: true
    },
    subjects: {
        type: [TakenSubject_Schema],
        required: true
    },
    units: {
        type: Number,
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
        fname: {
            type: String,
            required: true
        },
        lname: {
            type: String,
            required: true
        }
    },
    studentNumber : {
        type: String,                               //string ba talaga, hindi number??? bale pwede kasi na wala na yung dash
        unique: true,                               // Reply: yes string siya. tama ka na number technically yung student number pero hindi naman 
        required: true                              //        kasi need gawan ng arithmetic yung pagka-"number" niya, kaya mas convenient na
    },                                              //        string na lang. Usually need ang first 4 numbers ng student number (e.g. 2019-XXXXX)
    degreeProgram: {                                //        and mas madali/dynamic i-extract yung data na yun sa pag-split ng student number using 
        type: mongoose.ObjectId,                    //        the dash imbis na gumamit ng indexing
        required: true,
        ref: 'Degree'
    },
    totalUnitsTaken: {
        type: Number,
        required: true
    },
    GWA: {
        type: Number,
        required: true
    },
    //#endregion

    //#region multi-valued attribute
    records: {
        type: [Semester_Schema],
        required: true
    },
    verifiedBy: [{
        type: mongoose.ObjectId,
        //reference to admin or user model/collection
        refPath: 'modelReferences' 
    }],

    //to reference two possible models
    modelReferences: {
        type: String,
        required: true,
        enum: ['Admin', 'User']
    }
    //#endregion
});

module.exports = mongoose.model("Student-Record", StudentRecord_Schema);