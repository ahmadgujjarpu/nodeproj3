const validation=require('../validations/user.validation')
//const userService  = require('../services');
const userService = require('../services/user.service');
const auth= require('../middleware/auth')

const gethome=(req,res)=>{
    res.render("dashboard");
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
    res.render("userupdate");
});
const uploadPic=async(req,res)=>{
    const userPic=userService.uploadPic(req);
    console.log(userPic);
    res.send(userPic);
}




const fileUpload=((req, res)=>{
    res.send("file has been uploaded");
});
module.exports = {
    getUsers,
    getUser,
    fileUpload,
    getupdateUser,
    uploadPic,
    gethome
};

