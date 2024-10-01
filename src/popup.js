export function popup(message = "Operation Successful", duration = 6000, backgroundColor = "bg-red-700") {
    let tost=document.getElementById("tostBox")
        let div=document.createElement('div');
        div.setAttribute("class","w-96 h-20 bg-white drop-shadow-md mx-3 my-0 bg-red-700");
        div.innerHTML= message;
        tost.appendChild(div);
        setTimeout(()=>{
            div.remove()
        },6000)
}

