const validation=require('../validations/user.validation')
//const userService  = require('../services');
const taskService = require('../services/task.service');

const postTask=(async(req,res)=>{
    const posttask=await taskService.postTask(req.body);
    res.status(200).send(posttask);
});
module.exports={
    postTask
}