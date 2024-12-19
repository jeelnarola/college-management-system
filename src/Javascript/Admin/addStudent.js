import { TitleHeader } from "../../Components/load.js";
import { PostAPI } from "../../Services/APIServices.JS";
import { GetAPI,DropDownMenu} from "../../Services/APIServices.JS";
if(!(headerTitle==null)){
    document.getElementById("headerTitle").innerHTML=TitleHeader('College Management Syste',"Add A Student")
}
let studentName = null;
let studentEmail = null;
let studentPhone = null;
let DropDwon =null;

let emailregerx=/(\<|^)[\w\d._%+-]+@(?:[\w\d-]+\.)+(\w{2,})(\>|$)/;
let digitRegex = /^\d+$/;

document.getElementById("addStudentForm").addEventListener("submit",(event)=>{
    event.preventDefault()

    let obj;
    studentName = document.getElementById("name")
    studentEmail = document.getElementById("email")
    studentPhone = document.getElementById("phone")
    let gender = document.querySelectorAll('.gender')
    let studentBOD = document.getElementById("BOD")
    let Course = document.getElementById("DropDwon")
    let setGender = null;
    gender.forEach((radio)=>{
        if(radio.checked){
            setGender = radio.value;
        }
    })

    if(studentName.value == ""){
        studentName.classList.remove("border-black");
        studentName.classList.add("border-red-500");
    }else{
        studentName.classList.add("border-black");
        studentName.classList.remove("border-red-500");
    }

    if(studentEmail.value == ""){
        studentEmail.classList.remove("border-black");
        studentEmail.classList.add("border-red-500");
    }else{
        studentEmail.classList.add("border-black");
        studentEmail.classList.remove("border-red-500");
    }

    if(studentPhone.value.length < 10  || !digitRegex.test(studentPhone.value)){
        studentPhone.classList.remove("border-black");
        studentPhone.classList.add("border-red-500");
    }else{
        studentPhone.classList.add("border-black");
        studentPhone.classList.remove("border-red-500");
    }
    if(Course.value == ""){
        Course.classList.remove("border-black");
        Course.classList.add("border-red-500");
    }else{
        Course.classList.add("border-black");
        Course.classList.remove("border-red-500");
    }

    if(studentName.value.length > 0 && studentEmail.value.length > 0 && studentPhone.value.length >= 10  && Course.value.length > 0 && setGender !== null && studentBOD.value.length > 0){
        obj ={
            studentName:studentName.value,
            studentEmail:studentEmail.value,
            studentPhone:studentPhone.value,
            gender:setGender,
            studentBOD:studentBOD.value,
            Course:Course.value
        }
        PostAPI("/Student",obj)
    }else{
        alert("Fill All Filed Required...")
    }
})


document.getElementById("name").addEventListener("keypress",(event)=>{
    studentName = document.getElementById("name")
    if(studentName.value == ""){
        studentName.classList.remove("border-black");
        studentName.classList.add("border-red-500");
    }else if(studentName.value.length < 2){
        studentName.classList.remove("border-black");
        studentName.classList.add("border-red-500");
    }else{
        studentName.classList.add("border-black");
        studentName.classList.remove("border-red-500");
    }
})

document.getElementById("email").addEventListener("keypress",(event)=>{
    studentEmail = document.getElementById("email")
    if(studentEmail.value == ""){
        studentEmail.classList.remove("border-black");
        studentEmail.classList.add("border-red-500");
    }else if(!emailregerx.test(studentEmail.value)){
        studentEmail.classList.remove("border-black");
        studentEmail.classList.add("border-red-500");
    }else{
        studentEmail.classList.add("border-black");
        studentEmail.classList.remove("border-red-500");
    }
})


document.getElementById("phone").addEventListener("keypress",(event)=>{
    studentPhone = document.getElementById("phone")
   if(studentPhone.value.length < 10  || !digitRegex.test(studentPhone.value)){
        studentPhone.classList.remove("border-black");
        studentPhone.classList.add("border-red-500");
    }else{
        studentPhone.classList.add("border-black");
        studentPhone.classList.remove("border-red-500");
    }
})

document.getElementById("DropDwon").addEventListener("click",(event)=>{
   DropDwon = document.getElementById("DropDwon")
    console.log(DropDwon.value)
   if(DropDwon.value.length == 0){
        DropDwon.classList.remove("border-black");
        DropDwon.classList.add("border-red-500");
    }else{
        DropDwon.classList.add("border-black");
        DropDwon.classList.remove("border-red-500");
    }
})

const get =async()=>{
    let data = await GetAPI("/Course")
    DropDownMenu(data)
}

get()