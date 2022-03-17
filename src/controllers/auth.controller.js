const path=require("path");
const validation=require('../validations/user.validation');
//const userService  = require('../services');
const authService = require('../services/auth.service');

const getsignup=(req,res)=>{
    res.render("signup")
}

const createUser = async (req, res) => {
    const {error}=validation.signupvalidate(req.body);
    if(error){
        res.status(404).send(error.message);
    }
    else{
        const createuser = await authService.createUser(req.body);
        if(createuser){
            res.status(200).send("signup successfully");
        }
        else{
            res.status(404).send("invalid email")
        }
    }
    };

//signinUser

const getlogin=(req,res)=>{
    res.render("login")
}

const signinUser = (async (req, res) => {
    const {error}=validation.loginvalidate(req.body);
    if(error){
        res.status(404).send(error.message);
    }
    else{
    const signinuser = await authService.signinUser(req.body);
 const   tokenAge=60*60;
  const token=signinuser;
    if(signinuser){
        res.cookie("jwt",token,{ httpOnly: true, maxAge:new Date(Date.now()+ tokenAge) });
        res.status(200).send("login successfully");
    }
    else{
        res.status(404).send("email or password is incorrect");
    }
} 
});
module.exports={
    getsignup,
    createUser,
    getlogin,
    signinUser
}