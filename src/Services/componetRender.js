import  {AdminHeader,TitleHeader}  from "../Components/load.js";
let AdminHeaderId=document.getElementById("AdminHeader");
if(!(AdminHeaderId == null)){
    document.getElementById("AdminHeader").innerHTML=AdminHeader()
}

if(!(headerTitle==null)){
    document.getElementById("headerTitle").innerHTML=TitleHeader('College Management System')
}

