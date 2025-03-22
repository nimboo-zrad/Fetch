console.log("fetching in progress...");

//fetching text:

fetch("../etc/hello.txt")
.then(response=>{
	if (!response.ok){
	    throw new err(`err is ${response.error}`);
	}
	return response.text();
})
.then(data =>{
	const div = document.getElementById("fetch").innerText = data;
})
.catch(error =>{
	console.error("there has been a problem here", error);
});

//fetchin JSON:

fetch("../etc/personal.json")
.then(response =>{
	if(!response.ok){
		throw new err(`err is ${response.error}`);
	}
	return response.json();
})
.then(data =>{
	const table = document.getElementById("table");
    data.forEach((val, ind) =>{
    	const row = document.createElement("tr");
         // person:
         const id = document.createElement("td");
         id.innerText = ind += 1;
         row.appendChild(id);
        //name: 
        const name = document.createElement("td");
        name.innerText = val.name;
        row.appendChild(name); 
        
        //lname:
        const lname = document.createElement("td");
        lname.innerText = val.lname;
        row.appendChild(lname);
        
        //age: 
        const age = document.createElement("td");
        age.innerText = val.age;
        row.appendChild(age);
        table.appendChild(row);
    })
})
.catch(err =>{
	console.error("there has been an error:", err)
});
