const signup=document.getElementById("user-signup-form");
signup.addEventListener("submit",(e)=>{
    e.preventDefault();
    var signupData=new FormData(signup);
    // const url=signup.action;
    const plainFormData= Object.fromEntries(signupData.entries());
    console.log(plainFormData);
    signupPost(plainFormData);
});
async function signupPost(plainFormData){
const request=await fetch("http://localhost:3005/auth/signup",{
    method:"POST",
    headers:{
        "content-type":"application/json"
    },
    body:JSON.stringify(plainFormData)
}).then((res)=>{
    console.log("status code :"+res.status);
    if(res.status===200){
        location.assign("http://127.0.0.1:5500/src/views/login.html");
    }
}).catch((err)=>{
    console.log(err);
});
}
