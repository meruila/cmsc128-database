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
	'name': 'BSCS',
	'major': 'SP',
	'subjects': [
		ObjectId('62728d04ecce07f44e4d1761'),
		// {
		// 	"code" : "CMSC 12",
		// 	"units" : 3
		// },
		ObjectId('627292bbe42248877729dd81'),
		// {
		// 	"code" : "CMSC 56",
		// 	"units" : 3
		// },
		ObjectId('626d42befee24c0a7a8e930f'),
		// {
		// 	"code" : "ETHICS 1",
		// 	"units" : 3
		// },
		ObjectId('62728cc3591bd41f02539496'),
		// {
		// 	"code" : "MATH 27",
		// 	"units" : 3
		// },
		ObjectId('626d42befee24c0a7a8e9312'),
		// {
		// 	"code" : "STS 1",
		// 	"units" : 3
		// },
		ObjectId('626d44d7eb3a38230c7a3e76'),
		// {
		// 	"code" : "HK 11",
		// 	"units" : 0
		// },
		ObjectId('626d42befee24c0a7a8e930d'),
		// {
		// 	"code" : "ARTS 1",
		// 	"units" : 3
		// },
		ObjectId('627292bbe42248877729dd82'),
		// {
		// 	"code" : "CMSC 21",
		// 	"units" : 3
		// },
		ObjectId('627292bbe42248877729dd83'),
		// {
		// 	"code" : "CMSC 57",
		// 	"units" : 3
		// },
		ObjectId('62728d04ecce07f44e4d1759'),
		// {
		// 	"code" : "MATH 28",
		// 	"units" : 3
		// },
		ObjectId('626d42befee24c0a7a8e9310'),
		// {
		// 	"code" : "KAS 1",
		// 	"units" : 3
		// },
		ObjectId('626d42befee24c0a7a8e9311'),
		// {
		// 	"code" : "HIST 1",
		// 	"units" : 3
		// },
		ObjectId('626d44d7eb3a38230c7a3e7a'),
		// {
		// 	"code" : "HK 12",
		// 	"units" : 0
		// },
		ObjectId('626d44d7eb3a38230c7a3e7b'),
		// {
		// 	"code" : "HK 13",
		// 	"units" : 0
		// },
		ObjectId('627292bbe42248877729dd84'),
		// {
		// 	"code" : "CMSC 22",
		// 	"units" : 3
		// },
		ObjectId('627292bbe42248877729dd85'),
		// {
		// 	"code" : "CMSC 123",
		// 	"units" : 3
		// },
		ObjectId('627292bbe42248877729dd86'),
		// {
		// 	"code" : "CMSC 130",
		// 	"units" : 3
		// },
		ObjectId('627292bbe42248877729dd87'),
		// {
		// 	"code" : "CMSC 150",
		// 	"units" : 3
		// },
		ObjectId('626d42befee24c0a7a8e9313'),
		// {
		// 	"code" : "PI 10",
		// 	"units" : 3
		// },
		ObjectId('626d44d7eb3a38230c7a3e81'),
		// {
		// 	"code" : "NSTP 1",
		// 	"units" : 0
		// },
		ObjectId('627292bbe42248877729dd88'),
		// {
		// 	"code" : "CMSC 23",
		// 	"units" : 3
		// },
		ObjectId('627292bbe42248877729dd89'),
		// {
		// 	"code" : "CMSC 100",
		// 	"units" : 3
		// },
		ObjectId('627292bbe42248877729dd8a'),
		// {
		// 	"code" : "CMSC 127",
		// 	"units" : 3
		// },
		ObjectId('627292bbe42248877729dd8b'),
		// {
		// 	"code" : "CMSC 131",
		// 	"units" : 3
		// },
		ObjectId('62728df25f73ec537aa62c24'),
		// {
		// 	"code" : "STAT 101",
		// 	"units" : 3
		// },
		ObjectId('626d44d7eb3a38230c7a3e85'),
		// {
		// 	"code" : "NSTP 2",
		// 	"units" : 0
		// },
		ObjectId('626d42befee24c0a7a8e930e'),
		// {
		// 	"code" : "COMM 10",
		// 	"units" : 3
		// },
		ObjectId('627292c8486fcb85aa703abd'),
		// {
		// 	"code" : "CMSC 124",
		// 	"units" : 3
		// },
		ObjectId('627292c8486fcb85aa703abe'),
		// {
		// 	"code" : "CMSC 125",
		// 	"units" : 3
		// },
		ObjectId('627292c8486fcb85aa703abf'),
		// {
		// 	"code" : "CMSC 132",
		// 	"units" : 3
		// },
		ObjectId('627292c8486fcb85aa703ac0'),
		// {
		// 	"code" : "CMSC 141",
		// 	"units" : 3
		// },
		ObjectId('627292c8486fcb85aa703ac1'),
		// {
		// 	"code" : "CMSC 170",
		// 	"units" : 3
		// },
		ObjectId('627292c8486fcb85aa703ac2'),
		// {
		// 	"code" : "CMSC 128",
		// 	"units" : 3
		// },
		ObjectId('627292c8486fcb85aa703ac3'),
		// {
		// 	"code" : "CMSC 137",
		// 	"units" : 3
		// },
		ObjectId('627292c8486fcb85aa703ac4'),
		// {
		// 	"code" : "CMSC 142",
		// 	"units" : 3
		// },
		ObjectId('627292c8486fcb85aa703ac5'),
		// {
		// 	"code" : "CMSC 173",
		// 	"units" : 3
		// },
		ObjectId('627292c8486fcb85aa703ac6'),
		// {
		// 	"code" : "CMSC 180",
		// 	"units" : 3
		// },
		ObjectId('6283e8ed0175f7122e43e495'),
		// {
		// 	"code" : "CMSC 198",
		// 	"units" : 3
		// },
		ObjectId('627292c8486fcb85aa703ac7'),
		// {
		// 	"code" : "CMSC 190",
		// 	"units" : 3
		// },
		ObjectId('627292c8486fcb85aa703ac8'),
		// {
		// 	"code" : "CMSC 199",
		// 	"units" : 1
		// },
		ObjectId('627292c8486fcb85aa703aca'),
		// {
		// 	"code" : "ENG 10",
		// 	"units" : 3
		// },
	],
	'specializationUnits': 18,
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
//Subject.insertMany([
//	   //{ code: 'PHYS 193.1', units: 2 },
//	   // { code: 'MATH 198', units: 3 },
//     // { code: "MATH 103", units: 3 },
//     // { code: "AMAT 105", units: 3 }
//     // { code: "MST 101c", units: 1 },
//     // { code: "EDUC 102", units: 3 },
//     // { code: "EDUC 111", units: 3 },
//     // { code: "STAT 166", units: 3 },
//     // { code: "SPCM 156", units: 3 },
//     // { code: "MST 101d", units: 1 },
//     // { code: "DEVC 40", units: 3 },
//     // { code: "MST 40", units: 3 },
//     // { code: "EDUC 122", units: 3 },
//     // { code: "BOT 14", units: 3 },
//     // { code: "CHEM 160", units: 3 },
//     // { code: "MST 123", units: 5 },
//     // { code: "EDUC 144", units: 3 },
//     // { code: "MST 195", units: 3 },
//     // { code: "MST 199", units: 1 },
//     // { code: "MST 200a", units: 3 },
//     // { code: "MATH 18", units: 3 },
//     // { code: "MST 190", units: 3 },
//     // { code: "MST 191", units: 3 },
//     // { code: "MST 200b", units: 3 },
//     // { code: "HFDS 12", units: 3 },
//     // { code: "MATH 190", units: 3 },
//     // { code: "MATH 192", units: 3 },
//     // { code: "CHEM 120.1", units: 2 },
//     // { code: "CHEM 171", units: 3 },
//     // { code: "CHEM 199", units: 1 }
//])
//	.then(function () {
//		console.log('Data inserted'); // Success
//	})
//	.catch(function (error) {
//		console.log(error); // Failure
//	});
