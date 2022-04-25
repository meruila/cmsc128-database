/**
 * subject.js is where the Subject schema is defined.
 * Every subject has a course code, a grade that the student attained, units of the subject,
 * grade points i.e., units * grade, and the summation of the gradepoints of the student.
 */

 const mongoose = require('mongoose');

 const SubjectSchema = new mongoose.Schema({
   code: { type: String, unique: true, required: true },
   grade: { type: String, required: true },
   units: { type: String, required: true },
   gradePoints: { type: Number, required: true },
   gradePointsSummation: { type: Number, required: true },
 });
 
 module.exports = mongoose.model('Subject', SubjectSchema);