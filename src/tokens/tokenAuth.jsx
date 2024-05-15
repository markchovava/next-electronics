"use client";
import {setCookie, deleteCookie } from 'cookies-next';


export const tokenAuthName = 'ELECTRONIC_AUTH_TOKEN';


export const tokenAuth = () => {
    
    const setAuthToken = (token) => {
        if(typeof window !== 'undefined'){
            localStorage.setItem(tokenAuthName, token);
            setCookie(tokenAuthName, token);
        }
    }
    const getAuthToken = () => {
        if(typeof window !== 'undefined'){
            const token =  localStorage.getItem(tokenAuthName);
            return token;
        }
    }
    const removeAuthToken = () => {
        if(typeof window !== 'undefined'){
            localStorage.removeItem(tokenAuthName);
            deleteCookie(tokenAuthName);
        }
    }

    return {
        setAuthToken, 
        getAuthToken,
        removeAuthToken
    }

  }