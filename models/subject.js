/**
 * 
 * subject.js is where the Subject schema is defined.
 * Every subject has a course code and a specified number of units for the subject.
 * Credited subjects have a non-zero value for the units while uncredited subjects
 * (e.g. HK and NSTP) have zero units.
 * The Subject schema will be used on a Student Record's taken-subject and on the Degree Program
 * of a Curriculum.
 * 
 */

const mongoose = require('mongoose');

const SubjectSchema = new mongoose.Schema({
  code: { type: String, unique: true, required: true },
  units: { type: Number, required: true }
  },
  { collection : 'subject' });
 
module.exports = mongoose.model('Subject', SubjectSchema);