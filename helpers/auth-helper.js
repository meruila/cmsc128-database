const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const Admin = require("../models/admin");
const User = require("../models/regular-user");

/*
Given an email, find a user.
If it exists, return true.
Otherwise, return false.
*/
exports.findUser = async (email) => {
    try {
        const foundUser = await User.findOne({ "user.email": email });
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

/*
Given credentials, save admin to database
*/
exports.saveAdminUser = async(creds) => {
    try{
        let buffer = await Admin.findOne({ "user.email": creds.user.email });
        if (buffer != null){
            return false; // admin already exists
        }
        const userAdmin = new Admin(creds);
        await userAdmin.save();
        return true;        
    }
    catch(err){
        throw err;
    }
    
}

/*
Given an email, this returns the user (if existing).
Returns false if user does not exist.
*/
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
    catch(err) {
        throw (err);
    }
}

/*
Given the email, checks if user is an admin
Returns true/false
*/
exports.checkIfAdmin = async (email) => {
    try{
        let usr = await this.getUser(email);
        if(usr != false && usr.user.role == 'admin'){            
            return true
        }else{
            return false;
        }
    } catch(err) {
        throw(err);
    }
    
}

/* 
Given credentials, save a regular user.
Returns true/false
*/
exports.addRegularUser = async (creds) => {
    try{
        let buffer = await User.findOne({ 'user.email': creds.user.email });
        if(buffer != null){
            return false;
        }
        const newUser = new User(creds);
        await newUser.save();
        return true;
    } catch(err){
        throw(err);
    }   
}

/*
Retrieves a list of all users.
Returns the list of users as an array, or false if no users are found.
*/
exports.findAllUsers = async () => {
    try {
        let toFind = await User.find({});
        if (toFind.length == 0) {
            return false;
        }
        return toFind;
    } catch (err) {
        throw(err);
    }   
}

/*
Given an email, the user with that email gets deleted.
Returns true/false
*/
exports.deleteRegularUser = async (email) => {
    try{
        let res = await User.deleteOne({ 'user.email': email });
        if(res.deletedCount <= 0){
            return false;
        }else {
            return true;
        }        
    }catch(err){
        throw(err);
    }   
}

/*
Given a regular-user's email, the user with that email gets promoted.
Returns true/false
*/
exports.promoteToAdmin = async (email) => {
    try{
        let res = await User.updateOne(
            { 'user.email': email },
            { $set: {
                'user.role':"admin"
            }}
        );

        if(res.modifiedCount <= 0){
            return false;
        }else {
            return true;
        }        
    } catch(err){
        throw(err);
    }   
}

/*
Given an admin's email, the admin gets demoted to a regular user.
Returns true/false
*/
exports.demoteToRegular = async (email) => {
    try{
        let res = await User.updateOne(
            { 'user.email': email },
            { $set: {
                'user.role':"regular-user"
            }}
        );

        if(res.modifiedCount <= 0){
            return false;
        }else {
            return true;
        }        
    } catch(err){
        throw(err);
    }   
}

exports.getProfile = async (email) => {
    try{
        let user = await User.findOne({ 'user.email': email });
        if(user == null){
            return null;
        }

        userDetails = {
            firstName: user.user.name.fname,
            lastName: user.user.name.lname,
            email: user.user.email
        };
        return userDetails;
    } catch(err){
        throw(err);
    }  
}

// exports.editUser = async (email) => {
//     try{
//         let res = await User.updateOne(
//             { 'user.email': email },
//             { $set: {
//                 'user.name.fname':"",
//                 'user.name.lname':"",
//                 'user.password':""
//             }}
//         );

//         if(res.modifiedCount <= 0){
//             return false;
//         }else {
//             return true;
//         }        
//     } catch(err){
//         throw(err);
//     }   
// }

// ( { title: "Tag" },
// {
//   $set: {
//     plot: "One month every year, five highly competitive friends
//            hit the ground running for a no-holds-barred game of tag"
//   }
//   { $currentDate: { lastUpdated: true } }
// })


