const User = require('../models/user.model');
const config = require('../config/config');
const res = require('express/lib/response');

const postProject=(projectBody)=>{
    const project = User.project.create({title:projectBody.title,owner:projectBody.owner,description:projectBody.description});
    return "done";
}

module.exports = {
    postProject
};