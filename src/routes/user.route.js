const express = require('express');
const router = express.Router();

//const userValidation = require('../../validations/user.validation');
const userController = require('../controllers/user.controller');
console.log(userController);

router
    .route('/')
    .get(userController.getUsers);

router
    .route('/signup')
    .post(userController.createUser);

router
    .route('/login')
    .post(userController.signinUser)

module.exports = router;
