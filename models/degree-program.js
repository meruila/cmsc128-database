/*******************************
 * 
 * degree-program.js is where the Degree Program schema is defined.
 * Here, we set the degree code (e.g. BACA, BSCS) to link this to the student record.
 * Then we identify if the program is part of the 2018 curriculum (true) or the curriculum preceding it (false).
 * credited: list of required subjects based on the curriculum which are graded (majors and required GEs)
 * nonCredited: subjects in the curriculum that are not graded (e.g. NSTP, HK, PE)
 * electivesGE: GE electives picked based on the GE plan of study
 * electivesCourse: course electives picked based on the plan of study (POS)
 * Note: GE plan of study and POS are two different forms
 * 
********************************/

const mongoose = require("mongoose");

const DegreeSchema = new mongoose.Schema({
  degreeCode: { type: String, required: true },
  is2018Curriculum: { type: Boolean, required: true },
  credited: { type: [mongoose.ObjectId] }, // course objects from CourseSchema
  nonCredited: { type: [mongoose.ObjectId] },
  electivesGE: { type: [mongoose.ObjectId] },
  electivesCourse: { type: [mongoose.ObjectId] }
});

module.exports = mongoose.model("Degree", DegreeSchema);