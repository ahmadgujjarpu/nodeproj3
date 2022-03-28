const express = require('express');
const profile=require("../middleware/uploadpic.js")
// The express.Router() function is used to create a new router object.
//  This function is used when you want to create a new router object in your program to handle requests.
const router = express.Router();
const {verifyToken}=require('../middleware/auth');


const userController = require('../controllers/user.controller');


router
    .route('/home/:id')
    .get(verifyToken,userController.gethome)
    

    router
    .route('/uploadpic/:id')
    .patch(profile.upload.single("userpics"),userController.uploadpic)
router
    .route('/userAccount/:id')
    .get(verifyToken,userController.getupdateaccount)
    .patch(userController.accountupdate)

  

module.exports = router;