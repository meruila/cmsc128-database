const mongoose = require("mongoose");
var ObjectId = require('mongodb').ObjectId;

/*
    curriculum-helper retrieves the curriculum from the database and converts it to array of objects
*/

const Subject = require("../models/subject");
const Degree = require("../models/curriculum");

exports.checkCurriculum = async(name) => {
    try {
        let degreeProgram = [];
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
            
        }
        return degreeProgram;
        
    } catch(e){
        console.log(e);
    }
}