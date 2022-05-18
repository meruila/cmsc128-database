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
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
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
	"name" : "BSACHM",
	"major" : "Thesis",
	"subjects" : [
		ObjectId("62728cc3591bd41f02539493"),
		// CHEM 18
		ObjectId("62728cc3591bd41f02539494"),
		// CHEM 18.1
		ObjectId("62728cc3591bd41f02539495"),
		// MCB 11
		ObjectId("62728cc3591bd41f02539496"),
		// MATH 27
		ObjectId("626d42befee24c0a7a8e930f"),
		// ETHICS 1
		ObjectId("626d42befee24c0a7a8e9311"),
		// HIST 1
		ObjectId("626d42befee24c0a7a8e9310"),
		// KAS 1
		ObjectId("626d44d7eb3a38230c7a3e76"),
		// HK 11
		ObjectId("62728d04ecce07f44e4d1758"),
		// CHEM 19
		ObjectId("62728d04ecce07f44e4d1759"),
		// MATH 28
		ObjectId("62728d04ecce07f44e4d175a"),
		// BIO 30
		ObjectId("62728d04ecce07f44e4d175b"),
		// AGRI 31
		ObjectId("626d42befee24c0a7a8e930d"),
		// ARTS 1
		ObjectId("626d44d7eb3a38230c7a3e7a"),
		// HK 12
		ObjectId("626d44d7eb3a38230c7a3e7b"),
		// HK 13
		ObjectId("62728d04ecce07f44e4d175c"),
		// CHEM 32
		ObjectId("62728d04ecce07f44e4d175d"),
		// CHEM 32.1
		ObjectId("62728d04ecce07f44e4d175e"),
		// PHYS 71
		ObjectId("62728d04ecce07f44e4d175f"),
		// PHYS 71.1
		ObjectId("62728d04ecce07f44e4d1760"),
		// BOT 20
		ObjectId("62728d04ecce07f44e4d1761"),
		// CMSC 12
		ObjectId("62728d04ecce07f44e4d1762"),
		// AMAT 152
		ObjectId("626d42befee24c0a7a8e9313"),
		// PI 10
		ObjectId("626d44d7eb3a38230c7a3e81"),
		// NSTP 1
		ObjectId("62728d04ecce07f44e4d1763"),
		// CHEM 43
		ObjectId("62728d04ecce07f44e4d1764"),
		// CHEM 43.1
		ObjectId("62728d04ecce07f44e4d1765"),
		// PHYS 72
		ObjectId("62728d04ecce07f44e4d1766"),
		// PHYS 72.1
		ObjectId("62728d04ecce07f44e4d1767"),
		// AGRI 21
		ObjectId("62728d04ecce07f44e4d1768"),
		// AGRI 32
		ObjectId("62728748ad94f0ad06fe971f"),
		// ECON 11
		ObjectId("626d44d7eb3a38230c7a3e85"),
		// NSTP 2
		ObjectId("62728d04ecce07f44e4d1769"),
		// CHEM 44
		ObjectId("62728d04ecce07f44e4d176a"),
		// CHEM 44.1
		ObjectId("62728d04ecce07f44e4d176b"),
		// STAT 162
		ObjectId("62728d04ecce07f44e4d176c"),
		// AGRI 22
		ObjectId("62728d04ecce07f44e4d176d"),
		// AAE 111
		ObjectId("62728d04ecce07f44e4d176e"),
		// AAE 120
		ObjectId("62728d04ecce07f44e4d176f"),
		// AGRI 61
		ObjectId("62728d04ecce07f44e4d1770"),
		// CHEM 111
		ObjectId("62728d04ecce07f44e4d1771"),
		// CHEM 131
		ObjectId("62728d04ecce07f44e4d1772"),
		// CHEM 140
		ObjectId("62728d04ecce07f44e4d1773"),
		// CHEM 161A
		ObjectId("62728d04ecce07f44e4d1774"),
		// AGRI 51
		ObjectId("62728d04ecce07f44e4d1775"),
		// AGRI 41
		ObjectId("62728d04ecce07f44e4d1776"),
		// CHEM 111.1
		ObjectId("62728d04ecce07f44e4d1777"),
		// CHEM 112
		ObjectId("62728d04ecce07f44e4d1778"),
		// CHEM 137
		ObjectId("62854833e949d344507b2e13"),
		// CHEM 181B
		ObjectId("62728d04ecce07f44e4d177a"),
		// CHEM 192
		ObjectId("62728d04ecce07f44e4d177b"),
		// AGRI 42
		ObjectId("62728d04ecce07f44e4d177c"),
		// CHEM 112.1
		ObjectId("62728d04ecce07f44e4d177d"),
		// CHEM 115
		ObjectId("62728d04ecce07f44e4d177e"),
		// CHEM 137.1
		ObjectId("62854833e949d344507b2e14"),
		// CHEM 181.1
		ObjectId("626d42befee24c0a7a8e930e"),
		// COMM 10
		ObjectId("62728d04ecce07f44e4d1780"),
		// CHEM 198
		ObjectId("62728d04ecce07f44e4d1781"),
		// CHEM 133
		ObjectId("62728d04ecce07f44e4d1782"),
		// CHEM 120
		ObjectId("62728d04ecce07f44e4d1783"),
		// CHEM 199
		ObjectId("627291d58e8742dc2f3176ff"),
		// AGRI 171
		ObjectId("62728d04ecce07f44e4d1785"),
		// ACHM 200
		ObjectId("626d42befee24c0a7a8e9312"),
		// STS 1
		ObjectId("62728d04ecce07f44e4d1786"),
		// CHEM 180
		ObjectId("62728d04ecce07f44e4d1787"),
		// CHEM 185
		ObjectId("62728d04ecce07f44e4d1788"),
		// AGRI 199
	],
	"specializationUnits" : 15,
	"geElectiveUnits" : 9,
	"maxThesisIterations" : 3
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
