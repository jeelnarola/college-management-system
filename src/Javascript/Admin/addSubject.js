import { TitleHeader } from "../../Components/load.js";
import { DropDwonStaff } from "../../Services/APIServices.JS";
import { DeletAPI, EditAPI, GetAPI, PostAPI, DropDownMenu } from "../../Services/APIServices.JS";

document.title = 'Subject Management'
let satffData = null;
let SubjectFrom = document.getElementById("addCourseForm")
let id = null;
if (!(headerTitle == null)) {
  document.getElementById("headerTitle").innerHTML = TitleHeader('College Management System', "Subject Management", "Add Subject", "Manage Subject")
}


document.getElementById("Add").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("showMangeSubject").style.display = "none";
  document.getElementById("showAddSubject").style.display = "block";
  document.getElementById("addCoursebtn").value = "Add Course";
  document.getElementById("AddCourseTitle").innerHTML = "Add Course";
});

document.getElementById("Mange").addEventListener("click", (e) => {
  e.preventDefault()
  document.getElementById("showMangeSubject").style.display = "block";
  document.getElementById("showAddSubject").style.display = "none";
})

SubjectFrom.addEventListener("submit", async (e) => {
  e.preventDefault();
  let btnValue = document.getElementById("addCoursebtn").value
  let SubjectData = {
    Sname: document.getElementById("subjectName").value,
    Staff: document.getElementById("DropDwonStaff").value,
    Course: document.getElementById("DropDwon").value,
  }
  if(btnValue == 'Update'){
    EditAPI('/Subject',id,SubjectData)
    id=null;
  }else{
    await PostAPI('/Subject', SubjectData)
  }
})
document.getElementById("DropDwonStaff").addEventListener("change", async function () {
  for (let staff of satffData) {
    if (staff.Course) {
      if (staff.name == this.value) {
        let setCourse = await GetAPI(`/Course?Course=${staff.Course}`);
        console.log("UId", setCourse)
        DropDownMenu(setCourse)
      }
    } else {
      DropDownMenu(0)
    }
  }
})

const showStaff = (data) => {
  data.map(async (ele, index) => {
    let tr = document.createElement("tr")
    let sNo = document.createElement("td")
    sNo.innerHTML = 1 + index
    sNo.setAttribute("class", "border border-black pl-3");

    let subjectName = document.createElement("td")
    subjectName.innerHTML = ele.Sname
    subjectName.setAttribute("class", "border border-black pl-3");

    let staffName = document.createElement("td")
    staffName.innerHTML = ele.Staff
    staffName.setAttribute("class", "border border-black pl-3");
    let courseName = document.createElement("td")
    console.log(ele)
    courseName.innerHTML = ele.Course
    courseName.setAttribute("class", "border border-black pl-3");

    let action = document.createElement("td")
    action.setAttribute("class", "border border-black pl-3");
    let updatebtn = document.createElement("button")
    updatebtn.innerHTML = 'Update'
    updatebtn.setAttribute("class", "border border-black p-3 btn bg-blue-600 m-2 pointer text-white");
    updatebtn.addEventListener("click", async (e) => {
      e.preventDefault()
      id = ele.id;
      let arr = []
      arr.push(ele)
      document.getElementById("subjectName").value = ele.Sname,
        document.getElementById("DropDwonStaff").value = ele.Staff,
        document.getElementById("DropDwon").value = ele.Course,
        document.getElementById("addCoursebtn").value = 'Update'
        document.getElementById("showMangeSubject").style.display = "none";
      document.getElementById("showAddSubject").style.display = "block";
      DropDownMenu(arr)
    })


    let deletebtn = document.createElement("button")
    deletebtn.innerHTML = 'Delete'
    deletebtn.setAttribute("class", "border border-black p-3 btn bg-red-600 m-2 pointer text-white");
    deletebtn.addEventListener("click", (e) => {
      e.preventDefault()
      DeletAPI("/Subject", ele.id)
    })
    action.append(updatebtn, deletebtn)
    tr.append(sNo, subjectName, staffName, courseName, action)

    document.getElementById("showSubject").append(tr)
  })
}

const getStaff = async () => {
  satffData = await GetAPI("/staff")
  DropDwonStaff(satffData)
}

const getSubject = async () => {
  let subjectGet = await GetAPI("/Subject")
  showStaff(subjectGet)
}
getSubject()
getStaff()
