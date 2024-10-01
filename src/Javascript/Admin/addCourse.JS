// document.getElementById("h").innerHTML=`
//     <h1 onclick="jeel()">Jeel</h1>
// `
// function jeel(){
// alert("l")

import { add } from "../../popup.js";

// }
let divMenu=document.getElementById("cMenu")
let ShowVal=document.getElementById("ShowVal")
let ulElement = document.querySelector("#ul");
console.log(ulElement)
let display=0;
document.getElementById("ShowVal").addEventListener("click",(event)=>{
  // console.log(event)
  if (display == 1){
    divMenu.style.display='block';
    display=0;
}else{
    divMenu.style.display='none';
    display=1;
}
// console.log("llllllll",event.target.tagName)
if (event.target.tagName == "P") {
  let selectedValue = event.target.innerText;
  // console.log(selectedValue); // Log the selected value
  ShowVal.innerHTML = selectedValue; // Display the selected value in the ShowVal element
}
})
// ulElement.addEventListener("cl", (event) => {
//   console.log("even",event)
//   // Ensure the clicked target is an <li> element
//   if (event.target.tagName === "LI") {
//       let selectedValue = event.target.innerText;
//       console.log(selectedValue); // Log the selected value
//       document.getElementById("ShowVal").innerHTML = selectedValue; // Display the selected value in the ShowVal element
//   }
// });
ulElement.addEventListener("click",(e)=>{
  alert("k")
  console.log(e.target.innerText)
})
// ulElement.addEventListener("click",(event)=>{
//   console.log(event.target.tagName)
  
// })
// const ValGet=(element)=>{
//     value = element.innerText
//     ShowVal.innerHTML=value
//     divMenu.style.display='none';
// }

document.getElementById("addCourseForm").addEventListener("submit",(e)=>{
    e.preventDefault()
    let courseNamevalue=document.getElementById("courseName").value
    let sessionValue=document.getElementById("ShowVal").innerHTML
    console.log(courseNamevalue)
    if(courseNamevalue == ''){
        document.getElementById("courseName").classList.add("border-red-500")
    }else{
        document.getElementById("courseName").classList.remove("border-red-500")
    }

    if (sessionValue == 'Select Session Name'){
        document.getElementById("ShowVal").classList.add("border-red-500")
    }else{
        document.getElementById("ShowVal").classList.remove("border-red-500")
    }

    if(courseNamevalue !== '' && sessionValue !== 'Select Session Name'){
        console.log("Done")
        
        // call the API
    }


})
let sum=add(10,10)
console.log(sum)