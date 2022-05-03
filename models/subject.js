/**
 * 
 * subject.js is where the Subject schema is defined.
 * ATTRIBUTES:
 *      code: course code of the subject (String)
 *      units: specified number of units for the subject (Number)
 * 
 * NOTE:
 *      The Subject schema will be used on a Student Record's taken-subject and on the Degree Program
 *      of a Curriculum.
 * 
 */

const mongoose = require('mongoose');

const SubjectSchema = new mongoose.Schema({
  code: { type: String, unique: true, required: true },
  units: { type: Number, required: true }
  },
  { collection : 'subject' });
 
module.exports = mongoose.model('Subject', SubjectSchema);