const express = require('express');
const profile=require("../middleware/uploadpic.js")
// The express.Router() function is used to create a new router object.
//  This function is used when you want to create a new router object in your program to handle requests.
const router = express.Router();
const {verifyToken}=require('../middleware/auth');


const userController = require('../controllers/user.controller');


router
    .route('/home')
    .get(verifyToken,userController.gethome)
    
router
    .route('/userdata')
    .get(verifyToken,userController.getUsers)

    router
    .route('/accountupdate')
    .get(userController.getupdateUser)
    .patch(profile.upload.single("userpics"))
  
router
    .route('/userupdate')
    .post(profile.upload.single("userpic"),userController.fileUpload)

module.exports = router;