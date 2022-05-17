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
	"name" : "BACA",
	"major" : "",
	"subjects" : [
		ObjectId("626d42befee24c0a7a8e930d"),
		// ARTS 1
		ObjectId("626d42befee24c0a7a8e930e"),
		// COMM 10
		ObjectId("626d42befee24c0a7a8e9310"),
		// KAS 1
		ObjectId("626d42befee24c0a7a8e9311"),
		// HIST 1
		ObjectId("626d44d7eb3a38230c7a3e73"),
		// COMA 101
		ObjectId("626d44d7eb3a38230c7a3e74"),
		// HUM 100
		ObjectId("626d44d7eb3a38230c7a3e75"),
		// SPCM 102
		ObjectId("626d44d7eb3a38230c7a3e76"),
		// HK 11
		ObjectId("626d42befee24c0a7a8e930f"),
		// ETHICS 1
		ObjectId("626d42befee24c0a7a8e9312"),
		// STS 1
		ObjectId("626d44d7eb3a38230c7a3e77"),
		// COMA 102
		ObjectId("626d44d7eb3a38230c7a3e78"),
		// ENG 100
		ObjectId("626d44d7eb3a38230c7a3e79"),
		// SPCM 101
		ObjectId("626d44d7eb3a38230c7a3e7a"),
		// HK 12
		ObjectId("626d44d7eb3a38230c7a3e7b"),
		// HK 13
		ObjectId("626d44d7eb3a38230c7a3e7c"),
		// ENG 101
		ObjectId("626d44d7eb3a38230c7a3e7d"),
		// ENG 104
		ObjectId("626d44d7eb3a38230c7a3e7e"),
		// HUM 101
		ObjectId("626d44d7eb3a38230c7a3e7f"),
		// THEA 101
		ObjectId("626d44d7eb3a38230c7a3e80"),
		// THEA 102
		ObjectId("626d44d7eb3a38230c7a3e81"),
		// NSTP 1
		ObjectId("626d44d7eb3a38230c7a3e82"),
		// COMA 103
		ObjectId("626d44d7eb3a38230c7a3e83"),
		// COMA 192
		ObjectId("626d44d7eb3a38230c7a3e84"),
		// SPCM 104
		ObjectId("626d44d7eb3a38230c7a3e85"),
		// NSTP 2
		ObjectId("62728606f5ec17dac940459c"),
		// COMA 190
		ObjectId("62728606f5ec17dac940459d"),
		// COMA 150
		ObjectId("62728606f5ec17dac940459f"),
		// COMA 193
		ObjectId("62728606f5ec17dac94045a0"),
		// COMA 199
		ObjectId("62728606f5ec17dac940459e"),
		// COMA 200A
		ObjectId("62728606f5ec17dac94045a1"),
		// COMA 105
		ObjectId("62728606f5ec17dac94045a2"),
		// COMA 200
		ObjectId("62728606f5ec17dac94045a3"),
		// HUM 102
		ObjectId("62728606f5ec17dac94045a4"),
		// THEA 103
		ObjectId("626d42befee24c0a7a8e9313"),
		// PI 10
		ObjectId("62728606f5ec17dac94045a5"),
		// HUM 104
		ObjectId("62728606f5ec17dac94045a6")
		// HUM 170
	],
	"specializationUnits" : 39,
	"geElectiveUnits" : 9,
	"maxThesisIterations" : 9
}

const go = async () => {
    try {
        let out = await Degree.create(degree);
        console.log(out);
        console.log("Inserted degree program");
    } catch(e){
        console.log(e);
    }
}
    
go();

// [SUBJECT INSERT CODE]
// Subject.insertMany([
// 	{ code: 'CMSC 198', units: 3 },
// 	{ code: 'MATH 198', units: 3 },
// 	//     // { code: "MATH 103", units: 3 },
// 	//     // { code: "AMAT 105", units: 3 }
// 	//     // { code: "MST 101c", units: 1 },
// 	//     // { code: "EDUC 102", units: 3 },
// 	//     // { code: "EDUC 111", units: 3 },
// 	//     // { code: "STAT 166", units: 3 },
// 	//     // { code: "SPCM 156", units: 3 },
// 	//     // { code: "MST 101d", units: 1 },
// 	//     // { code: "DEVC 40", units: 3 },
// 	//     // { code: "MST 40", units: 3 },
// 	//     // { code: "EDUC 122", units: 3 },
// 	//     // { code: "BOT 14", units: 3 },
// 	//     // { code: "CHEM 160", units: 3 },
// 	//     // { code: "MST 123", units: 5 },
// 	//     // { code: "EDUC 144", units: 3 },
// 	//     // { code: "MST 195", units: 3 },
// 	//     // { code: "MST 199", units: 1 },
// 	//     // { code: "MST 200a", units: 3 },
// 	//     // { code: "MATH 18", units: 3 },
// 	//     // { code: "MST 190", units: 3 },
// 	//     // { code: "MST 191", units: 3 },
// 	//     // { code: "MST 200b", units: 3 },
// 	//     // { code: "HFDS 12", units: 3 },
// 	//     // { code: "MATH 190", units: 3 },
// 	//     // { code: "MATH 192", units: 3 },
// 	//     // { code: "MA", units: 3 },
// 	//     // { code: "CHEM 120.1", units: 2 },
// 	//     // { code: "CHEM 171", units: 3 },
// 	//     // { code: "CHEM 199", units: 1 }
// ])
// 	.then(function () {
// 		console.log('Data inserted'); // Success
// 	})
// 	.catch(function (error) {
// 		console.log(error); // Failure
// 	});
