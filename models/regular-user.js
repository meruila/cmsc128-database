const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const RegularUserSchema = new mongoose.Schema({
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
  managedRecords: [ { type: mongoose.ObjectId, ref: 'Student-Record' } ]
},
  { collection : 'user' }
);

RegularUserSchema.pre("save", function(next) {
  const user = this;

  if (!user.isModified("password")) return next();

  return bcrypt.genSalt((saltError, salt) => {
    if (saltError) { return next(saltError); }

    return bcrypt.hash(user.password, salt, (hashError, hash) => {
      if (hashError) { return next(hashError); }

      user.password = hash;
      return next();
    });
  });
});

RegularUserSchema.methods.comparePassword = function(password, callback) {
  bcrypt.compare(password, this.password, callback);
}

module.exports = mongoose.model("Regular-User", RegularUserSchema);