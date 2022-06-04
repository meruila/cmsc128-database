const express = require("express");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

// connect to Mongo DB
mongoose.connect(
  "mongodb://localhost:27017/shac-database",
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, }, //useCreateIndex was set to true to get rid of deprecation warning
  (err) => {
    if (err) { console.log(err); }
    else { console.log("Successfully connected to Mongo DB."); }
  });

// register the models with Mongoose
require("../database/models/regular-user");
require("../database/models/admin");
require("../database/models/student-record");
require("../database/models/curriculum");
require("../database/models/subject");
require("../database/models/log");

// initialize the server
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// allow CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers,Access-Control-Allow-Methods,Origin,Accept,Content-Type");
  res.setHeader("Access-Control-Allow-Credentials","true");
  next();
});

// declare routes
require("./router")(app);

// start server
app.listen(3001, (err) => {
  if (err) { console.log(err); }
  else { console.log("Server listening at port 3001"); }
});