// const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
// create a client to mongodb

mongoose.connect(
    "mongodb://localhost:27017/shac-database",
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
      if (err) { console.log(err); }
      else { console.log("Successfully connected to Mongo DB"); }
});

// const User = require("./database/models/regular-user");
// const Admin = require("./database/models/admin");

const Subject = require("./models/subject.js");
const { Degree } = require("./models/curriculum");
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

const degree = {
	"name" : "BSCHEM",
	"major" : "Thesis",
	"subjects" : [
		ObjectId("62728cc3591bd41f02539493"),
		// {
		// 	"code" : "CHEM 18",
		// 	"units" : 4
		// },
		ObjectId("62728cc3591bd41f02539494"),
		// {
		// 	"code" : "CHEM 18.1",
		// 	"units" : 5
		// },
		ObjectId("62728cc3591bd41f02539495"),
		// {
		// 	"code" : "MCB 11",
		// 	"units" : 2
		// },
		ObjectId("62728cc3591bd41f02539496"),
		// {
		// 	"code" : "MATH 27",
		// 	"units" : 3
		// },
		ObjectId("626d42befee24c0a7a8e930f"),
		// {
		// 	"code" : "ETHICS 1",
		// 	"units" : 3
		// },
		ObjectId("626d42befee24c0a7a8e9311"),
		// {
		// 	"code" : "HIST 1",
		// 	"units" : 3
		// },
		ObjectId("626d42befee24c0a7a8e9310"),
		// {
		// 	"code" : "KAS 1",
		// 	"units" : 0
		// },
		ObjectId("626d44d7eb3a38230c7a3e76"),
		// {
		// 	"code" : "HK 11",
		// 	"units" : 3
		// },
		ObjectId("62728d04ecce07f44e4d1758"),
		// {
		// 	"code" : "CHEM 19",
		// 	"units" : 3
		// },
		ObjectId("62728d04ecce07f44e4d175c"),
		// {
		// 	"code" : "CHEM 32",
		// 	"units" : 3
		// },
		ObjectId("62728d04ecce07f44e4d175d"),
		// {
		// 	"code" : "CHEM 32.1",
		// 	"units" : 2
		// },
		ObjectId("62728d04ecce07f44e4d175e"),
		// {
		// 	"code" : "PHYS 71",
		// 	"units" : 3
		// },
		ObjectId("62728d04ecce07f44e4d175f"),
		// {
		// 	"code" : "PHYS 71.1",
		// 	"units" : 0
		// },
		ObjectId("626d42befee24c0a7a8e930d"),
		// {
		// 	"code" : "ARTS 1",
		// 	"units" : 0
		// },
		ObjectId("626d44d7eb3a38230c7a3e7a"),
		// {
		// 	"code" : "HK 12",
		// 	"units" : 3
		// },
		ObjectId("626d44d7eb3a38230c7a3e7b"),
		// {
		// 	"code" : "HK 13",
		// 	"units" : 5
		// },
		ObjectId("626d44d7eb3a38230c7a3e81"),
		// {
		// 	"code" : "NSTP 1",
		// 	"units" : 3
		// },
		ObjectId("62728d04ecce07f44e4d1759"),
		// {
		// 	"code" : "MATH 28",
		// 	"units" : 4
		// },
		ObjectId("62728d04ecce07f44e4d1763"),
		// {
		// 	"code" : "CHEM 43",
		// 	"units" : 1
		// },
		ObjectId("62728d04ecce07f44e4d1764"),
		// {
		// 	"code" : "CHEM 43.1",
		// 	"units" : 0
		// },
		ObjectId("62728d04ecce07f44e4d1765"),
		// {
		// 	"code" : "PHYS 72",
		// 	"units" : 3
		// },
		ObjectId("62728d04ecce07f44e4d1766"),
		// {
		// 	"code" : "PHYS 72.1",
		// 	"units" : 3
		// },
		ObjectId("62728d04ecce07f44e4d1761"),
		// {
		// 	"code" : "CMSC 12",
		// 	"units" : 3
		// },
		ObjectId("62728d04ecce07f44e4d1762"),
		// {
		// 	"code" : "AMAT 152",
		// 	"units" : 3
		// },
		ObjectId("626d44d7eb3a38230c7a3e85"),
		// {
		// 	"code" : "NSTP 2",
		// 	"units" : 3
		// },
		ObjectId("62728d04ecce07f44e4d1769"),
		// {
		// 	"code" : "CHEM 44",
		// 	"units" : 0
		// },
		ObjectId("62728d04ecce07f44e4d176a"),
		// {
		// 	"code" : "CHEM 44.1",
		// 	"units" : 3
		// },
		ObjectId("62728d04ecce07f44e4d1770"),
		// {
		// 	"code" : "CHEM 111",
		// 	"units" : 3
		// },
		ObjectId("62728d04ecce07f44e4d176b"),
		// {
		// 	"code" : "STAT 162",
		// 	"units" : 3
		// },
		ObjectId("626d42befee24c0a7a8e9313"),
		// {
		// 	"code" : "PI 10",
		// 	"units" : 3
		// },
		ObjectId("62728d04ecce07f44e4d1773"),
		// {
		// 	"code" : "CHEM 161A",
		// 	"units" : 3
		// },
		ObjectId("62728d04ecce07f44e4d177a"),
		// {
		// 	"code" : "CHEM 192",
		// 	"units" : 3
		// },
		ObjectId("62728d04ecce07f44e4d1776"),
		// {
		// 	"code" : "CHEM 111.1",
		// 	"units" : 3
		// },
		ObjectId("62728d04ecce07f44e4d1777"),
		// {
		// 	"code" : "CHEM 112",
		// 	"units" : 3
		// },
		ObjectId("62728d04ecce07f44e4d1778"),
		// {
		// 	"code" : "CHEM 137",
		// 	"units" : 3
		// },
		ObjectId("62728d04ecce07f44e4d1772"),
		// {
		// 	"code" : "CHEM 140",
		// 	"units" : 3
		// },
		ObjectId("62728d04ecce07f44e4d1779"),
		// {
		// 	"code" : "CHEM 161B",
		// 	"units" : 3
		// },
		ObjectId("626d42befee24c0a7a8e930e"),
		// {
		// 	"code" : "COMM 10",
		// 	"units" : 1
		// },
		ObjectId("62728d04ecce07f44e4d177c"),
		// {
		// 	"code" : "CHEM 112.1",
		// 	"units" : 1
		// },
		ObjectId("62728d04ecce07f44e4d177d"),
		// {
		// 	"code" : "CHEM 115",
		// 	"units" : 1
		// },
		ObjectId("62728d04ecce07f44e4d177e"),
        // {
		// 	"code" : "CHEM 137.1",
		// 	"units" : 3
		// },
		ObjectId("62728d04ecce07f44e4d177f"),
		// {
		// 	"code" : "CHEM 161.1",
		// 	"units" : 3
		// },
		ObjectId("62728d04ecce07f44e4d1786"),
		// {
		// 	"code" : "CHEM 180",
		// 	"units" : 1
		// },
		ObjectId("62728d04ecce07f44e4d1780"),
		// {
		// 	"code" : "CHEM 198",
		// 	"units" : 1
		// },
		ObjectId("62728d04ecce07f44e4d1782"),
		// {
		// 	"code" : "CHEM 120",
		// 	"units" : 1
		// },
		ObjectId("627291d58e8742dc2f3176fe"),
        // {
		// 	"code" : "CHEM 120.1",
		// 	"units" : 3
		// },
		ObjectId("627291d58e8742dc2f3176ff"),
		// {
		// 	"code" : "CHEM 171",
		// 	"units" : 3
		// },
		ObjectId("62728d04ecce07f44e4d1783"),
		// {
		// 	"code" : "CHEM 199",
		// 	"units" : 1
		// },
		ObjectId("627291d58e8742dc2f3176fd")
		// {
		// 	"code" : "CHEM 200",
		// 	"units" : 1
		// }
	],
	"specializationUnits" : 9,
	"geElectiveUnits" : 9,
	"maxThesisIterations" : 9
}

const go = async () => {
    try {
        let res = await Degree.create(degree);
        console.log(res);
        console.log("Inserted degree program");
    } catch(e){
        console.log(e);
    }
}
    
go();

// [SUBJECT INSERT CODE]
// Subject.insertMany([
//     // { code: "BIO 198", units: 3 },
//     // { code: "MATH 101", units: 3 },
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
//     // { code: "MA", units: 3 },
//     // { code: "CHEM 120.1", units: 2 },
//     // { code: "CHEM 171", units: 3 },
//     // { code: "CHEM 199", units: 1 }
// ]).then(function(){
//     console.log("Data inserted")  // Success
// }).catch(function(error){
//     console.log(error)      // Failure
// });