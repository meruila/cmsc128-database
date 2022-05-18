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

<<<<<<< Updated upstream
// const degree = {
// 	"name" : "BSMST",
// 	"major" : "Chemistry",
// 	"subjects" : [
// 		[ObjectId("6281243c9aa35146663c8010")],
// 		// {
// 		// 	"code" : "MST 101a",
// 		// 	"units" : 1
// 		// },
// 		[ObjectId("62728df25f73ec537aa62c22")],
// 		// {
// 		// 	"code" : "BIO 11.1",
// 		// 	"units" : 2
// 		// },
// 		[ObjectId("62728cc3591bd41f02539493")],
// 		// {
// 		// 	"code" : "CHEM 18",
// 		// 	"units" : 3
// 		// },
// 		[ObjectId("62728cc3591bd41f02539494")],
// 		// {
// 		// 	"code" : "CHEM 18.1",
// 		// 	"units" : 2
// 		// },
// 		[ObjectId("6281243c9aa35146663c8011")],
// 		// {
// 		// 	"code" : "PHYS 50",
// 		// 	"units" : 3
// 		// },
// 		[ObjectId("62729007ab87167c1fc0cb81")],
// 		// {
// 		// 	"code" : "MATH 25",
// 		// 	"units" : 3
// 		// },
// 		[ObjectId("626d42befee24c0a7a8e9312")],
// 		// {
// 		// 	"code" : "STS 1",
// 		// 	"units" : 3
// 		// },
// 		[ObjectId("626d42befee24c0a7a8e9313")],
// 		// {
// 		// 	"code" : "PI 10",
// 		// 	"units" : 3
// 		// },
// 		[ObjectId("626d44d7eb3a38230c7a3e76")],
// 		// {
// 		// 	"code" : "HK 11",
// 		// 	"units" : 0
// 		// },
// 		[ObjectId("6281243c9aa35146663c8012")],
// 		// {
// 		// 	"code" : "MST 101B",
// 		// 	"units" : 1
// 		// },
// 		[ObjectId("62729007ab87167c1fc0cb84")],
// 		// {
// 		// 	"code" : "BIO 14",
// 		// 	"units" : 5
// 		// },
// 		[ObjectId("62729007ab87167c1fc0cb82")],
// 		// {
// 		// 	"code" : "CHEM 40",
// 		// 	"units" : 4
// 		// },
// 		[ObjectId("62729007ab87167c1fc0cb83")],
// 		// {
// 		// 	"code" : "CHEM 40.1",
// 		// 	"units" : 1
// 		// },
// 		[ObjectId("62728df25f73ec537aa62c20")],
// 		// {
// 		// 	"code" : "AMAT 19",
// 		// 	"units" : 3
// 		// },
// 		[ObjectId("62728cc3591bd41f02539496")],
// 		// {
// 		// 	"code" : "MATH 27",
// 		// 	"units" : 3
// 		// },
// 		[ObjectId("626d42befee24c0a7a8e9310"), 
// 		ObjectId("626d42befee24c0a7a8e9311")],
// 		// {
// 		// 	"code" : "KAS 1",
// 		// 	"units" : 3
// 		// },
		
// 		// {
// 		// 	"code" : "HIST 1",
// 		// 	"units" : 3
// 		// },
// 		[ObjectId("626d44d7eb3a38230c7a3e7a"),
// 		ObjectId("626d44d7eb3a38230c7a3e7b")],
// 		// {
// 		// 	"code" : "HK 12",
// 		// 	"units" : 0
// 		// },

// 		// {
// 		// 	"code" : "HK 13",
// 		// 	"units" : 0
// 		// },
// 		[ObjectId("6281243c9aa35146663c8010"),
// 		// {
// 		// 	"code" : "EDUC 102",
// 		// 	"units" : 3
// 		// },
// 		ObjectId("62728d04ecce07f44e4d175c"),
// 		// {
// 		// 	"code" : "CHEM 32",
// 		// 	"units" : 3
// 		// },
// 		ObjectId("62728d04ecce07f44e4d175d"),
//         // {
// 		// 	"code" : "CHEM 32.1",
// 		// 	"units" : 2
// 		// },
// 		ObjectId("62728d04ecce07f44e4d175a"),
// 		// {
// 		// 	"code" : "BIO 30",
// 		// 	"units" : 3
// 		// },
// 		ObjectId("62728d04ecce07f44e4d176b"),
// 		// {
// 		// 	"code" : "STAT 162",
// 		// 	"units" : 3
// 		// },
// 		ObjectId("6281245283f2534fc23c64cc"),
// 		// 	"code" : "ETHICS 1",
// 		// 	"units" : 3
// 		// },
// 		ObjectId("626d44d7eb3a38230c7a3e7a"),
// 		// {
// 		// 	"code" : "HK 12",
// 		// 	"units" : 0
// 		// },
// 		ObjectId("626d44d7eb3a38230c7a3e7b"),
// 		// {
// 		// 	"code" : "HK 13",
// 		// 	"units" : 0
// 		// },
// 		ObjectId("626d44d7eb3a38230c7a3e81"),
// 		// {
// 		// 	"code" : "NSTP 1",
// 		// 	"code" : "EDUC 122",
// 		// 	"units" : 3
// 		// },
// 		ObjectId("627289becf55453d96c4bd0f"),
// 		// {
// 		// 	"code" : "STAT 166",
// 		// 	"units" : 3
// 		// },
// 		ObjectId("62729007ab87167c1fc0cb87"),
// 		// 	"code" : "MST 123",
// 		// 	"units" : 5
// 		// },
// 		ObjectId("6281243c9aa35146663c8015"),
//         // {
// 		// 	"code" : "EDUC 111",
// 		// 	"units" : 3
// 		// },
// 		ObjectId("6283a29fa802c7a41e6e2e8a"),
// 		// {
// 		// 	"code" : "BIO 160.1",
// 		// 	"units" : 3
// 		// },
// 		ObjectId("62728d04ecce07f44e4d1765"),
// 		// {
// 		// 	"code" : "PHYS 72",
// 		// 	"units" : 4
// 		// },
// 		ObjectId("62728d04ecce07f44e4d1766"),
// 		// {
// 		// 	"code" : "PHYS 72.1",
// 		// 	"units" : 1
// 		// },
// 		ObjectId("62812469c68081ea6a30df43"),
// 		// {
// 		// 	"code" : "MST 195",
// 		// 	"units" : 3
// 		// },
// 		ObjectId("62812469c68081ea6a30df45"),
// 		// {
// 		// 	"code" : "MST 200A",
// 		// 	"units" : 3
// 		// },
// 		ObjectId("62812469c68081ea6a30df42"),
//         // {
// 		// 	"code" : "EDUC 144",
// 		// 	"units" : 3
// 		// },
// 		ObjectId("6283a395a74021d2086763ab"),
//         // {
// 		// 	"code" : "CHEM 102",
// 		// 	"units" : 3
// 		// },
// 		ObjectId("62812469c68081ea6a30df46"),
// 		// {
// 		// 	"code" : "MATH 18",
// 		// 	"code" : "MST 190",
// 		// 	"units" : 3
// 		// },
// 		ObjectId("62812469c68081ea6a30df49"),
// 		// {
// 		// 	"code" : "MST 200B",
// 		// 	"units" : 3
// 		// },
// 		ObjectId("62728d04ecce07f44e4d1786"),
//         // {
// 		// 	"code" : "CHEM 180",
// 		// 	"units" : 3
// 		// },
// 		ObjectId("626d42befee24c0a7a8e930d"),
// 		// {
// 		// 	"code" : "ARTS 1",
// 		// 	"units" : 3
// 		// },
// 		ObjectId("62812469c68081ea6a30df48"),
// 		// {
// 		// 	"code" : "MST 191",
// 		// 	"units" : 3
// 		// },
// 		ObjectId("62812469c68081ea6a30df44")
// 		// {
// 		// 	"code" : "MST 199",
// 		// 	"units" : 1
// 		// }
// 	],
// 	"specializationUnits" : 0,
// 	"geElectiveUnits" : 9,
// 	"maxThesisIterations" : 3
// };
=======
const degree = {
	'name': 'BASOCIO',
	'major': '',
	'subjects': [		
		ObjectId("626d42befee24c0a7a8e930f"),
		// ETHICS 1
		ObjectId("626d42befee24c0a7a8e9311"),
		// HIST 1
		ObjectId("626d42befee24c0a7a8e9310"),
		// KAS 1
		ObjectId("627289becf55453d96c4bd09"),
		// SOC 10
		ObjectId("627289becf55453d96c4bd0a"),
		// ANTH 10
		ObjectId("627289becf55453d96c4bd0b"),
		// PSY 10
		ObjectId("626d44d7eb3a38230c7a3e76"),
		// HK 11
		ObjectId("62853b58f921a9134490fe4c"),
		// HIST 10
		ObjectId("62728748ad94f0ad06fe9720"),
		// POSC 10
		ObjectId("627289becf55453d96c4bd0c"),
		// SOC 100
		ObjectId("627289becf55453d96c4bd0d"),
		// SOC 110
		ObjectId("626d44d7eb3a38230c7a3e7a"),
		// HK 12
		ObjectId("626d44d7eb3a38230c7a3e7b"),
		// HK 13
		ObjectId("626d42befee24c0a7a8e9312"),
		// STS 1
		ObjectId("626d42befee24c0a7a8e930d"),
		// ARTS 1
		ObjectId("62728748ad94f0ad06fe971f"),
		// ECON 11
		ObjectId("627289becf55453d96c4bd0e"),
		// SOC 116
		ObjectId("627289becf55453d96c4bd0f"),
		// STAT 166
		ObjectId("627289becf55453d96c4bd10"),
		// SOC 130
		ObjectId("627289becf55453d96c4bd11"),
		// SOC 135
		ObjectId("626d44d7eb3a38230c7a3e81"),
		// NSTP 1
		ObjectId("627289becf55453d96c4bd12"),
		// AERS 160
		ObjectId("627289becf55453d96c4bd13"),
		// SOC 140
		ObjectId("626d44d7eb3a38230c7a3e85"),
		// NSTP 2
		ObjectId("626d42befee24c0a7a8e9313"),
		// PI 10
		ObjectId("627289becf55453d96c4bd14"),
		// SOC 107
		ObjectId("627289becf55453d96c4bd15"),
		// SOC 151
		ObjectId("627289becf55453d96c4bd16"),
		// SOC 195
		ObjectId("627289becf55453d96c4bd17"),
		// SOC 195.1
		ObjectId("626d42befee24c0a7a8e930e"),
		// COMM 10
		ObjectId("627289becf55453d96c4bd18"),
		// SOC 152
		ObjectId("627289becf55453d96c4bd19"),
		// SOC 166
		ObjectId("627289becf55453d96c4bd1a"),
		// SOC 192
		ObjectId("627289becf55453d96c4bd1b"),
		// SOC 198
		ObjectId("627289becf55453d96c4bd1c"),
		// SOC 114
		ObjectId("627289becf55453d96c4bd1d"),
		// SOC 120
		ObjectId("627289becf55453d96c4bd1e"),
		// SOC 180
		ObjectId("627289becf55453d96c4bd1f"),
		// SOC 191
		ObjectId("627289becf55453d96c4bd20"),
		// SOC 199
		ObjectId("627289becf55453d96c4bd21"),
		// SOC 200
		ObjectId("627289becf55453d96c4bd22"),
		// SOC 112
		ObjectId("627289becf55453d96c4bd23"),
		// SOC 160
		ObjectId("627289becf55453d96c4bd24"),
		// SOC 165
		ObjectId("627289becf55453d96c4bd25"),
		// SOC 170
		ObjectId("627289becf55453d96c4bd26")
		// SOC 175
	],
	'specializationUnits': 21,
	'geElectiveUnits': 9,
	'maxThesisIterations': 9,
};
>>>>>>> Stashed changes

const go = async () => {
	try {
		let res = await Degree.create(degree);
		console.log(res);
		console.log('Inserted degree program');
	} catch (e) {
		console.log(e);
	}
};

// go();

// [SUBJECT INSERT CODE]
// Subject.insertMany([
// 	{ code: 'HIST 10', units: 3 }
// ])
// 	.then(function () {
// 		console.log('Data inserted'); // Success
// 	})
// 	.catch(function (error) {
// 		console.log(error); // Failure
// 	});
