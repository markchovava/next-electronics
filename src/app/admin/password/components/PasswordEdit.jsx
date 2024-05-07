"use client";
import axiosClientAPI from '@/api/axiosClientAPI';
import { tokenAuth } from '@/tokens/tokenAuth';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { toast, Bounce } from 'react-toastify';



export default function PasswordEdit() {
    const router = useRouter()
    const [data, setData] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [msgErr, setMsgErr] = useState({});
    const { getAuthToken } = tokenAuth();
    const config = {
        headers: {
            "Content-Type": "multipart/form-data",
            'Authorization': `Bearer ${getAuthToken()}`, 
        }
    };

    const handleInput = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    const postData = async () => {
        if(!data.password){
            setMsgErr({password: 'Password is required.'})
            setIsSubmit(false);
            return;
        }
        if(!data.password_confirmation){
            setMsgErr({password_confirmation: 'Password Confirmation is required.'})
            setIsSubmit(false);
            return;
        }
        if(data.password !== data.password_confirmation){
            setMsgErr({password_confirmation: 'Password do not match.'})
            setIsSubmit(false);
            return;
        }

        const formData = {
            password: data?.password,
        }
        try{
            const result = await axiosClientAPI.post(`password`, formData, config)
            .then((response) => {
                router.push(`/admin/profile`);
                toast.success(response.data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
                setIsSubmit(false)
                }
            );    
            } catch (error) {
                console.error(`Error: ${error}`);
                console.error(`Error Message: ${error.message}`);
                console.error(`Error Response: ${error.response}`);
                setIsSubmit(false);
            }

    }

    useEffect(() => {
        isSubmit == true && postData();
    }, [isSubmit]);


  return (
    <section className='w-[100%]'>
        <div className='mx-auto w-[90%]'>
            {/* Password */}
            <div className='mb-6'>
                <h6 className='mb-2'>Password:</h6>
                <input 
                    type='password'
                    name='password'
                    onChange={handleInput} 
                    placeholder='Enter Password here...'
                    className='mb-2 w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300' />
                {msgErr.password &&
                    <p className='text-red-500'>{msgErr.password}</p>
                }
            </div>
            {/* Confirmation Password */}
            <div className='mb-6'>
                <h6 className='mb-2'>Confirm Password:</h6>
                <input 
                    type='password'
                    name='password_confirmation'
                    onChange={handleInput}  
                    placeholder='Enter Password Confirmation here...'
                    className='mb-2 w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300' />
                {msgErr.password_confirmation &&
                    <p className='text-red-500'>{msgErr.password_confirmation}</p>
                }
            </div>
            <div className='flex items-center justify-center pb-[4rem]'>
                <button
                    onClick={() => setIsSubmit(true)}
                    className='px-[8rem] py-5 text-white rounded-lg transition-all duration-200 ease-in-out bg-gradient-to-br from-orange-500 to-pink-500 hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-600'>
                    { isSubmit === true ? 'Processing' : 'Submit' }
                </button>
            </div>

        </div>
    </section>
  )
}
