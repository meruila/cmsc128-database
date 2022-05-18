// not to be used in actual app

const mongoose = require("mongoose");
const fs = require("fs");
var ObjectId = require('mongodb').ObjectId;

mongoose.connect(
    "mongodb://localhost:27017/shac-database",
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
      if (err) { console.log(err); }
      else { console.log("Successfully connected to Mongo DB"); }
});

// const Curriculum = require("../models/curriculum");
const Subject = require("../models/subject.js");
const { Degree } = require("../models/curriculum");
// const User = require("../models/regular-user");
// retrieve find by name (course code)
// output array
// retrieve each subject in each course
// output final array

let degreeProgram = []

const go = async (name) => {
    try {
        const out = await Degree.find({name: name});
            // .exec.toArray(function (err, data) {
            //     console.log(data);
            // });
        // console.log(out[0])
        for (let i = 0; i < out.length; i++) {
            let degree = {
                _id: out[i]._id,
                name: out[i].name,
                major: out[i].major
            }
            let array_input = out[i].subjects;
            let array_output = []

            for (let j = 0; j < array_input.length; j++) {
                let subject_object = new ObjectId(out[i].subjects[j]);

                const raw_subj = await Subject.findById(subject_object);
                const subj = { code: raw_subj.code, units: raw_subj.units };

                array_output.push(subj);
            }

            
            degree.subjects = array_output;
            degree.specializationUnits = out[i].specializationUnits;
            degree.geElectiveUnits = out[i].geElectiveUnits;
            degree.maxThesisIterations = out[i].maxThesisIterations;
            // console.log(degree);
            degreeProgram.push(degree);
            fs.writeFileSync('./degree.json', JSON.stringify(degreeProgram, null, 2) , 'utf-8');
        }
        return degreeProgram;
        
    } catch(e){
        console.log(e);
    }
}
    
go("BACA");
// console.log(program);

// fs.readFile(program, 'utf8', function(err, data) {

    // check student.json for new file
// fs.writeFileSync('./degree.json', JSON.stringify(program, null, 2) , 'utf-8');
//     console.log(degree)
// })