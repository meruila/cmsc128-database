const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const Admin = require("../models/admin");
const User = require("../models/regular-user");
const { findOne } = require("../models/regular-user");

exports.getUser = async (email) => {
    try{
        // look in admin collection
        const userAdmin = await Admin.findOne({
            "user.email": email
        });
        if (userAdmin != null) {
            return userAdmin;

        }else{
            // else, look in user collection
            const user = await User.findOne({
                "user.email": email
            });
            if (userAdmin != null) {
                return user;
            }else{
                return false;
            }
        }      

    }
    catch (err) {
        console.log(err);
        return false;
    }
}

exports.getAllUsers = async () => {
    try {
        const users = await User.find({});
    // console.log(users)
        return users;
    }
    catch(e) {
        throw(e);
    }    
}

// EDIT: what needs to be edited
// exports.editUser = async(email) => {
//     try{
//         const foundUser = await User.findOne({
//           email: email
//         });
//         return foundUser;
//     }
//     catch (err) {
//         return err;
//     }
// }

// exports.deleteUser = async(email) => {
//     try {
//         const deletedUser = await User.deleteOne({
//             "user.email": email
//         });
//         return deletedUser;
//     }
//     catch (err) {
//         return err;
//     }
    
// }

// exports.findSuperuser = async (superuserEmail) => {
//     try{
//         const foundUser = await User.findOne({
//           email: email
//           role: "admin"
//         });
//         return true;
//     }
//     catch (err) {
//         return err;
//     }
// }
// getSuperuser(superuserEmail)

exports.saveAdminUser = async(creds) => {
    try{
        let buffer = await Admin.findOne({
            "user.email": creds.email
          });
        if (buffer != null){
            return false;
        }
        const userAdmin = new Admin(creds);

        await userAdmin.save();
        return true;
        
    }
    catch (e){
        throw e;
    }
    
}

exports.saveUser = async (creds) => {
    try{
        let buffer = await User.findOne({
            "user.email": creds.email
          });
        if (buffer != null){
            return false;
        }
        const user = new User(creds);
        await user.save();
        return true;
    }
    catch (e){
        return false
    }
    
}

// exports.promoteUser = async(newSuperuserEmail) => {
//     try {
//         const adminToRegular = await User.updateOne({
//             role: "admin"
//         }, {
//             $set: {
//                 role: "regular-user"
//             }
//         }
//         );

//         const regularToAdmin = await User.updateOne({
//             email: newSuperuserEmail
//         }, {
//             $set: {
//                 role: "admin"
//             }
//         }
//         );        
//     }
//     catch (err) {
//         throw err
//     }
// }

exports.findUser = async(email) => {
    try {
        const foundUser = await User.findOne({
          "user.email": email
        });
        if (foundUser) {
            return true;
        } else {
            return false;
        }
    } 
    catch(err){
        throw err;
    }
}

// exports.findAdminUser = async(userEmail) => {
//     try {
//         const foundUser = await Admin.findOne({
//           "user.email": email
//         });
//         if (foundUser) {
//             return true;
//         } else {
//             return false;
//         }
//     } 
//     catch(err){
//         throw err;
//     }
// }