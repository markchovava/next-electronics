"use client"
import { productCategoryInit, productCategoryInitialState, productCategoryReducer } from "@/reducers/ProductCategoryReducer";
import { productInit, productInitialState, productReducer } from "@/reducers/ProductReducer"
import { createContext, useContext, useReducer } from "react"


export const MainContext = createContext()


export default function MainContextProvider({ children }) {
    const [productState, productDispatch] = useReducer(productReducer, productInitialState, productInit);
    const [productCategoryState, productCategoryDispatch] = useReducer(productCategoryReducer, productCategoryInitialState, productCategoryInit);

    return (
        <MainContext.Provider value={{ 
            productState, 
            productDispatch,
            productCategoryState, 
            productCategoryDispatch
        }}>
        { children }
        </MainContext.Provider>
      )
}


export const MainContextState = () => {
    return useContext(MainContext)
  }
 
