"use client"

export const productCategoryInit = (productCategoryInitialState) => {
    const result = {
        ...productCategoryInitialState, 
        items: [],
    }
    return result
}

export const productCategoryInitialState = {
    items: [],
};


export const productCategoryReducer = (state, action) => {
    switch(action.type){ 
        case 'ADD_CATEGORY':
            const existingItem = state.items.find((item) => item.category_id === action.payload.category_id);
                if (!existingItem) {
                    state.items.push(action.payload);
                } 
                return {
                    ...state,
                    items: state.items
    
                }
        case 'REMOVE_ITEM':
            let newState = [...state.items];
            newState.pop();
            return {
                ...state,
                items: newState,
            };
        case 'EMPTY_ITEM':
            return {
                ...state,
                items: [],
            };
        default:
           return state;
   }
}