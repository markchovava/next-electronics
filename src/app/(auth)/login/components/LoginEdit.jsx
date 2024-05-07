"use client"
import { baseURL } from '@/api/baseURL';
import { tokenAuth } from '@/tokens/tokenAuth';
import { tokenRole } from '@/tokens/tokenRole';
import axios from 'axios';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { toast, Bounce } from 'react-toastify';



export default function LoginEdit() {
  const { setAuthToken } = tokenAuth();
  const { setRoleToken } = tokenRole();
  const router = useRouter();
  const [isSubmit, setIsSubmit] = useState(false);
  const [data, setData] = useState({});
  const [errMsg, setErrMsg] = useState({});
  const config = { 
    headers: { "Content-Type": "application/json" } 
  };

  const handleInput = (e) => {
    setData({
      ...data, 
      [e.target.name]: e.target.value 
    });
  }

  async function postData(){
    if(!data.email){
      setErrMsg({email: 'Email is required.'})
      setIsSubmit(false)
      return;
    }
    if(!data.password){
      setErrMsg({ password: 'Password is required.'})
      setIsSubmit(false)
      return;
    }
    /*  */
    const formData = {
      email: data.email,
      password: data.password,
    }

    try{
      const result = await axios.post(`${baseURL}login`, formData, config)
      .then((response) => {
        if(response.data.status == 0){
          setErrMsg({email: response.data.message});
          setIsSubmit(false);
          return;
        }
        if(response.data.status == 1){
          setErrMsg({password: response.data.message});
          setIsSubmit(false);
          return;
        }
        /* STORING ON LOCAL PC */
        setAuthToken(response.data.auth_token)
        setRoleToken(response.data.role_level)

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
        router.push('/'); 
        setIsSubmit(false);    
      
      })
      } catch (error) {
          console.error(`Error: ${error}`);
          setIsSubmit(false); 
      }

  }

  useEffect(() => {
    isSubmit == true && postData();
  }, [isSubmit])

  return (
    <section className='w-[100%]'>
      <div className='w-[50%] mx-auto'>
   
    <div className='flex items-center justify-between gap-2 mb-[1.2rem]'>
        <hr className='border-slate-700 w-[50%]' />
        <span className='text-slate-300'>OR</span>
        <hr className='border-slate-700 w-[50%]' />
    </div>

    <div className='w-[100%] mb-[1.5rem]'> 
        <Link href='/register' className='underline hover:no-underline text-orange-500 hover:text-pink-500'>Create a new Account</Link>
    </div>

        {/* NAME */}
        <div className='mb-6'>
              <h6 className='mb-2'>Email:</h6>
              <input 
                type='text' 
                name='email'
                onChange={handleInput}
                placeholder='Enter Email here...'
                className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300'/>
              {errMsg.email && 
                <p className='text-red-500'>{errMsg.email}</p>
              }
            </div>
            {/* Confirmation Password */}
            <div className='mb-6'>
                <h6 className='mb-2'>Password:</h6>
                <input 
                  type='password'
                  name='password'
                  onChange={handleInput}
                  placeholder='Enter Password here..' 
                  className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300'/>
                {errMsg.password && 
                <p className='text-red-500'>{errMsg.password}</p>
              }
            </div>
           
            
            <div className='flex items-center justify-center pb-[4rem]'>
              <button
                onClick={() => setIsSubmit(true)}
                className='px-[8rem] py-5 text-white rounded-lg transition-all duration-200 ease-in-out bg-gradient-to-br from-orange-500 to-pink-500 hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-600'>
                { isSubmit == true ? 'Processing' : 'Submit' }
              </button>
            </div>

      </div>
    </section>
  )
}
