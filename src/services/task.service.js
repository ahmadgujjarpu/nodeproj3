const User = require('../models/user.model');
const config = require('../config/config');
const res = require('express/lib/response');

const postTask=(taskBody)=>{
    const project = User.task.create({status:taskBody.status,member:taskBody.member,taskdescription:taskBody.taskdescription});
    return "done task";
}

module.exports = {
    postTask
};