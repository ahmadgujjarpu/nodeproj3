const User = require('../models/user.model');
const validation=require('../validations/user.validation')
const bcrypt=require("bcrypt");
const res = require('express/lib/response');
const jwt=require('jsonwebtoken');
//create/register/signup user
const createUser = async (userBody,req,res) => {
    var email = userBody.email;
    var password = userBody.password;
    var re_password=userBody.re_password;
    const userCheck=await User.user.findOne({ where: { email: userBody.email } }).then(async(user)=>{
        if(!user){
            console.log("unknown");
            const {error}=await validation.signupvalidate(userBody);
        if(error){
            res.status(404);
            console.log("not valid");
            res.send('not valid');
        }
       else {
           if(userBody.password===userBody.re_password){  
            saltRounds=10;
    const hash=await bcrypt.hash(userBody.password,saltRounds);
    const hash2=await bcrypt.hash(userBody.re_password,saltRounds);
    const user = User.user.create({email:userBody.email,password:hash,re_enter_password:hash2});
        const token=jwt.sign({email,password,re_password},"secretkeyhash",{
            expiresIn : 36000000
        })
    console.log(user);
    return token;

}
else{
    res.status(404);
    res.send("password does not mathes with re enter password");
    return "nothing";
}
       }
        }
        else{
            console.log("user already exists");
                res.send("user has already been taken");
        }
    });

  return userCheck;
    //business rules/logic go here. check if user already exist etc....

};

//signin user
const signinUser = async (userBody,req,res) => {

    //business rules/logic go here. 
    var email = userBody.email;
    var password = userBody.password;
    var re_password=userBody.re_password;

        const {error}=validation.loginvalidate(userBody);


    if(error){
        res.send("not valid");
    }
    else{
        console.log("From signinuser service");
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
            token=jwt.sign({email,password},"secretkeyhash",{
                    expiresIn : 36000000
                });
                const  userdata= await User.user.findAll({where : {
                    id:user.id
                },
                include:[{model:User.task,include:User.project}]
            });
                const data=JSON.stringify(userdata);
                // console.log(data);
            return data;
                // const user=await 
                 }
                 else{
                     res.send("wrong password");
                 }
               }
               else{
                  res.send("user not found"); 
               }
        })
       return user;    
    }
};
//get all users from database through model
const getUsers = async () => {

    //business logic/rules go here

    const users = await User.user.findAll();
    const data=JSON.stringify(users);
    return users;
};
module.exports = {
    getUsers,
    createUser,
    signinUser
};