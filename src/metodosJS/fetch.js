const apiURL = 'http://localhost:3000/api/task'

//POST
const postData = async (objTarea)=>{
    try {
        const response = await fetch(apiURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objTarea)
        })
    
        const data = await response.json()
        return data
} catch (error) {
    console.log(error);
    return null
}
}
export {postData}
//GET
    const getData = async ()=>{
        try {
            const response = await fetch (apiURL)
            const data = await response.json()
            return data
        } catch (error) {
            console.error(error);
        }
    }
export {getData}

//PUT
const putData = async (obj)=>{ //actualizar el estado según el ID de la tarea
    try {
        const response = await fetch (apiURL+obj.id,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
                },
            body: JSON.stringify(obj)
        })
    
        const data = await response.json()
        return data
} catch (e) {
    console.log(e);
    return null
}
}
export {putData}

//DELETE
const deleteData = async (id)=>{
    try {
        const response = await fetch(apiURL+id,{
            method: 'DELTE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const data = await response.json()
        return data
        
    } catch (error) {
        console.log(error);
        return null
    }
}

export {deleteData}