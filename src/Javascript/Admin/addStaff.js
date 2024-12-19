import { TitleHeader } from "../../Components/load.js";
import { EditAPI } from "../../Services/APIServices.JS";
import { DropDownMenu } from "../../Services/APIServices.JS";
import { GetAPI , PostAPI} from "../../Services/APIServices.JS";
let sessionData = sessionStorage.getItem("staffManageUpdateID")
if(!(headerTitle==null)){
    document.getElementById("headerTitle").innerHTML=TitleHeader('College Management System',"Add A Staff")
}
if(sessionData){
    document.getElementById("addCoursebtn").value = "Update"
    const getData = async() =>{
        let data = await GetAPI(`/staff?id=${sessionData}`)
        document.getElementById("name").value = data[0].name
        document.getElementById("email").value = data[0].email
        document.getElementById("phone").value = data[0].phoneNo
        let Radio = document.querySelectorAll('.gender')
        Radio.forEach((radio)=>{
            if(radio.defaultValue == data[0].gender){
                radio.checked = true
            }
        })
    }
    sessionStorage.clear()
    getData()
}else{
    document.getElementById("addCoursebtn").value = "Add Course"
}

document.getElementById('addStaffForm').addEventListener("submit",(e)=>{
    e.preventDefault()
    let btnValue = document.getElementById("addCoursebtn").value
    console.log("btnValue",btnValue)
    let Radio = document.querySelectorAll('.gender')
    let setGender = null;

    Radio.forEach((radio)=>{
        if(radio.checked){
            setGender = radio.value
        }
    })
    let data = {
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        gender:setGender,
        Course:document.getElementById("DropDwon").value,
        phoneNo:document.getElementById("phone").value
    }
    if(btnValue == "Update"){
        EditAPI("/staff",sessionData,data)
        
    }else{
        PostAPI('/staff',data)
    }


})


let get = async()=>{
    let data = await GetAPI('/Course')
    DropDownMenu(data)
}

get()