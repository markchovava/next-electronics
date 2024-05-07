import { baseURL } from "./baseURL"


export async function getRoles() {
    const response = await fetch( `${baseURL}role`, {cache: 'no-cache'} );
    if(!response.ok) {
       throw new Error('failed to fetch Users.')
    }

    return await response.json()

}