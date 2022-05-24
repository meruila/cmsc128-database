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
	"name" : "BSACHM",
	"major" : "Thesis",
	"subjects" : [
		[
			ObjectId("62728cc3591bd41f02539493")
		],
		[
			ObjectId("62728cc3591bd41f02539494")
		],
		[
			ObjectId("62728cc3591bd41f02539495")
		],
		[
			ObjectId("62728cc3591bd41f02539496")
		],
		[
			ObjectId("626d42befee24c0a7a8e930f")
		],
		[
			ObjectId("626d42befee24c0a7a8e9311"),
			ObjectId("626d42befee24c0a7a8e9310")
		],
		[
			ObjectId("626d44d7eb3a38230c7a3e76")
		],
		[
			ObjectId("62728d04ecce07f44e4d1758")
		],
		[
			ObjectId("62728d04ecce07f44e4d1759")
		],
		[
			ObjectId("62728d04ecce07f44e4d175a")
		],
		[
			ObjectId("62728d04ecce07f44e4d175b")
		],
		[
			ObjectId("626d42befee24c0a7a8e930d")
		],
		[
			ObjectId("626d44d7eb3a38230c7a3e7a"),
			ObjectId("626d44d7eb3a38230c7a3e7b")
		],
		[
			ObjectId("62728d04ecce07f44e4d175c")
		],
		[
			ObjectId("62728d04ecce07f44e4d175d")
		],
		[
			ObjectId("62728d04ecce07f44e4d175e")
		],
		[
			ObjectId("62728d04ecce07f44e4d175f")
		],
		[
			ObjectId("62728d04ecce07f44e4d1760")
		],
		[
			ObjectId("62728d04ecce07f44e4d1761"),
			ObjectId("62728d04ecce07f44e4d1762")
		],
		[
			ObjectId("626d42befee24c0a7a8e9313")
		],
		[
			ObjectId("626d44d7eb3a38230c7a3e81")
		],
		[
			ObjectId("62728d04ecce07f44e4d1763")
		],
		[
			ObjectId("62728d04ecce07f44e4d1764")
		],
		[
			ObjectId("62728d04ecce07f44e4d1765")
		],
		[
			ObjectId("62728d04ecce07f44e4d1766")
		],
		[
			ObjectId("62728d04ecce07f44e4d1767")
		],
		[
			ObjectId("62728d04ecce07f44e4d1768")
		],
		[
			ObjectId("62728748ad94f0ad06fe971f")
		],
		[
			ObjectId("626d44d7eb3a38230c7a3e85")
		],
		[
			ObjectId("62728d04ecce07f44e4d1769")
		],
		[
			ObjectId("62728d04ecce07f44e4d176a")
		],
		[
			ObjectId("62728d04ecce07f44e4d176b")
		],
		[
			ObjectId("62728d04ecce07f44e4d176c")
		],
		[
			ObjectId("62728d04ecce07f44e4d176d"),
			ObjectId("62728d04ecce07f44e4d176e")
		],
		[
			ObjectId("62728d04ecce07f44e4d176f")
		],
		[
			ObjectId("62728d04ecce07f44e4d1770")
		],
		[
			ObjectId("62728d04ecce07f44e4d1771")
		],
		[
			ObjectId("62728d04ecce07f44e4d1772")
		],
		[
			ObjectId("62728d04ecce07f44e4d1773")
		],
		[
			ObjectId("62728d04ecce07f44e4d1774")
		],
		[
			ObjectId("62728d04ecce07f44e4d1775")
		],
		[
			ObjectId("62728d04ecce07f44e4d1776")
		],
		[
			ObjectId("62728d04ecce07f44e4d1777")
		],
		[
			ObjectId("62728d04ecce07f44e4d1778")
		],
		[
			ObjectId("62728d04ecce07f44e4d1779")
		],
		[
			ObjectId("62728d04ecce07f44e4d177a")
		],
		[
			ObjectId("62728d04ecce07f44e4d177b")
		],
		[
			ObjectId("62728d04ecce07f44e4d177c")
		],
		[
			ObjectId("62728d04ecce07f44e4d177d")
		],
		[
			ObjectId("62728d04ecce07f44e4d177e")
		],
		[
			ObjectId("62728d04ecce07f44e4d177f")
		],
		[
			ObjectId("626d42befee24c0a7a8e930e")
		],
		[
			ObjectId("62728d04ecce07f44e4d1780")
		],
		[
			ObjectId("62728d04ecce07f44e4d1781")
		],
		[
			ObjectId("62728d04ecce07f44e4d1782")
		],
		[
			ObjectId("62728d04ecce07f44e4d1783")
		],
		[
			ObjectId("62728d04ecce07f44e4d1784")
		],
		[
			ObjectId("62728d04ecce07f44e4d1785")
		],
		[
			ObjectId("626d42befee24c0a7a8e9312")
		],
		[
			ObjectId("62728d04ecce07f44e4d1786")
		],
		[
			ObjectId("62728d04ecce07f44e4d1787")
		],
		[
			ObjectId("62728d04ecce07f44e4d1788")
		]
	],
	"specializationUnits" : 15,
	"geElectiveUnits" : 9,
	"maxThesisIterations" : 3
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
