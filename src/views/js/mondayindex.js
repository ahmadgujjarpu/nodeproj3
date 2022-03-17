
async function getEndPointData(URL, bindingData,rowId,rowId2){
   await fetch(URL)
    .then((response) => {
		console.log(response.json());
      return response.json();
    })
    .then((data) => {
      console.log(data);
      bindingData(data,rowId,rowId2);
    }).catch((err)=>{
        console.log(err);
    })
    }
function projectCell(title,owner,description){
//  let template=document.querySelector("template").content.cloneNode(true);
return ` <div class="row bg_1">
<div class="col-3">
    <h4 class="title">${title}</h4>
</div>
<div class="col-3">
    <h4 class="own">${owner}</h4>
</div>
<div class="col-3">
    <h4 class="des">${description}</h4>
</div>
 
  </div>`
}

function taskCell(projectTitle,status,member,taskdescription){
  return `<div class="row">
  <div class="col-3">
  <h4 class="des">${projectTitle}</h4>
</div>
  <div class="col-3">
  <h4 class="stat">${status}</h4>
</div>
<div class="col-3">
  <h4 class="mem">${member}</h4>
</div>
<div class="col-3">
  <h4 class="td">${taskdescription}</h4>
</div>
</div>`
}

function bindingData(data,rowId,rowId2) {
        var title=data[0].task.project.title;
        var owner =data[0].task.project.owner;
        var description=data[0].task.project.description;
        var projectTitle=data[0].task.project.title;
        var status=data[0].task.status;
		var member=data[0].task.member;
		var taskdescription=data[0].task.taskdescription;
		console.log(taskdescription)
        // document.getElementsByClassName(`${rowId}`).innerhtml=`${title}+${ownerdescription}+${status}+${member}+${taskdescription}`;
     document.querySelector(`#${rowId}`).innerHTML+=projectCell(title,owner,description);
     document.querySelector(`#${rowId2}`).innerHTML+=taskCell(projectTitle,status,member,taskdescription);
}

getEndPointData("http://localhost:3005/user/home", bindingData,"project1","task1");




const projectform = document.getElementById("project-form");
	projectform.addEventListener("submit", (e) =>{
	
		//prevents form from being submitted
		e.preventDefault();
		console.log("Prevented");
		

		const url = projectform.action;
		var formData = new FormData(projectform);
		
		//We want to send the request body as JSON, so we're converting it to a plain object and then send as a JSON string.
		const plainFormData = Object.fromEntries(formData.entries());
		console.log(plainFormData);
		//fetch data		
		fetch('http://localhost:3005/project', {
		method: "POST",
		body: JSON.stringify(plainFormData),
		headers: {
		   "Content-Type": "application/json"
          }}).
		then(res => {
		console.log(`Status Code:  ${res.status}`);
		})
		.catch(err => console.log(err));
  });

  const taskform = document.getElementById("project-form");
	taskform.addEventListener("submit", (e) =>{
	
		//prevents form from being submitted
		e.preventDefault();
		console.log("Prevented");
		

		// const url = taskform.action;
		var formData = new FormData(taskform);
		
		//We want to send the request body as JSON, so we're converting it to a plain object and then send as a JSON string.
		const plainFormData = Object.fromEntries(formData.entries());
		//fetch data		
		fetch('http://localhost:3005/task', {
		method: "POST",
		body: JSON.stringify(plainFormData),
		headers: {
		   "Content-Type": "application/json"
          }}).
		then(res => {
		console.log(`Status Code:  ${res.status}`);
		})
		.catch(err => console.log(err));
  });
