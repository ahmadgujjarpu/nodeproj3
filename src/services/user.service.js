const User = require('../models/user.model');
const validation=require('../validations/user.validation')
const config = require('../config/config');
// Bcrypt is a more powerful hash generator for passwords
//  and uses salt to create a non-recurrent hash.
const bcrypt=require("bcrypt");
const res = require('express/lib/response');

const jwt=require('jsonwebtoken');
//create/register/signup user

//get all users from database through model
const getUsers = async () => {

   const user=await User.user.findAll();
    return user;
};
const getUser = async (userBody) => {
    console.log(userBody)
    const user = await User.user.findOne({
        where: {
            email: userBody.email
        }
    }).then(async (user)=>{
        if(user){

    const  userdata= await User.user.findAll({where : {
        id:user.id
    },
    include:[{model:User.task,include:User.project}]
});
const data=JSON.stringify(userdata);
console.log(data);
return data;  
    }});
   return user;
};
const uploadPic=(req)=>{
    console.log(req.file)
    if(!req.file){
        console.log("no file")
    }
    else{
   const image= req.file.userpics;
    const userpic= User.profile.create({profilePic:image});
    return userpic;
    }
}


module.exports = {
    getUsers,
    getUser,
    uploadPic
};