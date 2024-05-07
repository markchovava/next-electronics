import { baseURL } from "./baseURL"


export async function getCategories() {
    const response = await fetch( `${baseURL}category`, 
        { cache: 'no-cache', }, 
    );
    if(!response.ok) {
       throw new Error('Failed to fetch Categories.')
    }
    return await response.json()
}

export async function getCategoriesAll() {
    const response = await fetch( `${baseURL}category-all`, 
        { cache: 'no-cache', }, 
    );
    if(!response.ok) {
       throw new Error('Failed to fetch Categories.')
    }
    return await response.json()
}


export async function getCategory(id) {
    const response = await fetch( `${baseURL}category/${id}`, 
        { cache: 'no-cache', }, 
    );
    if(!response.ok) {
       throw new Error('Failed to fetch Category.')
    }
    return await response.json()
}

export async function getCategoryProducts(id) {
    const response = await fetch( `${baseURL}category-products/${id}`, 
        { cache: 'no-cache', }, 
    );
    if(!response.ok) {
       throw new Error('Failed to fetch Category.')
    }
    return await response.json()
}


export async function getCategoryFeatured() {
    const response = await fetch( `${baseURL}category-featured`, 
        { cache: 'no-cache', }, 
    );
    if(!response.ok) {
       throw new Error('Failed to fetch Featured Categories.')
    }
    return await response.json()
}


export async function getCategoryTopSelling() {
    const response = await fetch( `${baseURL}category-top-selling`, 
        { cache: 'no-cache', }, 
    );
    if(!response.ok) {
       throw new Error('Failed to fetch Top Selling Categories.')
    }

    return await response.json()

}