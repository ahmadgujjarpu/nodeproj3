
//const userService  = require('../services');
const userService = require('../services/user.service');

const createUser = async (req, res) => {

    console.log("createuser from userController");
    const createuser = await userService.createUser(req.body,req,res);
    res.status(201).send(createuser);
    };

// select/get all users from user's table
const getUsers = (async (req, res) => {

    const result = await userService.getUsers();
    res.send(result);
});

//signinUser

const signinUser = (async (req, res) => {

    // business logic/rules go here....

    const signinuser = await userService.signinUser(req.body,req,res);
    // if (!user) {
    //     res.status(404).send("Not Found");
    // }
    res.status(200).send(signinuser);

  });




const updateUser = ((req, res, next) => {
    console.log("updateUser from userController");
    res.send("updateuser from usercontroller");
});


module.exports = {
    getUsers,
    createUser,
    signinUser
};

