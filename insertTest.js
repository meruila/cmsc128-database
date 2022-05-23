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
	'name': 'BASOC',
	'major': 'Thesis',
	'subjects': [		
		[ObjectId("626d42befee24c0a7a8e930f")],
		// ETHICS 1
		[ObjectId("626d42befee24c0a7a8e9311"),
		// HIST 1
		ObjectId("626d42befee24c0a7a8e9310")],
		// KAS 1
		[ObjectId("627289becf55453d96c4bd09")],
		// SOC 10
		[ObjectId("627289becf55453d96c4bd0a")],
		// ANTH 10
		[ObjectId("627289becf55453d96c4bd0b")],
		// PSY 10
		[ObjectId("626d44d7eb3a38230c7a3e76")],
		// HK 11
		[ObjectId("62853b58f921a9134490fe4c")],
		// HIST 10
		[ObjectId("62728748ad94f0ad06fe9720")],
		// POSC 10
		[ObjectId("627289becf55453d96c4bd0c")],
		// SOC 100
		[ObjectId("627289becf55453d96c4bd0d")],
		// SOC 110
		[ObjectId("626d44d7eb3a38230c7a3e7a"),
		// HK 12
		ObjectId("626d44d7eb3a38230c7a3e7b")],
		// HK 13
		[ObjectId("626d42befee24c0a7a8e9312")],
		// STS 1
		[ObjectId("626d42befee24c0a7a8e930d")],
		// ARTS 1
		[ObjectId("62728748ad94f0ad06fe971f")],
		// ECON 11
		[ObjectId("627289becf55453d96c4bd0e")],
		// SOC 116
		[ObjectId("627289becf55453d96c4bd0f")],
		// STAT 166
		[ObjectId("627289becf55453d96c4bd10"),
		// SOC 130
		ObjectId("627289becf55453d96c4bd11")],
		// SOC 135
		[ObjectId("626d44d7eb3a38230c7a3e81")],
		// NSTP 1
		[ObjectId("627289becf55453d96c4bd12")],
		// AERS 160
		[ObjectId("627289becf55453d96c4bd13")],
		// SOC 140
		[ObjectId("626d44d7eb3a38230c7a3e85")],
		// NSTP 2
		[ObjectId("626d42befee24c0a7a8e9313")],
		// PI 10
		[ObjectId("627289becf55453d96c4bd14")],
		// SOC 107
		[ObjectId("627289becf55453d96c4bd15")],
		// SOC 151
		[ObjectId("627289becf55453d96c4bd16")],
		// SOC 195
		[ObjectId("627289becf55453d96c4bd17")],
		// SOC 195.1
		[ObjectId("626d42befee24c0a7a8e930e")],
		// COMM 10
		[ObjectId("627289becf55453d96c4bd18")],
		// SOC 152
		[ObjectId("627289becf55453d96c4bd19")],
		// SOC 166
		[ObjectId("627289becf55453d96c4bd1a")],
		// SOC 192
		[ObjectId("627289becf55453d96c4bd1b")],
		// SOC 198
		[ObjectId("627289becf55453d96c4bd1c")],
		// SOC 114
		[ObjectId("627289becf55453d96c4bd1d")],
		// SOC 120
		[ObjectId("627289becf55453d96c4bd1e")],
		// SOC 180
		[ObjectId("627289becf55453d96c4bd1f")],
		// SOC 191
		[ObjectId("627289becf55453d96c4bd20")],
		// SOC 199
		[ObjectId("627289becf55453d96c4bd21")],
		// SOC 200
		[ObjectId("627289becf55453d96c4bd22")],
		// SOC 112
		[ObjectId("627289becf55453d96c4bd23"),
		// SOC 160
		ObjectId("627289becf55453d96c4bd24")],
		// SOC 165
		[ObjectId("627289becf55453d96c4bd25"),
		// SOC 170
		ObjectId("627289becf55453d96c4bd26")]
		// SOC 175
	],
	'specializationUnits': 21,
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
