"use client"

export const productInit = (productInitialState) => {
    const result = {
        ...productInitialState, 
        products: [],
        images: [
            {id:1},
            {id:2},
            {id:3},
            {id:4},
            {id:5}
        ],
    }
    return result
}

export const productInitialState = {
    images: [],
    products: []
};


export const productReducer = (state, action) => {
    switch(action.type){
        case 'ADD_IMAGE':
            return {
                ...state,
                images: state.images.filter((item) => {
                    if(item.id === action.payload.id) {
                        item.image = action.payload.image;
                        return item;
                    } else{
                        return item;
                    }
                })
            } 
        case 'ADD_IMAGE_PRIORITY':
            return {
                ...state,
                images: state.images.filter((item) => {
                    if(item.id === action.payload.id) {
                        item.priority = Number(action.payload.priority);
                        return item;
                    } else{
                        return item;
                    }
                })
            } 
        case 'ADD_PRODUCTS':
            return {
                ...state,
                products: action.payload,
            }
        case 'ADD_PRODUCT_QUANTITY':
            return {
                ...state,
                products: state.products.filter((item) => {
                    if(item.id === action.payload.id) {
                        item.quantity = Number(action.payload.quantity);
                        return item;
                    } else{
                        return item;
                    }
                })
            }
     
        default:
           return state;
   }
}