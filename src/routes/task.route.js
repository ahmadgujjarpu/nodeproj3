const express = require('express');

const router = express.Router();

const taskController = require('../controllers/task.controller');

router
    .route('/')
    .post(taskController.postTask)

    module.exports = router;