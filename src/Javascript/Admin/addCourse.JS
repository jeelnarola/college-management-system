// document.getElementById("h").innerHTML=`
//     <h1 onclick="jeel()">Jeel</h1>
// `
// function jeel(){
// alert("l")
// }
import { popup } from "../../popup.js";

// all select in course
// let divMenu=document.getElementById("cMenu")
// let ShowVal=document.getElementById("ShowVal")
// let ulElement = document.querySelector("#ul");
// let display=0;
// document.getElementById("ShowVal").addEventListener("click",(event)=>{
//   // console.log(event)
//   if (display == 1){
//     divMenu.style.display='block';
//     display=0;
// }else{
//     divMenu.style.display='none';
//     display=1;
// }
// })
// ulElement.addEventListener("click",(e)=>{

//   if (e.target.tagName === "LI") {
//     console.log("li done")
//       let selectedValue = event.target.innerText;
// //       console.log(selectedValue); // Log the selected value
//       document.getElementById("ShowVal").innerHTML = selectedValue; // Display the selected value in the ShowVal element
//       divMenu.style.display='none';
//     display=1;
//     }
// })
// all select in course
document.getElementById("addCourseForm").addEventListener("submit",(e)=>{
    e.preventDefault()
    let courseNamevalue=document.getElementById("courseName").value
    // console.log(courseNamevalue)
    if(courseNamevalue == ''){
      document.getElementById("courseName").classList.remove("border-black")
        document.getElementById("courseName").classList.add("border-red-600")
    }else{
        document.getElementById("courseName").classList.remove("border-red-600")
    }

    if(courseNamevalue !== ''){
      // popup()
        let  data ={
          Cname : document.getElementById("courseName").value
        }
        fetch("http://localhost:3000/Course",{
          method:"POST",
          headers:{"content-type":"application/json"},
          body:JSON.stringify(data)
        })
        .then((res)=> res.json())
        .then((Done)=>{
          popup()
        })
    }


})