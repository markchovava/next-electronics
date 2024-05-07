"use client";
import {setCookie, deleteCookie } from 'cookies-next';


export const tokenRole = () => {
    
    const setRoleToken = (token) => {
        if(typeof window !== 'undefined'){
            localStorage.setItem('ELECTRONIC_ROLE_TOKEN', token);
            setCookie('ELECTRONIC_ROLE_TOKEN', token);
        }
    }
    const getRoleToken = () => {
        if(typeof window !== 'undefined'){
            const token =  localStorage.getItem('ELECTRONIC_ROLE_TOKEN');
            return token;
        }
    }
    const removeRoleToken = () => {
        if(typeof window !== 'undefined'){
            localStorage.removeItem('ELECTRONIC_ROLE_TOKEN');
            deleteCookie('ELECTRONIC_ROLE_TOKEN');
        }
    }

    return {
        setRoleToken, 
        getRoleToken,
        removeRoleToken
    }

  }