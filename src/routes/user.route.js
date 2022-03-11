const express = require('express');
// The express.Router() function is used to create a new router object.
//  This function is used when you want to create a new router object in your program to handle requests.
const router = express.Router();
const auth=require('../middleware/auth')

const userValidation = require('../validations/user.validation');
const userController = require('../controllers/user.controller');



router
    .route('/signup')
    .post(userController.createUser);
router
    .route('/login')
    .post(userController.signinUser)
router
    .route('/')
    .get(userController.getUsers)
router
    .route('/:id')
    .get(userController.getUser)
router
    .route('/projects')
    .post(userController.postProject);
router
    .route('/tasks')
    .post(userController.postTask)
    module.exports = router;
