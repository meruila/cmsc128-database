const mongoose = require("mongoose");
const fs = require("fs")

// retrieve find by name (course code)
// output array
// retrieve each subject in each course
// output final array

fs.readFile(csv, 'utf8', function(err, data) {

    // check student.json for new file
    fs.writeFileSync('./student.json', JSON.stringify(studentRecord, null, 2) , 'utf-8');
    console.log(studentRecord)
})