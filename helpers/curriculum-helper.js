const mongoose = require("mongoose");
// const fs = require("fs");
var ObjectId = require('mongodb').ObjectId;

// mongoose.connect(
//     "mongodb://localhost:27017/shac-database",
//     { useNewUrlParser: true, useUnifiedTopology: true },
//     (err) => {
//       if (err) { console.log(err); }
//       else { console.log("Successfully connected to Mongo DB"); }
// });

/*
    curriculum-helper retrieves the curriculum from the database and converts it to array of objects
*/

const Subject = require("../models/subject.js");
const { Degree } = require("../models/curriculum");

exports.checkCurriculum = async(name) => {
// const go = async (name) => {
    try {
        let degreeProgram = []
        const out = await Degree.find({name: name});
        for (let i = 0; i < out.length; i++) {
            let degree = {
                _id: out[i]._id,
                name: out[i].name,
                major: out[i].major
            }
            let array_input = out[i].subjects;
            let array_output = []

            for (let j = 0; j < array_input.length; j++) {
                let choices = {
                    "code": [],
                    "units": 0
                };
                for (let k = 0; k < out[i].subjects[j].length; k++) {

                    let subject_object = new ObjectId(out[i].subjects[j][k]);
                    const raw_subj = await Subject.findById(subject_object);
                    const subj = { code: raw_subj.code, units: raw_subj.units };
                    choices.units = subj.units;
                    choices.code.push(subj.code);
                }
                array_output.push(choices);
            }

            degree.subjects = array_output;
            degree.specializationUnits = out[i].specializationUnits;
            degree.geElectiveUnits = out[i].geElectiveUnits;
            degree.maxThesisIterations = out[i].maxThesisIterations;

            degreeProgram.push(degree);
            
            // fs.writeFileSync('./degree.json', JSON.stringify(degreeProgram, null, 2) , 'utf-8');
        }
        return degreeProgram;
        
    } catch(e){
        console.log(e);
    }
}

// go("BACA");

// const go2 = async () => {
//     degree = await go("BSACHM");
//     console.log(degree);
// }

// go2();
// console.log(program);

// fs.readFile(program, 'utf8', function(err, data) {

    // check student.json for new file
// fs.writeFileSync('./degree.json', JSON.stringify(program, null, 2) , 'utf-8');
//     console.log(degree)
// })