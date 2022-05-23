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
	'name': 'BSMATH',
	'major': 'Thesis',
	'subjects': [
		[ObjectId('627293b65a538e6c6223a967')],
		// {
		// 	"code" : "MATH 20",
		// 	"units" : 3
		// },
		[ObjectId('62728df25f73ec537aa62c21')],
		// {
		// 	"code" : "MATH 36",
		// 	"units" : 5
		// },
		[ObjectId('62728df25f73ec537aa62c22')],
		// {
		// 	"code" : "BIO 11.1",
		// 	"units" : 2
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
		[ObjectId('626d42befee24c0a7a8e930f')],
		// {
		// 	"code" : "ETHICS 1",
		// 	"units" : 3
		// },
		[ObjectId('626d44d7eb3a38230c7a3e76')],
		// {
		// 	"code" : "HK 11",
		// 	"units" : 0
		// },
		[ObjectId('62728df25f73ec537aa62c23')],
		// {
		// 	"code" : "MATH 37",
		// 	"units" : 3
		// },
		[ObjectId('62728df25f73ec537aa62c24')],
		// {
		// 	"code" : "STAT 101",
		// 	"units" : 3
		// },
		[ObjectId('62728cc3591bd41f02539493')],
		// {
		// 	"code" : "CHEM 18",
		// 	"units" : 3
		// },
		[ObjectId('62728cc3591bd41f02539494')],
		// {
		// 	"code" : "CHEM 18.1",
		// 	"units" : 2
		// },
		[ObjectId('626d42befee24c0a7a8e930d')],
		// {
		// 	"code" : "ARTS 1",
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
		[ObjectId('62728e10280e1499e84e2231')],
		// {
		// 	"code" : "MATH 38",
		// 	"units" : 5
		// },
		[ObjectId('62728e10280e1499e84e2232')],
		// {
		// 	"code" : "MATH 101",
		// 	"units" : 3
		// },
		[ObjectId('62728e10280e1499e84e2233')],
		// {
		// 	"code" : "PHYS 51",
		// 	"units" : 4
		// },
		[ObjectId('62728e10280e1499e84e2234')],
		// {
		// 	"code" : "PHYS 51.1",
		// 	"units" : 1
		// },
		[ObjectId('626d44d7eb3a38230c7a3e81')],
		// {
		// 	"code" : "NSTP 1",
		// 	"units" : 0
		// },
		[ObjectId('627293e1fc9afe8f46ba59aa')],
		// {
		// 	"code" : "MATH 103",
		// 	"units" : 3
		// },
		[ObjectId('627293e1fc9afe8f46ba59ab')],
		// {
		// 	"code" : "MATH 138",
		// 	"units" : 3
		// },
		[ObjectId('627293e1fc9afe8f46ba59ac')],
		// {
		// 	"code" : "MATH 141",
		// 	"units" : 3
		// },
		[ObjectId('62728d04ecce07f44e4d1762')],
		// {
		// 	"code" : "AMAT 152",
		// 	"units" : 3
		// },
		[ObjectId('626d42befee24c0a7a8e9312')],
		// {
		// 	"code" : "STS 1",
		// 	"units" : 3
		// },
		[ObjectId('626d44d7eb3a38230c7a3e85')],
		// {
		// 	"code" : "NSTP 2",
		// 	"units" : 0
		// },
		[ObjectId('627293efd2258011801da807')],
		// {
		// 	"code" : "MATH 111",
		// 	"units" : 3
		// },
		[ObjectId('62728e1f77ef69a8b992531e')],
		// {
		// 	"code" : "MATH 155",
		// 	"units" : 3
		// },
		[ObjectId("62728e1f77ef69a8b9925320")],
		[ObjectId('62728606f5ec17dac940459d')],
		// {
		// 	"code" : "COMA 150",
		// 	"units" : 3
		// },
		[ObjectId('626d42befee24c0a7a8e930e')],
		// {
		// 	"code" : "COMM 10",
		// 	"units" : 3
		// },
		[ObjectId('627293fb25ee6c7d1b0249dd')],
		// {
		// 	"code" : "MATH 120",
		// 	"units" : 3
		// },
		[ObjectId('627293fb25ee6c7d1b0249de')],
		// {
		// 	"code" : "MATH 133",
		// 	"units" : 3
		// },
		[ObjectId('62728e1f77ef69a8b992531b')],
		// {
		// 	"code" : "MATH 151",
		// 	"units" : 3
		// },
		[ObjectId('626d42befee24c0a7a8e9313')],
		// {
		// 	"code" : "PI 10",
		// 	"units" : 3
		// },
		[ObjectId('6283e8ed0175f7122e43e496')],
		// {
		// 	"code" : "MATH 198",
		// 	"units" : 3
		// },
		[ObjectId('627294067d4a78a8ddf24299')],
		// {
		// 	"code" : "MATH 200",
		// 	"units" : 3
		// },
		[ObjectId('627294067d4a78a8ddf2429a')],
		// {
		// 	"code" : "MATH 135",
		// 	"units" : 3
		// },
		[ObjectId('627294067d4a78a8ddf2429b')],
		// {
		// 	"code" : "MATH 165",
		// 	"units" : 3
		// },
		[ObjectId('62728e1f77ef69a8b992531d')],
		// {
		// 	"code" : "MATH 181",
		// 	"units" : 3
		// },
		[ObjectId('62729422a4b8a01428939150')],
		// {
		// 	"code" : "MATH 192",
		// 	"units" : 3
		// },
		[ObjectId('62729422a4b8a01428939151')],
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
		[ObjectId("62728e1f77ef69a8b9925320")],
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
