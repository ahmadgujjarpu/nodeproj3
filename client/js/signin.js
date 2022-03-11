const signin=document.getElementById("signin-form");
signin.addEventListener("submit",(e)=>{
    e.preventDefault();
    var signinData=new FormData(signin);
    const url=signin.action;
    const plainFormData= Object.fromEntries(signinData.entries());
    signinPost(plainFormData);
   
});
async function signinPost(plainFormData){
const request=await fetch("http://localhost:3005/user/login",{
    method:"POST",
    headers:{
        "content-type":"application/json"
    },
    body:JSON.stringify(plainFormData)
}).then((res)=>{
    console.log("status code :"+res.status);
    if(res.status==200){
        window.location.assign("http://127.0.0.1:5500/client/index.html");
    }
}).catch((err)=>{
    console.log(err);
})
}