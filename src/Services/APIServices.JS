
const FixedUrl='http://localhost:3000'
export const PostAPI = (url,data) => {
    if(data){
        fetch(`${FixedUrl}${url}`,{
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(data)
        })
    }
}

export const GetAPI = (url)=>{
    return fetch(`${FixedUrl}${url}`)
    .then((res)=>res.json())
    .then((data)=>{
        return data;
    })
}

export const DeletAPI = (url,id) => {
    if(id){
        fetch(`${FixedUrl}${url}/${id}`,{
            method:"DELETE"
        })
        .then((res)=> res.json())
        .then((done)=>{
            console.log("SuccessFully DELETE....")
        })
    }
}

export const EditAPI = (url,id,data)=>{
    if(url,data){
        fetch(`${FixedUrl}${url}/${id}`,{
            method:"PATCH",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(data)
        })
    }
}

export const DropDownMenu = (data) =>{
    document.getElementById("DropDwon").innerHTML=''
  if(!data || data.length === 0 ){
    let setOption1 = document.createElement('option')
    setOption1.innerHTML = 'No Course Available...'
    document.getElementById("DropDwon").append(setOption1)
  }
  else{
  data.map((ele)=>{
      let setOption1 = document.createElement('option')
      setOption1.innerHTML = ''
      let setOption = document.createElement('option')
      setOption.innerHTML = ele.Cname
      document.getElementById("DropDwon").append(setOption1,setOption)
    })
  }
}

