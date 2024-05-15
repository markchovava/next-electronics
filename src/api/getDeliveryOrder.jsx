import { baseURL } from "./baseURL";



export async function getDeliveryOrder(token) {
    const response = await fetch( `${baseURL}delivery-order/view`, 
        { 
            cache: 'no-store',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`},
        }, 
    );
    if(!response.ok) {
       throw new Error('failed to fetch App Info.')
    }

    return await response.json()

}