// This is the router file for the SHACker app.
// This will handle the post requests. 
// For more info about POST requests, refer to this resource: https://www.w3schools.com/tags/ref_httpmethods.asp

const controller = require('./controller'); 

module.exports = (app) => {
	app.post("/adminSignUp",controller.adminSignUp);
	app.post("/login",controller.login);
	app.post("/addUser",controller.addUser);
	app.post("/getAllUsers",controller.getAllUsers);
	app.post("/isAdmin",controller.isUserAdmin);
	app.post("/deleteUser",controller.deleteUser);
	app.post("/promoteUser",controller.promoteUser);
	app.post("/viewProfile",controller.viewProfile);
	app.post("/editProfile",controller.editProfile);
	app.post("/addStudentRecord",controller.addStudentRecord);
	app.post("/getStudentRecords",controller.getStudentRecords);
	app.post("/viewStudentRecord",controller.viewStudentRecord);
	app.post("/updateStudentRecord",controller.updateStudentRecord);
	app.post("/deleteStudentRecord",controller.deleteStudentRecord);
	app.post("/viewSummary",controller.viewSummary);
	app.post("/checkForWarnings",controller.checkForWarnings);
	app.post("/sign",controller.sign);
	app.post("/homeRecords",controller.homeRecords);
	// app.post("/",controller.);
}