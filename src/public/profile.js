const profile=document.getElementById("user-account-pic");
const userpic=document.getElementById("userpics");

profile.addEventListener("submit",(e)=>{
    e.preventDefault();
    var profileData=new FormData();
    profileData.append("userpics",userpic.files[0]);
   profilePost(profileData);
});
async function profilePost(profileData){
const request=await fetch("http://localhost:3005/user/file",{
    method:"POST",
    body:profileData
}).then((res)=>{
    console.log("status code :"+res.status);
}).catch((err)=>{
    console.log(err);
})
}