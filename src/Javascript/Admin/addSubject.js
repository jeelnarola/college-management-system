import { TitleHeader } from "../../Components/load.js";
import { DeletAPI,EditAPI,GetAPI,PostAPI,DropDownMenu } from "../../Services/APIServices.JS";

document.title = 'Subject Management'

if(!(headerTitle==null)){
  document.getElementById("headerTitle").innerHTML=TitleHeader('College Management System',"Subject Management","Add Subject","Manage Subject")
}

const setCouser=(data)=>{
  DropDownMenu(data)
}

const get =async()=>{
  fetch("http://localhost:3000/Course")
  .then((res=>res.json()))
  .then((data)=>{
    setCouser(data)
  })
}

get()