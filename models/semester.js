const mongoose = require('mongoose');
const SubjectSchema = require('./subject');

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
	subjects: [SubjectSchema],
});

module.exports = mongoose.model('Semester', SemSchema);
