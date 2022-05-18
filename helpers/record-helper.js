const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const { updateMany } = require("../models/subject");
// create a client to mongodb

mongoose.connect(
    "mongodb://localhost:27017/shac-database",
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
      if (err) { console.log(err); }
      else { console.log("Successfully connected to Mongo DB"); }
});

// This is not to be defined here, for testing purposes only [END]

const StudentRecord = require("../models/student-record");

// Schema contained in /models/user
// const UserSchema = new mongoose.Schema({
//     name:  {
//       fname: { type: String, required: true },
//       lname: { type: String, required: true }
//     },
//     email: { type: String, unique: true, required: true },
//     password: { type: String, required: true }
//   });

const studentRecord1 = new StudentRecord({
  "name": {
    "last": "Heeson",
    "first": "Blue"
  },
  "course": "BAPHLO",
  "studentNo": "2018-09876",
});

// const user2 = new User({
//   name:  {
//       fname: "Gemmy",
//       lname: "Avilon"
//     },
//     email: "gxavilon@up.edu.ph",
//     password: "xdxdxd"
// });

async function saveStudRecord(studentRecord) {
  await studentRecord.save();
}