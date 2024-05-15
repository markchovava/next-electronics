"use client"
import { cartInit, cartInitialState, cartReducer } from "@/reducers/CartReducer";
import { productCategoryInit, productCategoryInitialState, productCategoryReducer } from "@/reducers/ProductCategoryReducer";
import { productInit, productInitialState, productReducer } from "@/reducers/ProductReducer"
import { createContext, useContext, useReducer } from "react"


export const MainContext = createContext()


export default function MainContextProvider({ children }) {
    const [productState, productDispatch] = useReducer(productReducer, productInitialState, productInit);
    const [productCategoryState, productCategoryDispatch] = useReducer(productCategoryReducer, productCategoryInitialState, productCategoryInit);
    const [cartState, cartDispatch] = useReducer(cartReducer, cartInitialState, cartInit)


    return (
        <MainContext.Provider value={{ 
            productState, 
            productDispatch,
            productCategoryState, 
            productCategoryDispatch,
            cartState, 
            cartDispatch,
        }}>
        { children }
        </MainContext.Provider>
      )
}


export const MainContextState = () => {
    return useContext(MainContext)
  }
 
