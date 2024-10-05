import { DeletAPI } from "../../CURD.JS";
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
let id = 0;
document.getElementById("addCourseForm").addEventListener("submit", (e) => {
  e.preventDefault();
  let courseNamevalue = document.getElementById("courseName").value;
  let valuebtn = document.getElementById("addCoursebtn").value;
  if (courseNamevalue == "") {
    document.getElementById("courseName").classList.remove("border-black");
    document.getElementById("courseName").classList.add("border-red-600");
  } else {
    document.getElementById("courseName").classList.remove("border-red-600");
  }

  if (valuebtn == "Update") {
    if (courseNamevalue !== "") {
      let data = {
        Cname: document.getElementById("courseName").value,
      };

      fetch(`http://localhost:3000/Course/${id}`, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      }).catch((error) => {
        console.log(error);
      });
    }
  } else {
    if (courseNamevalue !== "") {
      let data = {
        Cname: document.getElementById("courseName").value,
      };

      fetch("http://localhost:3000/Course", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((Done) => {
          popup();
        });
    }
  }
});

document.getElementById("MangeCourse").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("showHideMangeCourse").style.display = "block";
  document.getElementById("showHideCourse").style.display = "none";
});
document.getElementById("AddCourse").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("showHideMangeCourse").style.display = "none";
  document.getElementById("showHideCourse").style.display = "block";
  document.getElementById("addCoursebtn").value = "Add Course";
  document.getElementById("AddCourseTitle").innerHTML = "Add Course";
});
const showMange = (data) => {
  data.map((ele, index) => {
    console.log(index);
    let tr = document.createElement("tr");
    let Cno = document.createElement("td");
    Cno.setAttribute("class", "border border-black pl-3");
    Cno.innerHTML = index + 1;
    let Cname = document.createElement("td");
    Cname.setAttribute("class", "border border-black pl-3");
    Cname.innerHTML = ele.Cname;
    let actiontd = document.createElement("td");
    actiontd.setAttribute("class", "m-2 border border-black pl-3");
    let editbtn = document.createElement("button");
    editbtn.innerHTML = "Edit";
    editbtn.setAttribute(
      "class",
      "border border-black p-3 btn bg-blue-600 m-2 pointer"
    );
    editbtn.addEventListener("click", (e) => {
      id = ele.id;
      document.getElementById("AddCourseTitle").innerHTML = "Update Course";
      document.getElementById("addCoursebtn").value = "Update";
      document.getElementById("showHideMangeCourse").style.display = "none";
      document.getElementById("showHideCourse").style.display = "block";
      document.getElementById("courseName").value = ele.Cname;
    });
    let delbtn = document.createElement("button");
    delbtn.innerHTML = "Delete";
    delbtn.setAttribute(
      "class",
      "border border-black p-3 btn bg-red-600 pointer"
    );
    delbtn.addEventListener("click", (e) => {
      DeletAPI(ele.id);
    });
    actiontd.append(editbtn, delbtn);
    tr.append(Cno, Cname, actiontd);
    document.getElementById("showCourse").append(tr);
  });
};
const get = () => {
  fetch("http://localhost:3000/Course")
    .then((res) => res.json())
    .then((data) => {
      showMange(data);
    });
};
get();
