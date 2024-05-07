"use client";
import axiosClientAPI from '@/api/axiosClientAPI';
import Loader from '@/app/components/Loader';
import { tokenAuth } from '@/tokens/tokenAuth';
import React, { useEffect, useState } from 'react'



export default function UserView({ id }) {
  const [data, setData] = useState({});
  const { getAuthToken } = tokenAuth()
    const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getAuthToken()}`
    }};
  
  /* GET DATA */
  async function getData() {
    try{
      const result = await axiosClientAPI.get(`user/${id}`, config)
      .then((response) => {
        setData(response.data.data)
      })
    } catch (error) {
      console.error(`Error: ${error}`)
    }   
  }    

  useEffect(() => {
    getData();
  }, []);

  if(Object.keys(data).length == 0){
    return (
        <Loader />
    )
}

  return (
    <section className='w-[100%]'>
        <div className='mx-auto w-[90%] pb-[4rem]'>
          
          {/* NAME */}
          <div className='w-[100%] flex items-center justify-start gap-4 mb-4'>
            <div className='w-[20%] font-semibold'>Name:</div>
            <div className='w-[80%]'>Testing</div>
          </div>
          {/* EMAIL */}
          <div className='w-[100%] flex items-center justify-start gap-4 mb-4'>
            <div className='w-[20%] font-semibold'>Email:</div>
            <div className='w-[80%]'>{data.email}</div>
          </div>
          {/* PHONE */}
          <div className='w-[100%] flex items-center justify-start gap-4 mb-4'>
            <div className='w-[20%] font-semibold'>Phone:</div>
            <div className='w-[80%]'>{data.phone}</div>
          </div>
          {/* PASSWORD */}
          <div className='w-[100%] flex items-center justify-start gap-4 mb-4'>
            <div className='w-[20%] font-semibold'>Password:</div>
            <div className='w-[80%]'>{data.code}</div>
          </div>
          {/* GENDER */}
          <div className='w-[100%] flex items-center justify-start gap-4 mb-4'>
            <div className='w-[20%] font-semibold'>Gender:</div>
            <div className='w-[80%]'>{data.gender}</div>
          </div>
          {/* GENDER */}
          <div className='w-[100%] flex items-center justify-start gap-4 mb-4'>
            <div className='w-[20%] font-semibold'>Date Of Birth:</div>
            <div className='w-[80%]'>{data.dob}</div>
          </div>
          {/* WEBSITE */}
          <div className='w-[100%] flex items-center justify-start gap-4 mb-4'>
            <div className='w-[20%] font-semibold'>Address:</div>
            <div className='w-[80%]'>{data.address}</div>
          </div>
        </div>
    </section>
  )
}
