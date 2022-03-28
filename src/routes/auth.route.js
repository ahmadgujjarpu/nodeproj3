const express = require('express');

const router = express.Router();

const authController = require('../controllers/auth.controller');
const userValidation = require('../validations/user.validation');



router
    .route('/signup')
    .get(authController.getsignup)
    .post(authController.createUser)
router
    .route('/login')
    .get(authController.getlogin)
    .post(authController.signinUser)
router
    .route('/signout')
    .get(authController.signout)

    module.exports=router;