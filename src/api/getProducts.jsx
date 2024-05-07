import { baseURL } from "./baseURL"


export async function getProducts() {
    const response = await fetch( `${baseURL}product`, {cache: 'no-cache'} );
    if(!response.ok) {
       throw new Error('Failed to fetch Products.')
    }

    return await response.json()
}


export async function getProduct(id) {
    const response = await fetch( `${baseURL}product/${id}`, {cache: 'no-cache'} );
    if(!response.ok) {
       throw new Error('Failed to fetch Product.')
    }
    return await response.json()
}