const validation=require('../validations/user.validation')
//const userService  = require('../services');
const projectService = require('../services/project.service');

const postProject=(async(req,res)=>{
    const postproject=await projectService.postProject(req.body);
    res.status(200).send(postproject);
});
module.exports={
    postProject
}