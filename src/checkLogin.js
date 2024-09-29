import  {asideHeader, Login}  from "./Components/load.js";


document.getElementById("AdminHeader").innerHTML=asideHeader()
const LoginValue = sessionStorage.getItem('Username')

// DONE
// if (LoginValue == null){
//     document.getElementById("Login").innerHTML=Login()
// }