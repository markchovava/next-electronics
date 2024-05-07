import { baseURL } from "./baseURL"


export async function getAppInfo() {
    const response = await fetch( `${baseURL}app-info`, 
        { 
            cache: 'no-store',
            /* headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`},   */
        }, 
    );
    if(!response.ok) {
       throw new Error('failed to fetch App Info.')
    }

    return await response.json()

}


