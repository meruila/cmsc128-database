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

const degree6 = {
	'name': 'BSSTAT',
	'major': 'SP',
	'subjects': [
		[ObjectId('626d42befee24c0a7a8e930f')],
		// {
		// 	"code" : "ETHICS 1",
		// 	"units" : 3
		// },
		[ObjectId('626d42befee24c0a7a8e9310'),
		// {
		// 	"code" : "KAS 1",
		// 	"units" : 3
		// },
		ObjectId('626d42befee24c0a7a8e9311')],
		// {
		// 	"code" : "HIST 1",
		// 	"units" : 3
		// },
		[ObjectId('62728cc3591bd41f02539496')],
		// {
		// 	"code" : "MATH 27",
		// 	"units" : 3
		// },
		[ObjectId('62728d04ecce07f44e4d175a')],
		// {
		// 	"code" : "BIO 30",
		// 	"units" : 3
		// },
		[ObjectId('62728df25f73ec537aa62c24')],
		// {
		// 	"code" : "STAT 101",
		// 	"units" : 3
		// },
		[ObjectId('626d44d7eb3a38230c7a3e76')],
		// {
		// 	"code" : "HK 11",
		// 	"units" : 0
		// },
		[ObjectId('626d42befee24c0a7a8e930d')],
		// {
		// 	"code" : "ARTS 1",
		// 	"units" : 3
		// },
		[ObjectId('62728d04ecce07f44e4d1759')],
		// {
		// 	"code" : "MATH 28",
		// 	"units" : 3
		// },
		[ObjectId('62728d04ecce07f44e4d1761')],
		// {
		// 	"code" : "CMSC 12",
		// 	"units" : 3
		// },
		[ObjectId('62728d04ecce07f44e4d176b')],
		// {
		// 	"code" : "STAT 162",
		// 	"units" : 3
		// },
		[ObjectId('626d44d7eb3a38230c7a3e7a'),
		// {
		// 	"code" : "HK 12",
		// 	"units" : 0
		// },
		ObjectId('626d44d7eb3a38230c7a3e7b')],
		// {
		// 	"code" : "HK 13",
		// 	"units" : 0
		// },
		[ObjectId('62729638aa9f273873972315')],
		// {
		// 	"code" : "STAT 135",
		// 	"units" : 3
		// },
		[ObjectId('62729641ce27ee52b0575010')],
		// {
		// 	"code" : "STAT 182",
		// 	"units" : 3
		// },
		[ObjectId('626d42befee24c0a7a8e9312')],
		// {
		// 	"code" : "STS 1",
		// 	"units" : 3
		// },
		[ObjectId('627292bbe42248877729dd82')],
		// {
		// 	"code" : "CMSC 21",
		// 	"units" : 3
		// },
		[ObjectId('62728748ad94f0ad06fe971f')],
		// {
		// 	"code" : "ECON 11",
		// 	"units" : 3
		// },
		[ObjectId('62729641ce27ee52b0575011')],
		// {
		// 	"code" : "STAT 144",
		// 	"units" : 3
		// },
		[ObjectId('62729641ce27ee52b0575012')],
		// {
		// 	"code" : "STAT 168",
		// 	"units" : 3
		// },
		[ObjectId('62729641ce27ee52b0575013')],
		// {
		// 	"code" : "MATH 182",
		// 	"units" : 3
		// },
		[ObjectId('627292bbe42248877729dd84')],
		// {
		// 	"code" : "CMSC 22",
		// 	"units" : 3
		// },
		[ObjectId('627290194e19b2ffd466b9d0')],
		// {
		// 	"code" : "ABME 10",
		// 	"units" : 3
		// },
		[ObjectId('62729641ce27ee52b0575014')],
		// {
		// 	"code" : "STAT 145",
		// 	"units" : 3
		// },
		[ObjectId('62729641ce27ee52b0575015')],
		// {
		// 	"code" : "STAT 163",
		// 	"units" : 3
		// },
		[ObjectId('626d44d7eb3a38230c7a3e81')],
		// {
		// 	"code" : "NSTP 1",
		// 	"units" : 0
		// },
		[ObjectId('626d42befee24c0a7a8e930e')],
		// {
		// 	"code" : "COMM 10",
		// 	"units" : 3
		// },
		[ObjectId('62729641ce27ee52b0575016')],
		// {
		// 	"code" : "STAT 146",
		// 	"units" : 3
		// },
		[ObjectId('62729641ce27ee52b0575017')],
		// {
		// 	"code" : "STAT 173",
		// 	"units" : 3
		// },
		[ObjectId('62729641ce27ee52b0575018')],
		// {
		// 	"code" : "STAT 175",
		// 	"units" : 3
		// },
		[ObjectId('62729641ce27ee52b0575019')],
		// {
		// 	"code" : "STAT 181",
		// 	"units" : 3
		// },
		[ObjectId('626d44d7eb3a38230c7a3e85')],
		// {
		// 	"code" : "NSTP 2",
		// 	"units" : 0
		// },
		[ObjectId('627292bbe42248877729dd8a')],
		// {
		// 	"code" : "CMSC 127",
		// 	"units" : 3
		// },
		[ObjectId('62729641ce27ee52b057501a')],
		// {
		// 	"code" : "STAT 147",
		// 	"units" : 3
		// },
		[ObjectId('62729641ce27ee52b057501b')],
		// {
		// 	"code" : "STAT 151",
		// 	"units" : 3
		// },
		[ObjectId('62729641ce27ee52b057501c')],
		// {
		// 	"code" : "STAT 156",
		// 	"units" : 3
		// },
		[ObjectId('627292c8486fcb85aa703aca')],
		// {
		// 	"code" : "ENG 10",
		// 	"units" : 3
		// },
		[ObjectId('62729641ce27ee52b0575020')],
		// {
		// 	"code" : "STAT 148",
		// 	"units" : 3
		// },
		[ObjectId('62729641ce27ee52b0575021')],
		// {
		// 	"code" : "STAT 165",
		// 	"units" : 3
		// },
		[ObjectId('62729641ce27ee52b0575022')],
		// {
		// 	"code" : "STAT 190",
		// 	"units" : 3
		// },
		[ObjectId('62729641ce27ee52b0575023')],
		// {
		// 	"code" : "STAT 191",
		// 	"units" : 3
		// },
		[ObjectId('62729641ce27ee52b057501d')],
		// {
		// 	"code" : "STAT 174",
		// 	"units" : 3
		// },
		[ObjectId('626d42befee24c0a7a8e9313')],
		// {
		// 	"code" : "PI 10",
		// 	"units" : 3
		// },
		[ObjectId('62729641ce27ee52b0575024')],
		// {
		// 	"code" : "STAT 157",
		// 	"units" : 3
		// },
		[ObjectId('62729641ce27ee52b0575025')],
		// {
		// 	"code" : "STAT 167",
		// 	"units" : 3
		// },
		[ObjectId('62729641ce27ee52b0575026')],
		// {
		// 	"code" : "STAT 183",
		// 	"units" : 3
		// },
		[ObjectId('62729641ce27ee52b0575022')],
		// {
		// 	"code" : "STAT 190",
		// 	"units" : 3
		// },
		[ObjectId('62729641ce27ee52b0575027')],
		// {
		// 	"code" : "STAT 199",
		// 	"units" : 1
		// },
		[ObjectId('62729641ce27ee52b057501e')],
		// {
		// 	"code" : "STAT 192.1",
		// 	"units" : 1
		// },
		[ObjectId('62729641ce27ee52b057501f')]
		// {
		// 	"code" : "STAT 198",
		// 	"units" : 3
		// },
	],
	'specializationUnits': 9,
	'geElectiveUnits': 9,
	'maxThesisIterations': 9,
};

const degree = {
	'name': 'BSMATH',
	'major': 'Thesis',
	'subjects': [
		ObjectId('627293b65a538e6c6223a967'),
		// {
		// 	"code" : "MATH 20",
		// 	"units" : 3
		// },
		ObjectId('62728df25f73ec537aa62c21'),
		// {
		// 	"code" : "MATH 36",
		// 	"units" : 5
		// },
		ObjectId('62728df25f73ec537aa62c22'),
		// {
		// 	"code" : "BIO 11.1",
		// 	"units" : 2
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
		ObjectId('626d42befee24c0a7a8e930f'),
		// {
		// 	"code" : "ETHICS 1",
		// 	"units" : 3
		// },
		ObjectId('626d44d7eb3a38230c7a3e76'),
		// {
		// 	"code" : "HK 11",
		// 	"units" : 0
		// },
		ObjectId('62728df25f73ec537aa62c23'),
		// {
		// 	"code" : "MATH 37",
		// 	"units" : 3
		// },
		ObjectId('62728df25f73ec537aa62c24'),
		// {
		// 	"code" : "STAT 101",
		// 	"units" : 3
		// },
		ObjectId('62728cc3591bd41f02539493'),
		// {
		// 	"code" : "CHEM 18",
		// 	"units" : 3
		// },
		ObjectId('62728cc3591bd41f02539494'),
		// {
		// 	"code" : "CHEM 18.1",
		// 	"units" : 2
		// },
		ObjectId('626d42befee24c0a7a8e930d'),
		// {
		// 	"code" : "ARTS 1",
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
		ObjectId('62728e10280e1499e84e2231'),
		// {
		// 	"code" : "MATH 38",
		// 	"units" : 5
		// },
		ObjectId('62728e10280e1499e84e2232'),
		// {
		// 	"code" : "MATH 101",
		// 	"units" : 3
		// },
		ObjectId('62728e10280e1499e84e2233'),
		// {
		// 	"code" : "PHYS 51",
		// 	"units" : 4
		// },
		ObjectId('62728e10280e1499e84e2234'),
		// {
		// 	"code" : "PHYS 51.1",
		// 	"units" : 1
		// },
		ObjectId('626d44d7eb3a38230c7a3e81'),
		// {
		// 	"code" : "NSTP 1",
		// 	"units" : 0
		// },
		ObjectId('627293e1fc9afe8f46ba59aa'),
		// {
		// 	"code" : "MATH 103",
		// 	"units" : 3
		// },
		ObjectId('627293e1fc9afe8f46ba59ab'),
		// {
		// 	"code" : "MATH 138",
		// 	"units" : 3
		// },
		ObjectId('627293e1fc9afe8f46ba59ac'),
		// {
		// 	"code" : "MATH 141",
		// 	"units" : 3
		// },
		ObjectId('62728d04ecce07f44e4d1762'),
		// {
		// 	"code" : "AMAT 152",
		// 	"units" : 3
		// },
		ObjectId('626d42befee24c0a7a8e9312'),
		// {
		// 	"code" : "STS 1",
		// 	"units" : 3
		// },
		ObjectId('626d44d7eb3a38230c7a3e85'),
		// {
		// 	"code" : "NSTP 2",
		// 	"units" : 0
		// },
		ObjectId('627293efd2258011801da807'),
		// {
		// 	"code" : "MATH 111",
		// 	"units" : 3
		// },
		ObjectId('62728e1f77ef69a8b992531e'),
		// {
		// 	"code" : "MATH 155",
		// 	"units" : 3
		// },
		ObjectId('62728606f5ec17dac940459d'),
		// {
		// 	"code" : "COMA 150",
		// 	"units" : 3
		// },
		ObjectId('626d42befee24c0a7a8e930e'),
		// {
		// 	"code" : "COMM 10",
		// 	"units" : 3
		// },
		ObjectId('627293fb25ee6c7d1b0249dd'),
		// {
		// 	"code" : "MATH 120",
		// 	"units" : 3
		// },
		ObjectId('627293fb25ee6c7d1b0249de'),
		// {
		// 	"code" : "MATH 133",
		// 	"units" : 3
		// },
		ObjectId('62728e1f77ef69a8b992531b'),
		// {
		// 	"code" : "MATH 151",
		// 	"units" : 3
		// },
		ObjectId('626d42befee24c0a7a8e9313'),
		// {
		// 	"code" : "PI 10",
		// 	"units" : 3
		// },
		ObjectId('6283e8ed0175f7122e43e496'),
		// {
		// 	"code" : "MATH 198",
		// 	"units" : 3
		// },
		ObjectId('627294067d4a78a8ddf24299'),
		// {
		// 	"code" : "MATH 200",
		// 	"units" : 3
		// },
		ObjectId('627294067d4a78a8ddf2429a'),
		// {
		// 	"code" : "MATH 135",
		// 	"units" : 3
		// },
		ObjectId('627294067d4a78a8ddf2429b'),
		// {
		// 	"code" : "MATH 165",
		// 	"units" : 3
		// },
		ObjectId('62728e1f77ef69a8b992531d'),
		// {
		// 	"code" : "MATH 181",
		// 	"units" : 3
		// },
		ObjectId('62729422a4b8a01428939150'),
		// {
		// 	"code" : "MATH 192",
		// 	"units" : 3
		// },
		ObjectId('62729422a4b8a01428939151'),
		// {
		// 	"code" : "MATH 199",
		// 	"units" : 1
		// },
	],
	'specializationUnits': 15,
	'geElectiveUnits': 9,
	'maxThesisIterations': 9,
};

const degree2 = {
	'name': 'BSMATH',
	'major': 'SP',
	'subjects': [
		ObjectId('627293b65a538e6c6223a967'),
		// {
		// 	"code" : "MATH 20",
		// 	"units" : 3
		// },
		ObjectId('62728df25f73ec537aa62c21'),
		// {
		// 	"code" : "MATH 36",
		// 	"units" : 5
		// },
		ObjectId('62728df25f73ec537aa62c22'),
		// {
		// 	"code" : "BIO 11.1",
		// 	"units" : 2
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
		ObjectId('626d42befee24c0a7a8e930f'),
		// {
		// 	"code" : "ETHICS 1",
		// 	"units" : 3
		// },
		ObjectId('626d44d7eb3a38230c7a3e76'),
		// {
		// 	"code" : "HK 11",
		// 	"units" : 0
		// },
		ObjectId('62728df25f73ec537aa62c23'),
		// {
		// 	"code" : "MATH 37",
		// 	"units" : 3
		// },
		ObjectId('62728df25f73ec537aa62c24'),
		// {
		// 	"code" : "STAT 101",
		// 	"units" : 3
		// },
		ObjectId('62728cc3591bd41f02539493'),
		// {
		// 	"code" : "CHEM 18",
		// 	"units" : 3
		// },
		ObjectId('62728cc3591bd41f02539494'),
		// {
		// 	"code" : "CHEM 18.1",
		// 	"units" : 2
		// },
		ObjectId('626d42befee24c0a7a8e930d'),
		// {
		// 	"code" : "ARTS 1",
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
		ObjectId('62728e10280e1499e84e2231'),
		// {
		// 	"code" : "MATH 38",
		// 	"units" : 5
		// },
		ObjectId('62728e10280e1499e84e2232'),
		// {
		// 	"code" : "MATH 101",
		// 	"units" : 3
		// },
		ObjectId('62728e10280e1499e84e2233'),
		// {
		// 	"code" : "PHYS 51",
		// 	"units" : 4
		// },
		ObjectId('62728e10280e1499e84e2234'),
		// {
		// 	"code" : "PHYS 51.1",
		// 	"units" : 1
		// },
		ObjectId('626d44d7eb3a38230c7a3e81'),
		// {
		// 	"code" : "NSTP 1",
		// 	"units" : 0
		// },
		ObjectId('627293e1fc9afe8f46ba59aa'),
		// {
		// 	"code" : "MATH 103",
		// 	"units" : 3
		// },
		ObjectId('627293e1fc9afe8f46ba59ab'),
		// {
		// 	"code" : "MATH 138",
		// 	"units" : 3
		// },
		ObjectId('627293e1fc9afe8f46ba59ac'),
		// {
		// 	"code" : "MATH 141",
		// 	"units" : 3
		// },
		ObjectId('62728d04ecce07f44e4d1762'),
		// {
		// 	"code" : "AMAT 152",
		// 	"units" : 3
		// },
		ObjectId('626d42befee24c0a7a8e9312'),
		// {
		// 	"code" : "STS 1",
		// 	"units" : 3
		// },
		ObjectId('626d44d7eb3a38230c7a3e85'),
		// {
		// 	"code" : "NSTP 2",
		// 	"units" : 0
		// },
		ObjectId('627293efd2258011801da807'),
		// {
		// 	"code" : "MATH 111",
		// 	"units" : 3
		// },
		ObjectId('62728e1f77ef69a8b992531e'),
		// {
		// 	"code" : "MATH 155",
		// 	"units" : 3
		// },
		ObjectId('62728606f5ec17dac940459d'),
		// {
		// 	"code" : "COMA 150",
		// 	"units" : 3
		// },
		ObjectId('626d42befee24c0a7a8e930e'),
		// {
		// 	"code" : "COMM 10",
		// 	"units" : 3
		// },
		ObjectId('627293fb25ee6c7d1b0249dd'),
		// {
		// 	"code" : "MATH 120",
		// 	"units" : 3
		// },
		ObjectId('627293fb25ee6c7d1b0249de'),
		// {
		// 	"code" : "MATH 133",
		// 	"units" : 3
		// },
		ObjectId('62728e1f77ef69a8b992531b'),
		// {
		// 	"code" : "MATH 151",
		// 	"units" : 3
		// },
		ObjectId('626d42befee24c0a7a8e9313'),
		// {
		// 	"code" : "PI 10",
		// 	"units" : 3
		// },
		ObjectId('6283e8ed0175f7122e43e496'),
		// {
		// 	"code" : "MATH 198",
		// 	"units" : 3
		// },
		ObjectId('627294067d4a78a8ddf2429a'),
		// {
		// 	"code" : "MATH 135",
		// 	"units" : 3
		// },
		ObjectId('627294067d4a78a8ddf2429b'),
		// {
		// 	"code" : "MATH 165",
		// 	"units" : 3
		// },
		ObjectId('62728e1f77ef69a8b992531d'),
		// {
		// 	"code" : "MATH 181",
		// 	"units" : 3
		// },
		ObjectId('62729422a4b8a01428939152'),
		// {
		// 	"code" : "MATH 190",
		// 	"units" : 3
		// },
		ObjectId('62729422a4b8a01428939150'),
		// {
		// 	"code" : "MATH 192",
		// 	"units" : 3
		// },
		ObjectId('62729422a4b8a01428939151'),
		// {
		// 	"code" : "MATH 199",
		// 	"units" : 1
		// },
	],
	'specializationUnits': 18,
	'geElectiveUnits': 9,
	'maxThesisIterations': 3,
};

const go = async () => {
	try {
		let res = await Degree.create(degree6);
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
