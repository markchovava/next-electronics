import { baseURL } from "./baseURL"


export async function getBrands() {
    const response = await fetch( `${baseURL}brand`, {cache: 'no-cache'} );
    if(!response.ok) {
       throw new Error('failed to fetch Brands.')
    }
    return await response.json()
}

export async function getBrand(id) {
    const response = await fetch( `${baseURL}brand/${id}`, {cache: 'no-cache'} );
    if(!response.ok) {
       throw new Error('failed to fetch Brands.')
    }
    return await response.json()
}


export async function getBrandProducts(id) {
    const response = await fetch( `${baseURL}brand-products/${id}`, {cache: 'no-cache'} );
    if(!response.ok) {
       throw new Error('failed to fetch Brands.')
    }
    return await response.json()
}

export async function getBrandsAll() {
    const response = await fetch( `${baseURL}brand-all`, {cache: 'no-cache'} );
    if(!response.ok) {
       throw new Error('failed to fetch Brands.')
    }
    return await response.json()
}

