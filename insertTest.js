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

// const Subject = require("./models/subject.js");
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
    name: "BSAMAT",
    major : "SP", // choices for major are SP, Thesis, or blank ("") only! wala kasi tayo list of majors 
    subjects : [
        ObjectId("62728df25f73ec537aa62c20"),
        // {
        //     "code" : "AMAT 19",
        //     "units" : 3
        // },
        ObjectId("62728df25f73ec537aa62c21"),
        // {
        //     "code" : "MATH 36",
        //     "units" : 5
        // },
        ObjectId("62728df25f73ec537aa62c22"),
        // {
        //     "code" : "BIO 11.1",
        //     "units" : 2
        // },
        ObjectId("626d42befee24c0a7a8e9310"),
        // {
        //     "code" : "KAS 1",
        //     "units" : 3
        // },
        ObjectId("626d42befee24c0a7a8e9311"),
        // {
        //     "code" : "HIST 1",
        //     "units" : 3
        // },
        ObjectId("626d42befee24c0a7a8e930f"),
        // {
        //     "code" : "ETHICS 1",
        //     "units" : 3
        // },
        ObjectId("626d44d7eb3a38230c7a3e76"),
        // {
        //     "code" : "HK 11",
        //     "units" : 0
        // },
        ObjectId("62728df25f73ec537aa62c23"),
        // {
        //     "code" : "MATH 37",
        //     "units" : 3
        // },
        ObjectId("62728df25f73ec537aa62c24"),
        // {
        //     "code" : "STAT 101",
        //     "units" : 3
        // },
        ObjectId("62728cc3591bd41f02539493"),
        // {
        //     "code" : "CHEM 18",
        //     "units" : 3
        // },
        ObjectId("62728cc3591bd41f02539494"),
        // {
        //     "code" : "CHEM 18.1",
        //     "units" : 2
        // },
        ObjectId("626d42befee24c0a7a8e930d"),
        // {
        //     "code" : "ARTS 1",
        //     "units" : 3
        // },
        ObjectId("626d44d7eb3a38230c7a3e7a"),
        // {
        //     "code" : "HK 12",
        //     "units" : 0
        // },
        ObjectId("626d44d7eb3a38230c7a3e7b"),
        // {
        //     "code" : "HK 13",
        //     "units" : 0
        // },
        ObjectId("62728e10280e1499e84e2230"),
        // {
        //     "code" : "AMAT 110",
        //     "units" : 3
        // },
        ObjectId("62728e10280e1499e84e2231"),
        // {
        //     "code" : "MATH 38",
        //     "units" : 5
        // },
        ObjectId("62728e10280e1499e84e2232"),
        // {
        //     "code" : "MATH 101",
        //     "units" : 3
        // },
        ObjectId("62728e10280e1499e84e2233"),
        // {
        //     "code" : "PHYS 51",
        //     "units" : 4
        // },
        ObjectId("62728e10280e1499e84e2234"),
        // {
        //     "code" : "PHYS 51.1",
        //     "units" : 1
        // },
        ObjectId("626d44d7eb3a38230c7a3e81"),
        // {
        //     "code" : "NSTP 1",
        //     "units" : 0
        // },
        ObjectId("62728e10280e1499e84e2235"),
        // {
        //     "code" : "AMAT 105",
        //     "units" : 3
        // },
        ObjectId("62728e10280e1499e84e2236"),
        // {
        //     "code" : "AMAT 112",
        //     "units" : 3
        // },
        ObjectId("62728d04ecce07f44e4d1762"),
        // {
        //     "code" : "AMAT 152",
        //     "units" : 3
        // },
        ObjectId("62728e1f77ef69a8b992531a"),
        // {
        //     "code" : "AMAT 170",
        //     "units" : 3
        // },
        ObjectId("626d42befee24c0a7a8e9312"),
        // {
        //     "code" : "STS 1",
        //     "units" : 3
        // },
        ObjectId("626d44d7eb3a38230c7a3e85"),
        // {
        //     "code" : "NSTP 2",
        //     "units" : 0
        // },
        ObjectId("62728e1f77ef69a8b992531b"),
        // {
        //     "code" : "MATH 151",
        //     "units" : 3
        // },
        ObjectId("62728e1f77ef69a8b992531c"),
        // {
        //     "code" : "MATH 174",
        //     "units" : 3
        // },
        ObjectId("62728e1f77ef69a8b992531d"),
        // {
        //     "code" : "MATH 181",
        //     "units" : 3
        // },
        ObjectId("626d42befee24c0a7a8e930e"),
        // {
        //     "code" : "COMM 10",
        //     "units" : 3
        // },
        ObjectId("62728e1f77ef69a8b992531e"),
        // {
        //     "code" : "MATH 155",
        //     "units" : 3
        // },
        ObjectId("62728e1f77ef69a8b992531f"),
        // {
        //     "code" : "MATH 175",
        //     "units" : 3
        // },
        ObjectId("62728e1f77ef69a8b9925320"),
        // {
        //     "code" : "MATH 195",
        //     "units" : 3
        // },
        ObjectId("62728606f5ec17dac940459d"),
        // {
        //     "code" : "COMA 150",
        //     "units" : 3
        // },
        ObjectId("626d42befee24c0a7a8e9313"),
        // {
        //     "code" : "PI 10",
        //     "units" : 3
        // },
        ObjectId("62728e1f77ef69a8b9925323"),
        // {
        //     "code" : "AMAT 190",
        //     "units" : 3
        // },
        ObjectId("62728e37e1fc2bcbc0305011"),
        // {
        //     "code" : "AMAT 198",
        //     "units" : 3
        // },
        ObjectId("62728e1f77ef69a8b9925322")
        // {
        //     "code" : "AMAT 199",
        //     "units" : 1
        // }
    ],
    "specializationUnits" : 27,
    "geElectiveUnits" : 9,
    "maxThesisIterations" : 3
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

// DegreeProgram.create(degree, err => {
//     if (err) {
//         throw err;
//     }
//     console.log("Inserted ${degree.name} degree program");
//     mongoose.connection.close();
// });

// [SUBJECT INSERT CODE]
// Subject.insertMany([
//     // { code: "STAT 135", units: 3 },
//     // { code: "STAT 162", units: 3 },
//     // { code: "STAT 182", units: 3 },
//     // { code: "STAT 144", units: 5 },
//     // { code: "STAT 168", units: 3 },
//     // { code: "MATH 182", units: 3 },
//     // { code: "STAT 145", units: 3 },
//     // { code: "STAT 163", units: 3 },
//     // { code: "STAT 146", units: 3 },
//     // { code: "STAT 173", units: 3 },
//     // { code: "STAT 175", units: 3 },
//     // { code: "STAT 181", units: 3 },
//     // { code: "STAT 147", units: 3 },
//     // { code: "STAT 151", units: 3 },
//     // { code: "STAT 156", units: 3 },
//     // { code: "STAT 174", units: 3 },
//     // { code: "STAT 192.1", units: 1 },
//     // { code: "STAT 198", units: 3 },
//     // { code: "STAT 148", units: 3 },
//     // { code: "STAT 165", units: 3 },
//     // { code: "STAT 190", units: 3 },
//     // { code: "STAT 191", units: 3 },
//     // { code: "STAT 157", units: 3 },
//     // { code: "STAT 167", units: 3 },
//     // { code: "STAT 183", units: 3 },
//     // { code: "STAT 199", units: 1 }
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