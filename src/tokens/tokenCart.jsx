"use client";
import {setCookie, deleteCookie } from 'cookies-next';


export const tokenCart = () => {
    
    const setCartToken = (token) => {
        if(typeof window !== 'undefined'){
            localStorage.setItem('ELECTRONIC_CART_TOKEN', token);
            setCookie('ELECTRONIC_CART_TOKEN', token);
        }
    }
    const getCartToken = () => {
        if(typeof window !== 'undefined'){
            const token =  localStorage.getItem('ELECTRONIC_CART_TOKEN');
            return token;
        }
    }
    const removeCartToken = () => {
        if(typeof window !== 'undefined'){
            localStorage.removeItem('ELECTRONIC_CART_TOKEN');
            deleteCookie('ELECTRONIC_CART_TOKEN');
        }
    }

    return {
        setCartToken, 
        getCartToken,
        removeCartToken
    }

  }