/*******************************
 *
 * log.js is where the LogSchema is defined.
 *
 * ATTRIBUTES:
 * 		time: time and date of edit
 * 		description: description of the edit made
 * 		record: the student record that was edited
 * 		editor: the editor 
 *
 ********************************/
const mongoose = require('mongoose');

// Log Schema
const LogSchema = new mongoose.Schema({
	time: {type: Date, required: true},
	description: {type: String, required: true},
	record: {type: mongoose.ObjectId, required: true},
	editor: {type: mongoose.ObjectId, required: true}
});

module.exports = mongoose.model('Log', LogSchema);
