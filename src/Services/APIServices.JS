
const FixedUrl = 'http://localhost:3000'
export const PostAPI = (url, data) => {
    if (data) {
        fetch(`${FixedUrl}${url}`, {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
    }
}

export const GetAPI = (url) => {
    console.log("url", `${FixedUrl}${url}`)
    return fetch(`${FixedUrl}${url}`)
        .then((res) => res.json())
        .then((data) => {
            return data;
        })
}

export const DeletAPI = (url, id) => {
    if (id) {
        fetch(`${FixedUrl}${url}/${id}`, {
            method: "DELETE"
        })
            .then((res) => res.json())
            .then((done) => {
                console.log("SuccessFully DELETE....")
            })
    }
}

export const EditAPI = (url, id, data) => {
    if (url, data) {
        fetch(`${FixedUrl}${url}/${id}`, {
            method: "PATCH",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data) 
        })
    }
}

export const DropDownMenu = (data) => {
    console.log("data1", data)
    document.getElementById("DropDwon").innerHTML = ''
    if (!data || data.length === 0) {
        let setOption1 = document.createElement('option')
        setOption1.innerHTML = 'No Course Available...'
        document.getElementById("DropDwon").append(setOption1)
    }
    else {
        let blankOptionAdded = false;
        data.map((ele) => {
            if (!blankOptionAdded) {
                let setOption1 = document.createElement('option')
                setOption1.innerHTML = ''
                document.getElementById("DropDwon").append(setOption1)
                blankOptionAdded = true; // Ensure it's only added once
            }

            let setOption = document.createElement('option')
            setOption.innerHTML = ele.Course;
            setOption.value = ele.Course;
            document.getElementById("DropDwon").append(setOption)
        })
    }
}

export const DropDwonStaff = (data) => {
    document.getElementById("DropDwonStaff").innerHTML = ''
    
    if (!data || data.length === 0) {
        let setOption1 = document.createElement('option')
        setOption1.innerHTML = 'No Staff Available...'
        document.getElementById("DropDwonStaff").append(setOption1)
    }
    else {
        let blankOptionAdded = false;
        data.map((ele) => {

            if (!blankOptionAdded) {
                let setOption1 = document.createElement('option')
                setOption1.innerHTML = ''
                document.getElementById("DropDwonStaff").append(setOption1)
                blankOptionAdded = true; // Ensure it's only added once
            }

            let setOption = document.createElement('option')
            setOption.innerHTML = ele.name;
            setOption.value = ele.name;
            document.getElementById("DropDwonStaff").append(setOption)
        })
    }
}

