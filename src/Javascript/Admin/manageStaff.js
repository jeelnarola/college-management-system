import { TitleHeader } from "../../Components/load.js";
import { DeletAPI } from "../../Services/APIServices.JS";
import { GetAPI } from "../../Services/APIServices.JS";

if(!(headerTitle==null)){
    document.getElementById("headerTitle").innerHTML=TitleHeader('College Management System',"Staff management")
}


const MangeStaff = (data)=>{
    document.getElementById("showStaff").innerHTML = ""

    data.map((ele,index)=>{
        console.log(ele)
        let tr = document.createElement("tr")

        let number = document.createElement("td")
        number.innerHTML = index + 1;
        number.setAttribute("class", "border border-black pl-3");

        let name = document.createElement("td")
        name.innerHTML = ele.name ? ele.name : ' - ';
        name.setAttribute("class", "border border-black pl-3");

        let email = document.createElement("td")
        email.innerHTML = ele.email
        email.setAttribute("class", "border border-black pl-3");
        
        let gender = document.createElement("td")
        gender.innerHTML = ele.gender
        gender.setAttribute("class", "border border-black pl-3");
 

        let phone = document.createElement("td")
        phone.innerHTML = ele.phoneNo ? "+91 " + ele.phoneNo : " ";
        phone.setAttribute("class", "border border-black pl-3");

        let Course = document.createElement("td")
        Course.innerHTML = ele.Course;
        Course.setAttribute("class", "border border-black pl-3");


        let action = document.createElement("td")
        let row = document.createElement("div")
        row.setAttribute("class","flex justify-self-center")

        action.setAttribute("class","border border-black pl-6")
        let editbtn = document.createElement("button")
        editbtn.innerHTML = 'Update'
        editbtn.setAttribute("class","border border-black p-2 px-5 btn bg-green-600 m-2 pointer text-white rounded-lg");
        editbtn.addEventListener("click",(e)=>{
            e.preventDefault()
            sessionStorage.setItem("staffManageUpdateID",ele.id)
            window.location.href = '/src/Pages/Admin/addStaff.html'
        })
        let deletebtn = document.createElement("button")
        deletebtn.innerHTML = 'Delete'
        deletebtn.setAttribute("class","border border-black p-2 px-5 btn bg-red-600 m-2 pointer text-white rounded-lg");
        deletebtn.addEventListener("click",(e)=>{
            e.preventDefault()
            DeletAPI("/staff",ele.id)
        })
        row.append(editbtn,deletebtn)
        action.append(row)
        tr.append(number,name,email,gender,phone,Course,action)
        document.getElementById("showStaff").append(tr)
    })
}


const get = async() => {
  let data = await GetAPI('/staff')
  console.log(data)
  MangeStaff(data);
};
get();