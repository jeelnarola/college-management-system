export const DeletAPI = (id) => {
    if(id){
        fetch(`http://localhost:3000/Course/${id}`,{
            method:"DELETE"
        })
        .then((res)=> res.json())
        .then((done)=>{
            console.log("SuccessFully DELETE....")
        })
    }
}
