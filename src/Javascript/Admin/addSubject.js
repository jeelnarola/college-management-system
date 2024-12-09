import { TitleHeader } from "../../Components/load.js";
import { DeletAPI,EditAPI,GetAPI,PostAPI } from "../../Services/APIServices.JS";

document.title = 'Subject Management'

if(!(headerTitle==null)){
  document.getElementById("headerTitle").innerHTML=TitleHeader('College Management System',"Subject....","Add Subject","Manage Subject")
}