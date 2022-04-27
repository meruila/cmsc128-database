/*******************************
 *
 * semester.js is where the Semester schema is defined.
 *
 * ATTRIBUTES:
 * 		sem: semester
 * 		year: school year
 * 		subjects: reference to Subject schema,
 * 				  subjects that were taken by the user
 *
 ********************************/

const mongoose = require('mongoose');

// Semester Schema
const SemSchema = new mongoose.Schema({
	sem: {
		type: String,
		required: true,
	},
	year: {
		type: String,
		required: true,
	},
	subjects: {
		type: [mongoose.ObjectId],
		required: true,
	},
});

module.exports = mongoose.model('Semester', SemSchema);
