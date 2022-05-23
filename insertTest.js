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
	'name': 'BSAPHY',
	'major': 'Thesis',
	'subjects': [
		[ObjectId("62728f198c3653b70791d9c9")],
		// PHYS 101
		[ObjectId("62728cc3591bd41f02539493")],
		// CHEM 18
		[ObjectId("62728cc3591bd41f02539494")],
		// CHEM 18.1
		[ObjectId("62728cc3591bd41f02539496")],
		// MATH 27
		[ObjectId("626d42befee24c0a7a8e930d")],
		// ARTS 1
		[ObjectId("626d42befee24c0a7a8e9310"),
		// KAS 1
		ObjectId("626d42befee24c0a7a8e9311")],
		// HIST 1
		[ObjectId("626d44d7eb3a38230c7a3e76")],
		// HK 11
		[ObjectId("62728f198c3653b70791d9ca")],
		// PHYS 102
		[ObjectId("62728f198c3653b70791d9cb")],
		// PHYS 111
		[ObjectId("62728d04ecce07f44e4d1759")],
		// MATH 28
		[ObjectId("62728606f5ec17dac940459d")],
		// COMA 150
		[ObjectId("626d44d7eb3a38230c7a3e7a"),
		// HK 12
		ObjectId("626d44d7eb3a38230c7a3e7b")],
		// HK 13
		[ObjectId("62728f25faca18b473a45e70")],
		// APHY 10.1
		[ObjectId("62728f25faca18b473a45e71")],
		// APHY 101
		[ObjectId("62728f25faca18b473a45e72")],
		// PHYS 103
		[ObjectId("62728f25faca18b473a45e73")],
		// PHYS 112
		[ObjectId("626d42befee24c0a7a8e930f")],
		// ETHICS 1
		[ObjectId("626d44d7eb3a38230c7a3e81")],
		// NSTP 1
		[ObjectId("62728f25faca18b473a45e74")],
		// PHYS 104
		[ObjectId("62728f25faca18b473a45e75")],
		// PHYS 113
		[ObjectId("62728f25faca18b473a45e76")],
		// PHYS 121
		[ObjectId("628124c3daea5e7e71bb522b")],
		// PHYS 131
		[ObjectId("626d44d7eb3a38230c7a3e85")],
		// NSTP 2
		[ObjectId("62728f25faca18b473a45e77")],
		// APHY 102
		[ObjectId("62728f25faca18b473a45e78")],
		// PHYS 115
		[ObjectId("62728f25faca18b473a45e79")],
		// PHYS 122
		[ObjectId("62728f25faca18b473a45e7a")],
		// PHYS 132
		[ObjectId("62728f25faca18b473a45e7b")],
		// PHYS 192.1
		[ObjectId("626d42befee24c0a7a8e9313")],
		// PI 10
		[ObjectId("62728f25faca18b473a45e7c")],
		// PHYS 141
		[ObjectId("62728f25faca18b473a45e7d")],
		// PHYS 151
		[ObjectId("62728f25faca18b473a45e7e")],
		// PHYS 165
		[ObjectId("62728f25faca18b473a45e7f")],
		// PHYS 195
		[ObjectId("626d42befee24c0a7a8e930e")],
		// COMM 10
		[ObjectId("628126ce019bd45416993ca3")],
		// APHY 198
		[ObjectId("62728f25faca18b473a45e80")],
		// APHY 200
		[ObjectId("62728f25faca18b473a45e81")],
		// PHYS 142
		[ObjectId("62728f25faca18b473a45e82")],
		// APHY 191
		[ObjectId("62728f25faca18b473a45e83")],
		// APHY 199
		[ObjectId("626d42befee24c0a7a8e9312")]
		// STS 1
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
