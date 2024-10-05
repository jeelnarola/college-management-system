import  {AdminHeader, Login}  from "./Components/load.js";
let Admineader=document.getElementById("AdminHeader")
console.log(Admineader)
const LoginValue = sessionStorage.getItem('Username')

// DONE
if (LoginValue == null){
    document.getElementById("Login").innerHTML=Login()
}
if(!(AdminHeader == null)){
    console.log("done")
    document.getElementById("AdminHeader").innerHTML=AdminHeader()
}
