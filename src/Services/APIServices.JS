
const FixedUrl='http://localhost:3000'
export const PostAPI = (url,data) => {
    console.log("url",url," ","data",data)
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
        console.log("data2",data)
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

