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
	'name': 'BSBIO',
	'major': 'Thesis',
	'subjects': [
		[ObjectId("62728cc3591bd41f02539493")],
		// CHEM 18
		[ObjectId("62729007ab87167c1fc0cb81")],
		//MATH 25
		[ObjectId("62728cc3591bd41f02539495")],
		//MCB 11
		[ObjectId("626d42befee24c0a7a8e9310"),
		// KAS 1
		ObjectId("626d42befee24c0a7a8e9311")],
		// HIST 1
		[ObjectId("626d42befee24c0a7a8e930d")],
		// ARTS 1
		[ObjectId("626d42befee24c0a7a8e9312")],
		// STS 1
		[ObjectId("626d44d7eb3a38230c7a3e76")],
		// HK 11
		[ObjectId("62728df25f73ec537aa62c22")],
		//BIO 11.1
		[ObjectId("62728cc3591bd41f02539494")],
		// CHEM 18.1
		[ObjectId("62728d04ecce07f44e4d175a")],
		//BIO 30
		[ObjectId("626d42befee24c0a7a8e9313")],
		// PI 10
		[ObjectId("626d44d7eb3a38230c7a3e7a"),
		// HK 12
		ObjectId("626d44d7eb3a38230c7a3e7b")],
		// HK 13
		[ObjectId("62729007ab87167c1fc0cb82")],
		//CHEM 40
		[ObjectId("62729007ab87167c1fc0cb83")],
		//CHEM 40.1
		[ObjectId("62729007ab87167c1fc0cb84")],
		//BIO 14
		[ObjectId("62729007ab87167c1fc0cb85")],
		//BOT 14
		[ObjectId("62729007ab87167c1fc0cb86")],
		//ZOO 14
		[ObjectId("62729007ab87167c1fc0cb87")],
		//CHEM 160
		[ObjectId("62729007ab87167c1fc0cb88")],
		//BIO 150
		[ObjectId("626d44d7eb3a38230c7a3e81")],
		// NSTP 1
		[ObjectId("62728e10280e1499e84e2233")],
		//PHYS 51
		[ObjectId("62728e10280e1499e84e2234")],
		//PHYS 51.1
		[ObjectId("627290194e19b2ffd466b9cd")],
		//BIO 101
		[ObjectId("627290194e19b2ffd466b9ce")],
		//CHEM 160.1
		[ObjectId("627290194e19b2ffd466b9cf")],
		//BIO 140
		[ObjectId("627290194e19b2ffd466b9d0")],
		//ABME 10
		[ObjectId("626d44d7eb3a38230c7a3e85")],
		// NSTP 2
		[ObjectId("627290194e19b2ffd466b9d1")],
		//STAT 164
		[ObjectId("627290194e19b2ffd466b9d2")],
		//BIO 120
		[ObjectId("627290194e19b2ffd466b9d3")],
		//BIO 142
		[ObjectId("626d42befee24c0a7a8e930e")],
		// COMM 10
		[ObjectId("627290194e19b2ffd466b9d4")],
		// BIO 195
		[ObjectId("627290194e19b2ffd466b9d5")],
		//BIO 127
		[ObjectId("626d42befee24c0a7a8e930f")],
		// ETHICS 1
		[ObjectId("628132c30a2229912b1b909f")],
		//BIO 198
		[ObjectId("62728606f5ec17dac940459d")],
		// COMA 150
		[ObjectId("627290194e19b2ffd466b9d6")],
		// BIO 199
		[ObjectId("627290194e19b2ffd466b9d7")]
		// BIO 200
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
