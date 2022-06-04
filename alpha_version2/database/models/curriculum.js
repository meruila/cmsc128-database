/*******************************
 *
 * curriculum.js is where the DegreeSchema and the GEElectiveSchema are defined.
 *
 * ATTRIBUTES:
 *  - DegreeSchema:
 * 		name: name of the degree program
 *      subjects: reference to Subject schema,
 *                list of subjects that need to be taken by the user to finish their degree.
 * 		specializationUnits: number of specialization units to be taken by the user
 *      geElectiveUnits: number of ge elective units to be taken by the user
 *      maxThesisIterations: maximum number of thesis iterations
 *
 *  - GEElectiveSchema:
 *      geElectiveUnits: reference to Subject schema
 *                       list of GE Elective subjects
 *
 ********************************/

 const mongoose = require('mongoose');

 // Degree Program Schema
 const DegreeSchema = new mongoose.Schema({
	 name: {
		 type: String,
		 required: true,
	 },
	 major : {
		 type: String
	 },
	 subjects: {
		 type: [[mongoose.ObjectId]],
		 required: true,
	 },
	 specializationUnits: {
		 type: Number,
		 required: true,
	 },
	 geElectiveUnits: {
		 type: Number,
		 required: true,
	 },
	 maxThesisIterations: {
		 type: Number,
		 required: true,
	 },
 },
	 { collection : 'curriculum' }
 );

 module.exports = mongoose.model("Degree", DegreeSchema);