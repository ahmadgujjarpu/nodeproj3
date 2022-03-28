const validation=require('../validations/user.validation')
const User  = require('../models/user.model');
const userService = require('../services/user.service');
const auth= require('../middleware/auth')

const gethome=async(req,res)=>{
    const result = await 
    res.render("dashboard",{result:result});
}

// select/get all users from user's table
const getUsers = (async (req, res) => {
    const result = await userService.getUsers();
    res.status(200).send(result);
});
  const getUser = (async (req, res) => {
     console.log(req.body); 
    const result = await userService.getUser(req.body);
});

const getupdateUser= ((req, res, next) => {
    console.log(req.params.id)
    
});
const uploadpic=async(req,res)=>{
    const userPic=userService.uploadpic(req);
    res.send(userPic);
}
const userpic=async(req,res)=>{
const user= await User.user.findOne({ where:{id:req.params.id}});
console.log(user);
res.json(user);
}
const accountupdate=(req,res)=>{
  
    const useraccount=userService.accountupdate(req.body,req.params.id);
    res.send(useraccount);
    
}
const getupdateaccount=async(req,res)=>{
    console.log(req.params.id);
    const user=await userService.getupdateaccount(req.params.id);
    console.log(user);
     res.render("userupdate",{user});
}


module.exports = {
    getUsers,
    getUser,
    getupdateUser,
    uploadpic,
    gethome,
    userpic,
    accountupdate,
    getupdateaccount
};

