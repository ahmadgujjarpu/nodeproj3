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
const getUsers = async (req) => {

   const user=await User.user.findAll({
       where:{
           id:req.params.id
       }
   });
    return user;
};
const getUser = async (req) => {
    const user = await User.task.findAll({
        where: {
            id:req.params.id
        }
    }).then(async (user)=>{
        if(user){

    const  userdata= await User.project.findAll({where : {
        id:user.id
    },
    include:{model:User.task,include:User.project}
});
const data=JSON.stringify(userdata);
console.log(data);
return data;  
    }});
   return user;
};
const uploadpic=async(req)=>{
console.log(req.file)
    console.log("userpic"+req.file);
const user= await   User.user.update({
        profilePic:"profilepics/"+req.file.originalname
      },{where:{id:req.params.id}});
      return user;
}


const accountupdate=async(body,id)=>{
    const user=  await  User.user.update({
        firstname:body.firstname,
        lastname: body.lastname,
        phone: body.phone
      },{where:{id:id}});
      console.log(user);
      return user;
}

const getupdateaccount=async(id)=>{
    const user= await User.user.findOne({where:{id:id}});
    return user;
}


module.exports = {
    getUsers,
    getUser,
    uploadpic,
    accountupdate,
    getupdateaccount
}