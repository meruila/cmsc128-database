/**********************************
 * 
 * admin.js is where the Admin schema is defined.
 * An admin has an email, password, firstname, and lastname attribute.
 * Apart from the id that mongodb provides, the email is also unique for an admin.
 * The file also contains a pre hook that will hash the password after creating an admin
 * as well as a middleware that will check for password when an admin logs in.
 * Hashing password is done with the use of bcrypt library.
 * 
 **********************************/

 const mongoose = require('mongoose');
 const bcrypt = require('bcrypt');
 
 
 // We can also write the subdocument on a separate file like here:
 //  https://stackoverflow.com/questions/25880589/how-can-i-separate-mongoose-subdocument-into-seperate-files
 // So we can utilize the code reuse for both admin and regular-user.
 // I'm not sure if under ng models ba talaga ilalagay yun or sa helpers or utils folder, if ever.
 
 const AdminSchema = new mongoose.Schema({
   // -- Start user info subdocument
   user: {
     name: {
       fname: { type: String, required: true, trim: true },
       lname: { type: String, required: true, trim: true },
     },
     email: { type: String, unique: true, required: true, trim: true },
     role: { type: String, required: true },
     password: { type: String, required: true },
   },
    // -- end subdocument
   managedUsers: [ { type: mongoose.ObjectId, ref: 'Regular-User' } ],
 },
  { collection : 'user' }
 );
 
 // Middleware to be used when an admin gets created
 AdminSchema.pre('save', function (next) {
  const admin = this;
  if(!admin.isModified("user.password")) {
    return next();
  } 
  
  return bcrypt.genSalt((saltError, salt) =>{
    if (saltError) {return next(saltError);}
    
    return bcrypt.hash(admin.user.password, salt, (hashError, hash) => {
      
      if (hashError) {return next(hashError); }

      admin.user.password = hash;
      
      return next();
    });
  });
 });

 AdminSchema.methods.comparePassword = function(password, callback) {
  bcrypt.compare(password, this.user.password, callback);
}
 module.exports = mongoose.model('Admin', AdminSchema);