const validation=require('../validations/user.validation')
//const userService  = require('../services');
const userService = require('../services/user.service');
const auth= require('../middleware/auth')

const createUser = async (req, res) => {
    const {error}=validation.signupvalidate(req.body);
    if(error){
        res.status(404).send(error.message);
    }
    else{
        const createuser = await userService.createUser(req.body);
       const token= createuser;
        if(createuser){
            res.status(200).json({token})
        }
        else{
            res.status(404).send("sorry")
        }
    }
    };


//signinUser
const signinUser = (async (req, res) => {
    const {error}=validation.loginvalidate(req.body);
    if(error){
        res.status(404).send(error.message);
    }
    else{
    const signinuser = await userService.signinUser(req.body);
  const token=signinuser;
    if(signinuser){
        res.status(200).json({token});
    }
    else{
        res.status(404).send("email or password is incorrect");
    }
} 
});
// select/get all users from user's table
const getUsers = (async (req, res) => {
    const result = await userService.getUsers();
    res.json(result);
});
  const getUser = (async (req, res) => {
     console.log(req.body); 
    const result = await userService.getUser(req.body);
});

const updateUser= ((req, res, next) => {
    console.log("updateUser from userController");
    res.send("updateuser from usercontroller");
});

const postProject=(async(req,res)=>{
    const postproject=await userService.postProject(req.body);
    res.status(200).send(postproject);
})

const postTask=(async(req,res)=>{
    const posttask=await userService.postTask(req.body);
    res.status(200).send(posttask);
});
module.exports = {
    getUsers,
    createUser,
    signinUser,
    postProject,
    postTask,
    getUser
};

