import { baseURL } from "./baseURL"


export async function getUsers(token) {
    const response = await fetch( `${baseURL}user`, 
        { 
            cache: 'no-cache',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`},  
        }, 
    );
    if(!response.ok) {
       throw new Error('failed to fetch Users.')
    }

    return await response.json()

}