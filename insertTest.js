// const { MongoClient } = require("mongodb");
const mongoose = require('mongoose');
// create a client to mongodb

mongoose.connect(
	'mongodb://localhost:27017/shac-database',
	{ useNewUrlParser: true, useUnifiedTopology: true },
	(err) => {
		if (err) {
			console.log(err);
		} else {
			console.log('Successfully connected to Mongo DB');
		}
	}
);
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
// const User = require("./database/models/regular-user");
// const Admin = require("./database/models/admin");

const Subject = require('./models/subject.js');
const { Degree } = require('./models/curriculum');
var ObjectId = require('mongodb').ObjectId;

// HOW TO FIND FOR SUBJECTS:
// db["subject"].find({code:<CODE HERE>}).pretty()
// EXAMPLE: db["subject"].find({code:"MATH 36"}).pretty()

// IF THE SUBJECT DOES NOT EXIST:
// add using commented code below, see [SUBJECT INSERT CODE] line

// TO INSERT SUBJECTS AFTER POPULATING IN insertTest.js
// node insertTest.js

// TO CHECK IF CURRICULUM IS INSERTED:
// db["curriculum"].find().pretty()
// check if it matches with Curriculum Schema (models/curriculum.js)

// AFTER FINISHING TASK:
// 1. mongodump your saved curricula
// 2. push to github

// For other MST curricula, change the major to Physics,
// add required subjects, and change specializationUnits to 0 since they are
// explicitly stated in the curricula.

const degree = {
	'name': 'BAPHLO',
	'major': 'Thesis',
	'subjects': [
		[ObjectId("626d42befee24c0a7a8e930d")],
		// ARTS 1
		[ObjectId("626d42befee24c0a7a8e930e")],
		// COMM 10
		[ObjectId("626d42befee24c0a7a8e930f")],
		// ETHICS 1
		[ObjectId("626d42befee24c0a7a8e9310"),
		ObjectId("626d42befee24c0a7a8e9311")],
		// KAS 1/HIST 1
		[ObjectId("626d42befee24c0a7a8e9312")],
		// STS 1
		[ObjectId("626d42befee24c0a7a8e9313")],
		// PI 10		
		[ObjectId("62728748ad94f0ad06fe971a")],
		// PHLO 11
		[ObjectId("62728748ad94f0ad06fe971b")],
		// PHLO 12
		[ObjectId("626d44d7eb3a38230c7a3e81")],
		// NSTP 1
		[ObjectId("626d44d7eb3a38230c7a3e76")],
		// HK 11
		[ObjectId("62728748ad94f0ad06fe971c")],
		// PHLO 150
		[ObjectId("62728748ad94f0ad06fe971d")],
		// PHLO 171
		[ObjectId("62728748ad94f0ad06fe971e")],
		// SPEC
		[ObjectId("62728748ad94f0ad06fe971f"),
		// ECON 11
		ObjectId("62728748ad94f0ad06fe9720")],
		// POSC 10
		[ObjectId("626d44d7eb3a38230c7a3e85")],
		// NSTP 2
		[ObjectId("626d44d7eb3a38230c7a3e7a"),
		// HK 12
		ObjectId("626d44d7eb3a38230c7a3e7b")],
		// HK 13
		[ObjectId("62728748ad94f0ad06fe9721")],
		// PHLO 110
		[ObjectId("62728748ad94f0ad06fe9722")],
		// PHLO 112
		[ObjectId("62728748ad94f0ad06fe9723")],
		// PHLO 173
		[ObjectId("6285168b678b450f4457ab8b")],
		// PHLO 111
		[ObjectId("6285168b678b450f4457ab8c")],
		// PHLO 120
		[ObjectId("62728748ad94f0ad06fe9724")],
		// PHLO 174
		[ObjectId("62728748ad94f0ad06fe9725")],
		// PHLO 181
		[ObjectId("62728748ad94f0ad06fe9726")],
		// PHLO 195
		[ObjectId("62728748ad94f0ad06fe9727")],
		// PHLO 197
		[ObjectId("62728748ad94f0ad06fe9728")],
		// PHLO 113
		[ObjectId("62728748ad94f0ad06fe9729")],
		// PHLO 182
		[ObjectId("62728748ad94f0ad06fe972a")],
		// PHLO 176
		[ObjectId("62728748ad94f0ad06fe972b")],
		// PHLO 178
		[ObjectId("6285168b678b450f4457ab8d"),],
		// PHLO 200
		[ObjectId("62728748ad94f0ad06fe972d")],
		// PHLO 160
		[ObjectId("62728748ad94f0ad06fe972e")],
		// PHLO 184
		[ObjectId("62728748ad94f0ad06fe972f")],
		// PHLO 185
	],
	'specializationUnits': 33,
	'geElectiveUnits': 9,
	'maxThesisIterations': 9,
};

const go = async () => {
	try {
		let res = await Degree.create(degree);
		console.log(res);
		console.log('Inserted degree program');
	} catch (e) {
		console.log(e);
	}
};

go();

// [SUBJECT INSERT CODE]
// Subject.insertMany([
// 	{ code: 'CHEM 181B', units: 3 },
// 	{ code: 'CHEM 181.1', units: 2 }
// ])
// 	.then(function () {
// 		console.log('Data inserted'); // Success
// 	})
// 	.catch(function (error) {
// 		console.log(error); // Failure
// 	});
