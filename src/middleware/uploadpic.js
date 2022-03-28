const multer=require('multer');


const fileStorage=multer.diskStorage({
    
    destination:(req,file,cb,next)=>{
        cb(null,"./public/profilepics")
},
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
});
// const allowedFiles=(req, file, cb,next)=> {
//     if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
//         req.fileValidationError = 'Only  files are allowed!';
//         return cb(new Error('Only  files are allowed!'), false);
//     }
//     cb(null, true);
// }
function next(req,res,next){
    next();
};
const upload=multer({storage:fileStorage
    ,next});

module.exports={
    upload
}