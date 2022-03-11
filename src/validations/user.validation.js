const Joi=require('Joi')
const signupvalidate=(data)=>{
    const schema=Joi.object({
     email:Joi.string().email().lowercase().trim().required(),
       password:Joi.string().min(8).max(30).required(),
       re_password:Joi.string().min(8).max(30).required()
   });
   const valid=schema.validate(data);
   return valid;
}

    const loginvalidate=(data)=>{
        const schema=Joi.object({
            email:Joi.string().email().lowercase().required(),
           password:Joi.string().min(8).max(30).required()
       });
       return schema.validate(data);
    }

module.exports={
    signupvalidate,
    loginvalidate
}