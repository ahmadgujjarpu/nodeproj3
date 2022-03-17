const signin=document.getElementById("signin-form");
signin.addEventListener("submit",(e)=>{
    // e.preventDefault();
    var signinData=new FormData(signin);
    const url=signin.action;
    const plainFormData= Object.fromEntries(signinData.entries());
    signinPost(plainFormData);
   
});
async function signinPost(plainFormData){
const request=await fetch("http://localhost:3005/auth/login",{
    method:"POST",
    headers:{
        "content-type":"application/json"
    },
    body:JSON.stringify(plainFormData)
}).then((res)=>{
    console.log("status code :"+res.status);
    if(res.status==200){
        location.assign("http://127.0.0.1:5500/src/views/index.html");
    }else{
       console.log("sorry");
       }
}).catch((err)=>{
    console.log(err);
})
}