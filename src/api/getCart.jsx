import { baseURL } from "./baseURL";



export async function getCartSession() {
    const response = await fetch( `${baseURL}cart-session`, 
        { cache: 'no-cache', }, 
    );
    if(!response.ok) {
       throw new Error('Failed to fetch Featured Categories.')
    }
    return await response.json()
}
