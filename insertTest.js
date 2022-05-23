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
    name: "BSAMAT",
    major : "SP",
    subjects : [
        [ObjectId("62728df25f73ec537aa62c20")],
        // {
        //     "code" : "AMAT 19",
        //     "units" : 3
        // },
        [ObjectId("62728df25f73ec537aa62c21")],
        // {
        //     "code" : "MATH 36",
        //     "units" : 5
        // },
        [ObjectId("62728df25f73ec537aa62c22")],
        // {
        //     "code" : "BIO 11.1",
        //     "units" : 2
        // },
        [ObjectId("626d42befee24c0a7a8e9310"),
        // {
        //     "code" : "KAS 1",
        //     "units" : 3
        // },
        ObjectId("626d42befee24c0a7a8e9311")],
        // {
        //     "code" : "HIST 1",
        //     "units" : 3
        // },
        [ObjectId("626d42befee24c0a7a8e930f")],
        // {
        //     "code" : "ETHICS 1",
        //     "units" : 3
        // },
        [ObjectId("626d44d7eb3a38230c7a3e76")],
        // {
        //     "code" : "HK 11",
        //     "units" : 0
        // },
        [ObjectId("62728df25f73ec537aa62c23")],
        // {
        //     "code" : "MATH 37",
        //     "units" : 3
        // },
        [ObjectId("62728df25f73ec537aa62c24")],
        // {
        //     "code" : "STAT 101",
        //     "units" : 3
        // },
        [ObjectId("62728cc3591bd41f02539493")],
        // {
        //     "code" : "CHEM 18",
        //     "units" : 3
        // },
        [ObjectId("62728cc3591bd41f02539494")],
        // {
        //     "code" : "CHEM 18.1",
        //     "units" : 2
        // },
        [ObjectId("626d42befee24c0a7a8e930d")],
        // {
        //     "code" : "ARTS 1",
        //     "units" : 3
        // },
        [ObjectId("626d44d7eb3a38230c7a3e7a"),
        // {
        //     "code" : "HK 12",
        //     "units" : 0
        // },
        ObjectId("626d44d7eb3a38230c7a3e7b")],
        // {
        //     "code" : "HK 13",
        //     "units" : 0
        // },
        [ObjectId("62728e10280e1499e84e2230")],
        // {
        //     "code" : "AMAT 110",
        //     "units" : 3
        // },
        [ObjectId("62728e10280e1499e84e2231")],
        // {
        //     "code" : "MATH 38",
        //     "units" : 5
        // },
        [ObjectId("62728e10280e1499e84e2232")],
        // {
        //     "code" : "MATH 101",
        //     "units" : 3
        // },
        [ObjectId("62728e10280e1499e84e2233")],
        // {
        //     "code" : "PHYS 51",
        //     "units" : 4
        // },
        [ObjectId("62728e10280e1499e84e2234")],
        // {
        //     "code" : "PHYS 51.1",
        //     "units" : 1
        // },
        [ObjectId("626d44d7eb3a38230c7a3e81")],
        // {
        //     "code" : "NSTP 1",
        //     "units" : 0
        // },
        [ObjectId("62728e10280e1499e84e2235")],
        // {
        //     "code" : "AMAT 105",
        //     "units" : 3
        // },
        [ObjectId("62728e10280e1499e84e2236")],
        // {
        //     "code" : "AMAT 112",
        //     "units" : 3
        // },
        [ObjectId("62728d04ecce07f44e4d1762")],
        // {
        //     "code" : "AMAT 152",
        //     "units" : 3
        // },
        [ObjectId("62728e1f77ef69a8b992531a")],
        // {
        //     "code" : "AMAT 170",
        //     "units" : 3
        // },
        [ObjectId("626d42befee24c0a7a8e9312")],
        // {
        //     "code" : "STS 1",
        //     "units" : 3
        // },
        [ObjectId("626d44d7eb3a38230c7a3e85")],
        // {
        //     "code" : "NSTP 2",
        //     "units" : 0
        // },
        [ObjectId("62728e1f77ef69a8b992531b")],
        // {
        //     "code" : "MATH 151",
        //     "units" : 3
        // },
        [ObjectId("62728e1f77ef69a8b992531c")],
        // {
        //     "code" : "MATH 174",
        //     "units" : 3
        // },
        [ObjectId("62728e1f77ef69a8b992531d")],
        // {
        //     "code" : "MATH 181",
        //     "units" : 3
        // },
        [ObjectId("626d42befee24c0a7a8e930e")],
        // {
        //     "code" : "COMM 10",
        //     "units" : 3
        // },
        [ObjectId("62728e1f77ef69a8b992531e")],
        // {
        //     "code" : "MATH 155",
        //     "units" : 3
        // },
        [ObjectId("62728e1f77ef69a8b992531f")],
        // {
        //     "code" : "MATH 175",
        //     "units" : 3
        // },
        [ObjectId("62728e1f77ef69a8b9925320")],
        // {
        //     "code" : "MATH 195",
        //     "units" : 3
        // },
        [ObjectId("62728606f5ec17dac940459d")],
        // {
        //     "code" : "COMA 150",
        //     "units" : 3
        // },
        [ObjectId("626d42befee24c0a7a8e9313")],
        // {
        //     "code" : "PI 10",
        //     "units" : 3
        // },
        [ObjectId("62728e1f77ef69a8b9925323")],
        // {
        //     "code" : "AMAT 190",
        //     "units" : 3
        // },
        [ObjectId("62728e37e1fc2bcbc0305011")],
        // {
        //     "code" : "AMAT 198",
        //     "units" : 3
        // },
        [ObjectId("62728e1f77ef69a8b9925322")]
        // {
        //     "code" : "AMAT 199",
        //     "units" : 1
        // }
    ],
    "specializationUnits" : 27,
    "geElectiveUnits" : 9,
    "maxThesisIterations" : 3
}

const degree2 = {
    name: "BSAMAT",
    major : "Thesis",
    subjects : [
        [ObjectId("62728df25f73ec537aa62c20")],
        // {
        //     "code" : "AMAT 19",
        //     "units" : 3
        // },
        [ObjectId("62728df25f73ec537aa62c21")],
        // {
        //     "code" : "MATH 36",
        //     "units" : 5
        // },
        [ObjectId("62728df25f73ec537aa62c22")],
        // {
        //     "code" : "BIO 11.1",
        //     "units" : 2
        // },
        [ObjectId("626d42befee24c0a7a8e9310"),
        // {
        //     "code" : "KAS 1",
        //     "units" : 3
        // },
        ObjectId("626d42befee24c0a7a8e9311")],
        // {
        //     "code" : "HIST 1",
        //     "units" : 3
        // },
        [ObjectId("626d42befee24c0a7a8e930f")],
        // {
        //     "code" : "ETHICS 1",
        //     "units" : 3
        // },
        [ObjectId("626d44d7eb3a38230c7a3e76")],
        // {
        //     "code" : "HK 11",
        //     "units" : 0
        // },
        [ObjectId("62728df25f73ec537aa62c23")],
        // {
        //     "code" : "MATH 37",
        //     "units" : 3
        // },
        [ObjectId("62728df25f73ec537aa62c24")],
        // {
        //     "code" : "STAT 101",
        //     "units" : 3
        // },
        [ObjectId("62728cc3591bd41f02539493")],
        // {
        //     "code" : "CHEM 18",
        //     "units" : 3
        // },
        [ObjectId("62728cc3591bd41f02539494")],
        // {
        //     "code" : "CHEM 18.1",
        //     "units" : 2
        // },
        [ObjectId("626d42befee24c0a7a8e930d")],
        // {
        //     "code" : "ARTS 1",
        //     "units" : 3
        // },
        [ObjectId("626d44d7eb3a38230c7a3e7a"),
        // {
        //     "code" : "HK 12",
        //     "units" : 0
        // },
        ObjectId("626d44d7eb3a38230c7a3e7b")],
        // {
        //     "code" : "HK 13",
        //     "units" : 0
        // },
        [ObjectId("62728e10280e1499e84e2230")],
        // {
        //     "code" : "AMAT 110",
        //     "units" : 3
        // },
        [ObjectId("62728e10280e1499e84e2231")],
        // {
        //     "code" : "MATH 38",
        //     "units" : 5
        // },
        [ObjectId("62728e10280e1499e84e2232")],
        // {
        //     "code" : "MATH 101",
        //     "units" : 3
        // },
        [ObjectId("62728e10280e1499e84e2233")],
        // {
        //     "code" : "PHYS 51",
        //     "units" : 4
        // },
        [ObjectId("62728e10280e1499e84e2234")],
        // {
        //     "code" : "PHYS 51.1",
        //     "units" : 1
        // },
        [ObjectId("626d44d7eb3a38230c7a3e81")],
        // {
        //     "code" : "NSTP 1",
        //     "units" : 0
        // },
        [ObjectId("62728e10280e1499e84e2235")],
        // {
        //     "code" : "AMAT 105",
        //     "units" : 3
        // },
        [ObjectId("62728e10280e1499e84e2236")],
        // {
        //     "code" : "AMAT 112",
        //     "units" : 3
        // },
        [ObjectId("62728d04ecce07f44e4d1762")],
        // {
        //     "code" : "AMAT 152",
        //     "units" : 3
        // },
        [ObjectId("62728e1f77ef69a8b992531a")],
        // {
        //     "code" : "AMAT 170",
        //     "units" : 3
        // },
        [ObjectId("626d42befee24c0a7a8e9312")],
        // {
        //     "code" : "STS 1",
        //     "units" : 3
        // },
        [ObjectId("626d44d7eb3a38230c7a3e85")],
        // {
        //     "code" : "NSTP 2",
        //     "units" : 0
        // },
        [ObjectId("62728e1f77ef69a8b992531b")],
        // {
        //     "code" : "MATH 151",
        //     "units" : 3
        // },
        [ObjectId("62728e1f77ef69a8b992531c")],
        // {
        //     "code" : "MATH 174",
        //     "units" : 3
        // },
        [ObjectId("62728e1f77ef69a8b992531d")],
        // {
        //     "code" : "MATH 181",
        //     "units" : 3
        // },
        [ObjectId("626d42befee24c0a7a8e930e")],
        // {
        //     "code" : "COMM 10",
        //     "units" : 3
        // },
        [ObjectId("62728e1f77ef69a8b992531e")],
        // {
        //     "code" : "MATH 155",
        //     "units" : 3
        // },
        [ObjectId("62728e1f77ef69a8b992531f")],
        // {
        //     "code" : "MATH 175",
        //     "units" : 3
        // },
        [ObjectId("62728e1f77ef69a8b9925320")],
        // {
        //     "code" : "MATH 195",
        //     "units" : 3
        // },
        [ObjectId("62728606f5ec17dac940459d")],
        // {
        //     "code" : "COMA 150",
        //     "units" : 3
        // },
        [ObjectId("626d42befee24c0a7a8e9313")],
        // {
        //     "code" : "PI 10",
        //     "units" : 3
        // },
        [ObjectId("62728e1f77ef69a8b9925321")],
        // {
        //     "code" : "AMAT 190",
        //     "units" : 3
        // },
        [ObjectId("62728e37e1fc2bcbc0305011")],
        // {
        //     "code" : "AMAT 198",
        //     "units" : 3
        // },
        [ObjectId("62728e1f77ef69a8b9925322")]
        // {
        //     "code" : "AMAT 199",
        //     "units" : 1
        // }
    ],
    "specializationUnits" : 24,
    "geElectiveUnits" : 9,
    "maxThesisIterations" : 3
}

const degree3 = {
	"name" : "BSCHEM",
	"major" : "Thesis",
	"subjects" : [
		[ObjectId("62728cc3591bd41f02539493")],
		// {
		// 	"code" : "CHEM 18",
		// 	"units" : 4
		// },
		[ObjectId("62728cc3591bd41f02539494")],
		// {
		// 	"code" : "CHEM 18.1",
		// 	"units" : 5
		// },
		[ObjectId("62728cc3591bd41f02539495")],
		// {
		// 	"code" : "MCB 11",
		// 	"units" : 2
		// },
		[ObjectId("62728cc3591bd41f02539496")],
		// {
		// 	"code" : "MATH 27",
		// 	"units" : 3
		// },
		[ObjectId("626d42befee24c0a7a8e930f")],
		// {
		// 	"code" : "ETHICS 1",
		// 	"units" : 3
		// },
		[ObjectId("626d42befee24c0a7a8e9311"),
		// {
		// 	"code" : "HIST 1",
		// 	"units" : 3
		// },
		ObjectId("626d42befee24c0a7a8e9310")],
		// {
		// 	"code" : "KAS 1",
		// 	"units" : 0
		// },
		[ObjectId("626d44d7eb3a38230c7a3e76")],
		// {
		// 	"code" : "HK 11",
		// 	"units" : 3
		// },
		[ObjectId("62728d04ecce07f44e4d1758")],
		// {
		// 	"code" : "CHEM 19",
		// 	"units" : 3
		// },
		[ObjectId("62728d04ecce07f44e4d175c")],
		// {
		// 	"code" : "CHEM 32",
		// 	"units" : 3
		// },
		[ObjectId("62728d04ecce07f44e4d175d")],
		// {
		// 	"code" : "CHEM 32.1",
		// 	"units" : 2
		// },
		[ObjectId("62728d04ecce07f44e4d175e")],
		// {
		// 	"code" : "PHYS 71",
		// 	"units" : 3
		// },
		[ObjectId("62728d04ecce07f44e4d175f")],
		// {
		// 	"code" : "PHYS 71.1",
		// 	"units" : 0
		// },
		[ObjectId("626d42befee24c0a7a8e930d")],
		// {
		// 	"code" : "ARTS 1",
		// 	"units" : 0
		// },
		[ObjectId("626d44d7eb3a38230c7a3e7a"),
		// {
		// 	"code" : "HK 12",
		// 	"units" : 3
		// },
		ObjectId("626d44d7eb3a38230c7a3e7b")],
		// {
		// 	"code" : "HK 13",
		// 	"units" : 5
		// },
		[ObjectId("626d44d7eb3a38230c7a3e81")],
		// {
		// 	"code" : "NSTP 1",
		// 	"units" : 3
		// },
		[ObjectId("62728d04ecce07f44e4d1759")],
		// {
		// 	"code" : "MATH 28",
		// 	"units" : 4
		// },
		[ObjectId("62728d04ecce07f44e4d1763")],
		// {
		// 	"code" : "CHEM 43",
		// 	"units" : 1
		// },
		[ObjectId("62728d04ecce07f44e4d1764")],
		// {
		// 	"code" : "CHEM 43.1",
		// 	"units" : 0
		// },
		[ObjectId("62728d04ecce07f44e4d1765")],
		// {
		// 	"code" : "PHYS 72",
		// 	"units" : 3
		// },
		[ObjectId("62728d04ecce07f44e4d1766")],
		// {
		// 	"code" : "PHYS 72.1",
		// 	"units" : 3
		// },
		[ObjectId("62728d04ecce07f44e4d1761"),
		// {
		// 	"code" : "CMSC 12",
		// 	"units" : 3
		// },
		ObjectId("62728d04ecce07f44e4d1762")],
		// {
		// 	"code" : "AMAT 152",
		// 	"units" : 3
		// },
		[ObjectId("626d44d7eb3a38230c7a3e85")],
		// {
		// 	"code" : "NSTP 2",
		// 	"units" : 3
		// },
		[ObjectId("62728d04ecce07f44e4d1769")],
		// {
		// 	"code" : "CHEM 44",
		// },
		[ObjectId("62728d04ecce07f44e4d176a")],
		// {
		// 	"code" : "CHEM 44.1",
		// 	"units" : 3
		// },
		[ObjectId("62728d04ecce07f44e4d1770")],
		// {
		// 	"code" : "CHEM 111",
		// 	"units" : 3
		// },
		[ObjectId("62728d04ecce07f44e4d176b")],
		// {
		// 	"code" : "STAT 162",
		// 	"units" : 3
		// },
		[ObjectId("626d42befee24c0a7a8e9313")],
		// {
		// 	"code" : "PI 10",
		// 	"units" : 3
		// },
		[ObjectId("62728d04ecce07f44e4d1773")],
		// {
		// 	"code" : "CHEM 161A",
		// 	"units" : 3
		// },
		[ObjectId("62728d04ecce07f44e4d177a")],
		// {
		// 	"code" : "CHEM 192",
		// 	"units" : 3
		// },
		[ObjectId("62728d04ecce07f44e4d1776")],
		// {
		// 	"code" : "CHEM 111.1",
		// 	"units" : 3
		// },
		[ObjectId("62728d04ecce07f44e4d1777")],
		// {
		// 	"code" : "CHEM 112",
		// 	"units" : 3
		// },
		[ObjectId("62728d04ecce07f44e4d1778")],
		// {
		// 	"code" : "CHEM 137",
		// 	"units" : 3
		// },
		[ObjectId("62728d04ecce07f44e4d1772")],
		// {
		// 	"code" : "CHEM 140",
		// 	"units" : 3
		// },
		[ObjectId("62728d04ecce07f44e4d1779")],
		// {
		// 	"code" : "CHEM 161B",
		// 	"units" : 3
		// },
		[ObjectId("626d42befee24c0a7a8e930e")],
		// {
		// 	"code" : "COMM 10",
		// 	"units" : 1
		// },
		[ObjectId("62728d04ecce07f44e4d177c")],
		// {
		// 	"code" : "CHEM 112.1",
		// 	"units" : 1
		// },
		[ObjectId("62728d04ecce07f44e4d177d")],
		// {
		// 	"code" : "CHEM 115",
		// 	"units" : 1
		// },
		[ObjectId("62728d04ecce07f44e4d177e")],
        // {
		// 	"code" : "CHEM 137.1",
		// 	"units" : 3
		// },
		[ObjectId("62728d04ecce07f44e4d177f")],
		// {
		// 	"code" : "CHEM 161.1",
		// 	"units" : 3
		// },
		[ObjectId("62728d04ecce07f44e4d1786")],
		// {
		// 	"code" : "CHEM 180",
		// 	"units" : 1
		// },
		[ObjectId("62728d04ecce07f44e4d1780")],
		// {
		// 	"code" : "CHEM 198",
		// 	"units" : 1
		// },
		[ObjectId("62728d04ecce07f44e4d1782")],
		// {
		// 	"code" : "CHEM 120",
		// 	"units" : 1
		// },
		[ObjectId("627291d58e8742dc2f3176fe")],
        // {
		// 	"code" : "CHEM 120.1",
		// 	"units" : 3
		// },
		[ObjectId("627291d58e8742dc2f3176ff")],
		// {
		// 	"code" : "CHEM 171",
		// 	"units" : 3
		// },
		[ObjectId("62728d04ecce07f44e4d1783")],
		// {
		// 	"code" : "CHEM 199",
		// 	"units" : 1
		// },
		[ObjectId("627291d58e8742dc2f3176fd")]
		// {
		// 	"code" : "CHEM 200",
		// 	"units" : 1
		// }
	],
	"specializationUnits" : 9,
	"geElectiveUnits" : 9,
	"maxThesisIterations" : 9
}

const degree4 = {
	"name" : "BSMST",
	"major" : "Biology",
	"subjects" : [
		[ObjectId("6281243c9aa35146663c8010")],
		// {
		// 	"code" : "MST 101a",
		// 	"units" : 1
		// },
		[ObjectId("62728df25f73ec537aa62c22")],
		// {
		// 	"code" : "BIO 11.1",
		// 	"units" : 2
		// },
		[ObjectId("62728cc3591bd41f02539493")],
		// {
		// 	"code" : "CHEM 18",
		// 	"units" : 3
		// },
		[ObjectId("62728cc3591bd41f02539494")],
		// {
		// 	"code" : "CHEM 18.1",
		// 	"units" : 2
		// },
		[ObjectId("6281243c9aa35146663c8011")],
		// {
		// 	"code" : "PHYS 50",
		// 	"units" : 3
		// },
		[ObjectId("62729007ab87167c1fc0cb81")],
		// {
		// 	"code" : "MATH 25",
		// 	"units" : 3
		// },
		[ObjectId("626d42befee24c0a7a8e9312")],
		// {
		// 	"code" : "STS 1",
		// 	"units" : 3
		// },
		[ObjectId("626d42befee24c0a7a8e9313")],
		// {
		// 	"code" : "PI 10",
		// 	"units" : 3
		// },
		[ObjectId("626d44d7eb3a38230c7a3e76")],
		// {
		// 	"code" : "HK 11",
		// 	"units" : 0
		// },
		[ObjectId("6281243c9aa35146663c8012")],
		// {
		// 	"code" : "MST 101B",
		// 	"units" : 1
		// },
		[ObjectId("62729007ab87167c1fc0cb84")],
		// {
		// 	"code" : "BIO 14",
		// 	"units" : 5
		// },
		ObjectId("62729007ab87167c1fc0cb82"),
		// {
		// 	"code" : "CHEM 40",
		// 	"units" : 4
		// },
		ObjectId("62729007ab87167c1fc0cb83"),
		// {
		// 	"code" : "CHEM 40.1",
		// 	"units" : 1
		// },
		ObjectId("62728df25f73ec537aa62c20"),
		// {
		// 	"code" : "AMAT 19",
		// 	"units" : 3
		// },
		ObjectId("62728cc3591bd41f02539496"),
		// {
		// 	"code" : "MATH 27",
		// 	"units" : 3
		// },
		ObjectId("626d42befee24c0a7a8e9310"),
		// {
		// 	"code" : "KAS 1",
		// 	"units" : 3
		// },
		ObjectId("626d42befee24c0a7a8e9311"),
		// {
		// 	"code" : "HIST 1",
		// 	"units" : 3
		// },
		ObjectId("626d44d7eb3a38230c7a3e7a"),
		// {
		// 	"code" : "HK 12",
		// 	"units" : 0
		// },
		ObjectId("626d44d7eb3a38230c7a3e7b"),
		// {
		// 	"code" : "HK 13",
		// 	"units" : 0
		// },
		ObjectId("6281243c9aa35146663c8013"),
		// {
		// 	"code" : "MST 101C",
		// 	"units" : 1
		// },
		ObjectId("6281243c9aa35146663c8014"),
		// {
		// 	"code" : "EDUC 102",
		// 	"units" : 3
		// },
		ObjectId("6281243c9aa35146663c8015"),
		// {
		// 	"code" : "EDUC 111",
		// 	"units" : 3
		// },
		ObjectId("62728d04ecce07f44e4d175a"),
		// {
		// 	"code" : "BIO 30",
		// 	"units" : 3
		// },
		ObjectId("627289becf55453d96c4bd0f"),
		// {
		// 	"code" : "STAT 166",
		// 	"units" : 3
		// },
		ObjectId("6281245283f2534fc23c64cc"),
		// {
		// 	"code" : "SPCM 156",
		// 	"units" : 3
		// },
		ObjectId("626d42befee24c0a7a8e930f"),
		// {
		// 	"code" : "ETHICS 1",
		// 	"units" : 3
		// },
		ObjectId("626d44d7eb3a38230c7a3e81"),
		// {
		// 	"code" : "NSTP 1",
		// 	"units" : 0
		// },
		ObjectId("6281245283f2534fc23c64cd"),
		// {
		// 	"code" : "MST 101D",
		// 	"units" : 1
		// },
		ObjectId("6281245283f2534fc23c64ce"),
		// {
		// 	"code" : "DEVC 40",
		// 	"units" : 3
		// },
		ObjectId("6281245283f2534fc23c64cf"),
		// {
		// 	"code" : "MST 40",
		// 	"units" : 3
		// },
		ObjectId("6281245283f2534fc23c64d0"),
		// {
		// 	"code" : "EDUC 122",
		// 	"units" : 3
		// },
		ObjectId("62729007ab87167c1fc0cb85"),
		// {
		// 	"code" : "BOT 14",
		// 	"units" : 3
		// },
		ObjectId("62729007ab87167c1fc0cb87"),
		// {
		// 	"code" : "CHEM 160",
		// 	"units" : 3
		// },
		ObjectId("62728d04ecce07f44e4d175e"),
		// {
		// 	"code" : "PHYS 71",
		// 	"units" : 4
		// },
		ObjectId("62728d04ecce07f44e4d175f"),
		// {
		// 	"code" : "PHYS 71.1",
		// 	"units" : 1
		// },
		ObjectId("62728606f5ec17dac940459d"),
		// {
		// 	"code" : "COMA 150",
		// 	"units" : 3
		// },
		ObjectId("626d44d7eb3a38230c7a3e85"),
		// {
		// 	"code" : "NSTP 2",
		// 	"units" : 0
		// },
		ObjectId("62812469c68081ea6a30df41"),
		// {
		// 	"code" : "MST 123",
		// 	"units" : 5
		// },
		ObjectId("62812469c68081ea6a30df42"),
        // {
		// 	"code" : "EDUC 144",
		// 	"units" : 3
		// },
		ObjectId("62729007ab87167c1fc0cb88"),
		// {
		// 	"code" : "BIO 150",
		// 	"units" : 4
		// },
		ObjectId("62728cc3591bd41f02539495"),
		// {
		// 	"code" : "MCB 11",
		// 	"units" : 3
		// },
		ObjectId("62729007ab87167c1fc0cb86"),
		// {
		// 	"code" : "ZOO 14",
		// 	"units" : 3
		// },
		ObjectId("62728d04ecce07f44e4d176b"),
		// {
		// 	"code" : "STAT 162",
		// 	"units" : 3
		// },
		ObjectId("62812469c68081ea6a30df43"),
		// {
		// 	"code" : "MST 195",
		// 	"units" : 3
		// },
		ObjectId("62812469c68081ea6a30df44"),
		// {
		// 	"code" : "MST 199",
		// 	"units" : 1
		// },
		ObjectId("62812469c68081ea6a30df45"),
		// {
		// 	"code" : "MST 200A",
		// 	"units" : 3
		// },
		ObjectId("62812469c68081ea6a30df46"),
		// {
		// 	"code" : "MATH 18",
		// 	"units" : 5
		// },
		ObjectId("626d42befee24c0a7a8e930e"),
        // {
		// 	"code" : "COMM 10",
		// 	"units" : 3
		// },
		ObjectId("62812469c68081ea6a30df47"),
        // {
		// 	"code" : "MST 190",
		// 	"units" : 3
		// },
		ObjectId("62812469c68081ea6a30df48"),
		// {
		// 	"code" : "MST 191",
		// 	"units" : 3
		// },
		ObjectId("62812469c68081ea6a30df49"),
		// {
		// 	"code" : "MST 200B",
		// 	"units" : 3
		// },
		ObjectId("626d42befee24c0a7a8e930d"),
		// {
		// 	"code" : "ARTS 1",
		// 	"units" : 3
		// },
		ObjectId("62812469c68081ea6a30df4a"),
		// {
		// 	"code" : "HFDS 12",
		// 	"units" : 3
		// },
		ObjectId("62728d04ecce07f44e4d1765"),
		// {
		// 	"code" : "PHYS 72",
		// 	"units" : 4
		// },
		ObjectId("62728d04ecce07f44e4d1766")
		// {
		// 	"code" : "PHYS 72.1",
		// 	"units" : 1
		// }
	],
	"specializationUnits" : 0,
	"geElectiveUnits" : 9,
	"maxThesisIterations" : 3
}

const go = async () => {
	try {
		let res = await Degree.create(degree2);
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
