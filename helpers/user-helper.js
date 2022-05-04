const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const User = require("../models/regular-user");

exports.getUser = async (email) => {
    try{
        const foundUser = await User.findOne({
          email: email
        });
        if (foundUser) {
            return foundUser;
        } else {
            return false;
        }
    }
    catch (err) {
        throw err;
    }
}

exports.comparePassword = async (password) => {
    bcrypt.compare(password, this.password, (err, data) => {
        //if both match then you can do anything
        if (data) {
            console.log("password");
            return true;
        } else {
            return false;
        }
    })
}

exports.getAllUsers = async () => {
    const users = await User.find({});
    // console.log(users)
    return users;
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

exports.deleteUser = async(email) => {
    try {
        const deletedUser = await User.deleteOne({
            email: email
        });
        return deletedUser;
    }
    catch (err) {
        return err;
    }
    
}

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

exports.saveUser = async(user) => {
    try{
        await user.save();
        return true;
    }
    catch (err) {
        throw err;
    }
    
}

exports.promoteUser = async(newSuperuserEmail) => {
    try {
        const adminToRegular = await User.updateOne({
            role: "admin"
        }, {
            $set: {
                role: "regular-user"
            }
        }
        );

        const regularToAdmin = await User.updateOne({
            email: newSuperuserEmail
        }, {
            $set: {
                role: "admin"
            }
        }
        );        
    }
    catch (err) {
        throw err
    }
}
