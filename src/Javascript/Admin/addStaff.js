import { TitleHeader } from "../../Components/load.js";
import { DropDownMenu } from "../../Services/APIServices.JS";
import { GetAPI , PostAPI} from "../../Services/APIServices.JS";

if(!(headerTitle==null)){
    document.getElementById("headerTitle").innerHTML=TitleHeader('College Management System',"Add A Staff")
}

document.getElementById('addStaffForm').addEventListener("submit",(e)=>{
    e.preventDefault()
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
        Cname:document.getElementById("DropDwon").value,
    }

    PostAPI('/staff',data)

})


let get = async()=>{
    let data = await GetAPI('/Course')
    DropDownMenu(data)
}

get()