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

const Admin = new mongoose.Schema({
  email: { type: String, unique: true, required: true, trim: true },
  password: { type: String, required: true, trim: true },
  firstname: { type: String, required: true, trim: true },
  lastname: { type: String, required: true, trim: true },
});

// Middleware to be used when an admin gets created
Admin.pre('save', async function (next) {
  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch(err) {
    console.error(err);
  }
});

// Middleware to be used when an admin logs in
Admin.methods.comparePassword = async function (password) {
  try {
    const validPW = await bcrypt.compare(password, this.password);
    return validPW;
  } catch(err) {
    console.error(err);
  }
}

module.exports = mongoose.model('Admin', Admin);