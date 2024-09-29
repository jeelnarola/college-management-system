// document.getElementById("h").innerHTML=`
//     <h1 onclick="jeel()">Jeel</h1>
// `
// function jeel(){
// alert("l")
// }
let divMenu=document.getElementById("cMenu")
let ShowVal=document.getElementById("ShowVal")
let display=0;

const showHide=()=>{
    if (display == 1){
        divMenu.style.display='block';
        display=0;
    }else{
        divMenu.style.display='none';
        display=1;
    }
}

const ValGet=(element)=>{
    value = element.innerText
    ShowVal.innerHTML=value
    divMenu.style.display='none';
}