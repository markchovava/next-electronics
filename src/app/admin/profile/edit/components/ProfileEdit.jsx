"use client";
import axiosClientAPI from '@/api/axiosClientAPI';
import Loader from '@/app/components/Loader';
import { tokenAuth } from '@/tokens/tokenAuth';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { toast, Bounce } from 'react-toastify';




export default function ProfileEdit() {
    const router = useRouter();
    const [data, setData] = useState();
    const [isSubmit, setIsSubmit] = useState(false)
  const { getAuthToken } = tokenAuth()
  const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getAuthToken()}`
  }};

  const handleInput = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  /* GET DATA */
  async function getData() {
    try{
      const result = await axiosClientAPI.get(`auth`, config)
      .then((response) => {
        console.log(response.data.data)
        setData(response.data.data)
      })
    } catch (error) {
      console.error(`Error: ${error}`)
    }   
  }  

  /* GET DATA */
  async function postData() {
    const formData = {
        fname: data.fname,
        lname: data.lname,
        email: data.email,
        phone: data.phone,
        address: data.address,
        dob: data.dob,
        gender: data.gender,
    };
    try{
      const result = await axiosClientAPI.post(`auth`, formData, config)
      .then((response) => {
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
        router.push('/admin/profile')
        setIsSubmit(false)
      })
    } catch (error) {
      console.error(`Error: ${error}`)
    }   
  }  

  useEffect(() => {
    getData()
  }, []);


  useEffect(() => {
    isSubmit == true && postData();
  }, [isSubmit]);

  if(!data){
    return (
      <Loader />
    )
  }
    
  return (
    <section className='w-[100%]'>
         <div className='mx-auto w-[90%]'>
            {/* NAME */}
            <div className='mb-6 flex justify-start gap-6 items-center'>
                <div className='w-[50%]'>
                    <h6 className='mb-2'>First Name:</h6>
                    <input 
                        type='text' 
                        name='fname'
                        value={data.fname}
                        onChange={handleInput}
                        placeholder='Enter First Name here...'
                        className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300'/>
                </div>
                <div className='w-[50%]'>
                    <h6 className='mb-2'>Last Name:</h6>
                    <input 
                        type='text' 
                        name='lname'
                        value={data.lname}
                        onChange={handleInput}
                        placeholder='Enter Last Name here...'
                        className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300'/>
                </div>
            </div>
            {/* EMAIL */}
            <div className='mb-6'>
                <h6 className='mb-2'>Email:</h6>
                <input 
                    type='text' 
                    name='email'
                    value={data.email}
                    onChange={handleInput}
                    placeholder="Enter Email here..."
                    className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300' />
            </div>
            {/* Phone */}
            <div className='mb-6'>
                <h6 className='mb-2'>Phone:</h6>
                <input 
                    type='text'
                    name='phone'
                    value={data.phone}
                    onChange={handleInput} 
                    placeholder="+263 782 100 200"
                    className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300' />
            </div>
            {/* dob*/}
            <div className='mb-6'>
                <h6 className='mb-2'>Date of Birth:</h6>
                <input 
                    type='text'
                    name='dob'
                    value={data.dob}
                    onChange={handleInput} 
                    placeholder="04/02/2000"
                    className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300' />
            </div>
            {/* dob*/}
            <div className='mb-6'>
                <h6 className='mb-2'>Gender:</h6>
                <select
                    name='gender'
                    onChange={handleInput} 
                    placeholder="Select an option."
                    className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300'>
                    <option>Select an option.</option>
                    <option value='Male' selected={data.gender === 'Male' && 'selected'}>Male</option>
                    <option value='Female' selected={data.gender === 'Female' && 'selected'}>Female</option>
                </select>
            </div>
            {/* Address */}
            <div className='mb-6'>
                <h6 className='mb-2'>Address:</h6>
                <input 
                    type='text' 
                    name='address'
                    value={data.address}
                    onChange={handleInput} 
                    placeholder="Enter Address here..."
                    className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300'/>
            </div>
            {/* Role */}
            <div className='mb-6'>
                <h6 className='mb-2'>Role:</h6>
                <select 
                    name='role_level'
                    onChange={handleInput} 
                    value={data.role_level}
                    placeholder="Enter Address here..."
                    className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300'>
                    <option>Select an option.</option>
                    <option value={1} selected={data.role_level == 1 && 'selected'}>Admin</option>
                    <option value={2} selected={data.role_level == 2 && 'selected'}>Manager</option>
                    <option value={3} selected={data.role_level == 3 && 'selected'}>Operator</option>
                    <option value={4} selected={data.role_level == 4 && 'selected'}>Customer</option>
                </select>
            </div>
            {/* Submit */}
            <div className='flex items-center justify-center pb-[4rem]'>
                <button 
                    onClick={() => setIsSubmit(true)}
                    className='px-[8rem] py-5 text-white rounded-lg transition-all duration-200 ease-in-out bg-gradient-to-br from-orange-500 to-pink-500 hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-600'>
                    {isSubmit == true ? 'Processing' : 'Submit' }
                </button>
            </div>
        </div>
    </section>
  )
}
