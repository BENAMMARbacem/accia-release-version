 const BASE_URL="http://localhost:8000";


 export async function getAllPosts(){
    try{
        const response = await fetch(`${BASE_URL}/posts`);
        if(!response.ok){
            throw new Error("response error");
        }
        const data = await response.json();
        return data;
    }
    catch(error){
        console.log(error)
        return []
    }
}


export async function getpostById(id){
    try{
        const response = await fetch(`http://localhost:8000/posts/${id}`);
        if(!response.ok){
            throw new Error("response error");
        }
        const data = await response.json();
        return data;
    }
    catch(error){
        console.log(error)
        return []
    }
}

export async function getAllRapports(){
    try{
        const response = await fetch(`${BASE_URL}/rapports`);
        if(!response.ok){
            throw new Error("response error");
        }
        const data = await response.json();
        return data;
    }
    catch(error){
        console.log(error)
        return []
    }
}
export async function getAllEvents(){
    try{
        const response = await fetch(`${BASE_URL}/events`);
        if(!response.ok){
            throw new Error("response error");
        }
        const data = await response.json();
        return data;
    }
    catch(error){
        console.log(error)
        return []
    }
}

export function getEventById(id){
    return fetch(`${BASE_URL}/events/${id}`).then(response=>response.json());
}


