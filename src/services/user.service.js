const User = require('../models/user.model');
const validation=require('../validations/user.validation')
const config = require('../config/config');
// Bcrypt is a more powerful hash generator for passwords
//  and uses salt to create a non-recurrent hash.
const bcrypt=require("bcrypt");
const res = require('express/lib/response');

const jwt=require('jsonwebtoken');
//create/register/signup user
const createUser = async (userBody) => {
    const email=userBody.email;
        const userCheck=await User.user.findOne({ where: { email: userBody.email } }).then(async(user)=>{
            if(user){
                console.log("user already exists");
            }
           else {
               if(userBody.password===userBody.re_password){  
                saltRounds=10;
        const hash=await bcrypt.hash(userBody.password,saltRounds);
        const hash2=await bcrypt.hash(userBody.re_password,saltRounds);
       
        const user = User.user.create({email:userBody.email,password:hash,re_enter_password:hash2});
        const token=jwt.sign({email},config.jwt.JWT_SECRET,{
            expiresIn : 60*60*4
        });
        return token;
    }
    else{
        console.log("password does not mathes with re enter password");
    }
           }
         });
         return userCheck;
};

//signin user
const signinUser = async (userBody,req,res) => {

    //business rules/logic go here. 
    var email = userBody.email;
    var password = userBody.password;
        const user = await User.user.findOne({
            where: {
                email: userBody.email
            }
        }).then(async (user)=>{
            if(user){
                const validpass= await bcrypt.compare(userBody.password,user.password);
                 if(validpass){
                    
                    const saltRounds= await bcrypt.genSalt(6);
                const hash=await bcrypt.hash(userBody.password,saltRounds);
     const token=jwt.sign({email},config.jwt.JWT_SECRET,{
                    expiresIn : 36000000
                });
                user.token=token;
                return token;
                 }
                 else{
                     console.log("wrong password");
                 }
               }
               else{
                console.log("user not found");
               }
        })  
        return user;
};
//get all users from database through model
const getUsers = async () => {

    return await User.user.findAll({where:{id:2}, include:[{model:User.task,include:User.project}]});
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
const postProject=(projectBody)=>{
    const project = User.project.create({title:projectBody.title,owner:projectBody.owner,description:projectBody.description});
    return "done";
}
const postTask=(taskBody)=>{
    const project = User.task.create({userId:taskBody.userId,projectId:taskBody.projectId,status:taskBody.status,member:taskBody.member,taskdescription:taskBody.taskdescription});
    return "done task";
}
module.exports = {
    getUsers,
    createUser,
    signinUser,
    postProject,
    postTask,
    getUser
};