const User = require('../models/user.model');
const config = require('../config/config');
const res = require('express/lib/response');

const postProject=async(req)=>{
    const projectBody=req.body;
    const project = await User.project.create({title:projectBody.title,owner:projectBody.owner,description:projectBody.description}).then((project)=>{
        User.user_project.create({projectId:project.id,userId:req.params.id})
    });
    console.log(project);
    return project;
}

module.exports = {
    postProject
};