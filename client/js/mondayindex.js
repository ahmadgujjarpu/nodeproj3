
function getEndPointData(endPointURL, bindingData,rowId){
    const xhr = new XMLHttpRequest();
    xhr.open("Get",endPointURL);
    xhr.onload = function () {
        console.log(xhr.responseText);
        const data = JSON.parse(xhr.responseText); 
        bindingData(data,rowId);
    }
    xhr.send();
  }
function generateCell(title,person,date,status) {
 let template=document.querySelector("template").content.cloneNode(true);
template.querySelector("#item").innerHTML=title;
template.querySelector("#person").innerHTML=person;
template.querySelector("#date").innerHTML=date;
template.querySelector("#status").innerHTML=status;
 return template;
}

function bindingData(data,rowId) {
    
    for(let i in data){
        var title=data[i].project_item;
        var person =data[i].person;
        var date=data[i].dates;
        var status=data[i].statuses;
        document.getElementById(`${rowId}`).append(generateCell(title,person,date,status));
    }
}

getEndPointData("http://localhost:3005/user", bindingData,"project");




// const userform = document.getElementById("user-form");
// 	userform.addEventListener("submit", e =>{
	
// 		//prevents form from being submitted
// 		e.preventDefault();
// 		console.log("Prevented");
		

// 		const url = userform.action;
// 		var formData = new FormData(userform);
		
// 		//We want to send the request body as JSON, so we're converting it to a plain object and then send as a JSON string.
// 		const plainFormData = Object.fromEntries(formData.entries());
// 		//fetch data		
// 		fetch('http://localhost:3005/signup', {
// 		method: "POST",
// 		body: JSON.stringify(plainFormData),
// 		headers: {
// 		   "Content-Type": "application/json"
//           }}).
// 		then(res => {
// 		console.log(`Status Code:  ${res.status}`);
// 		})
// 		.catch(err => console.log(err));;
// 			});
