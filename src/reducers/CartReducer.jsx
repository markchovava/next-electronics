"use client"

export const cartInit = (cartInitialState) => {
    const result = {
        ...cartInitialState, 
        items: [],
        product: {},
        cart: {}
    }
    return result
}

export const cartInitialState = {
    items: [],
    product: {},
    cart: {},
};


export const cartReducer = (state, action) => {
    switch(action.type){
        case 'ADD_PRODUCT':
            return {
                ...state,
                product: action.payload,
            } 
        case 'ADD_ITEMS':
            return {
                ...state,
                items: action.payload,
            } 
        case 'ADD_CART':
            return {
                ...state,
                cart: action.payload,
            }
        default:
           return state;
   }
}