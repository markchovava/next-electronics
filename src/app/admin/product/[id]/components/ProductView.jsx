"use client";
import axiosClientAPI from '@/api/axiosClientAPI';
import { baseURL } from '@/api/baseURL';
import Loader from '@/app/components/Loader';
import { tokenAuth } from '@/tokens/tokenAuth';
import React, { useEffect, useState } from 'react'




export default function ProductView({ id }) {
  const [data, setData] = useState();
  const { getAuthToken } = tokenAuth()
  const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getAuthToken()}`
  }};

  /* GET DATA */
  async function getData() {
    try{
      const result = await axiosClientAPI.get(`product/${id}`, config)
      .then((response) => {
        setData(response.data.data)
      })
    } catch (error) {
      console.error(`Error: ${error}`)
    }   
  }  

  useEffect(() => {
    getData()
  }, []);

  if(!data){
    return (
      <Loader />
    )
  }
  
  
    return (
    <section className='w-[100%]'>
        <div className='mx-auto w-[80%] pb-[4rem]'>
        
          <div className='w-[100%] flex items-center justify-start gap-4 mb-4'>
            <div className='w-[20%] font-semibold'>Name:</div>
            <div className='w-[80%]'>{data.name}</div>
          </div>
          {/* CODE */}
          <div className='w-[100%] flex items-center justify-start gap-4 mb-4'>
            <div className='w-[20%] font-semibold'>Code:</div>
            <div className='w-[80%]'>{data.code}</div>
          </div>
         

          <div className='w-[100%] flex items-center justify-start gap-4 mb-4'>
            <div className='w-[20%] font-semibold'>Product Condition:</div>
            <div className='w-[80%]'>{data.condition}</div>
          </div>
          <div className='w-[100%] flex items-center justify-start gap-4 mb-4'>
            <div className='w-[20%] font-semibold'>Product Source:</div>
            <div className='w-[80%]'>{data.source}</div>
          </div>
          <div className='w-[100%] flex items-center justify-start gap-4 mb-4'>
            <div className='w-[20%] font-semibold'>Price:</div>
            <div className='w-[80%]'>{ data.price ? '$' + (data.price / 100).toFixed(2) : 'Not added.'}</div>
          </div>
          {data.brand?.name &&
            <div className='w-[100%] flex items-center justify-start gap-4 mb-4'>
              <div className='w-[20%] font-semibold'>Brand:</div>
              <div className='w-[80%]'>{data.brand.name}</div>
            </div>
          }
          <div className='w-[100%] flex items-center justify-start gap-4 mb-4'>
            <div className='w-[20%] font-semibold'>Product Short Description:</div>
            <div className='w-[80%]'>{data.short_description}</div>
          </div>

          <div className='w-[100%] flex items-center justify-start gap-4 mb-4'>
            <div className='w-[20%] font-semibold'>Description:</div>
            <div className='w-[80%]'>{data.description}</div>
          </div>
          
          {data.user?.name &&
            <div className='w-[100%] flex items-center justify-start gap-4 mb-4'>
              <div className='w-[20%] font-semibold'>Author:</div>
              <div className='w-[80%]'>{data.user.name}</div>
            </div>
          }

          {data.categories?.length > 0 &&
            <div className='w-[100%] flex items-center justify-start gap-4 mb-4'>
              <div className='w-[20%] font-semibold'>Category:</div>
              <div className='w-[80%]'>{data.categories.map((item, i) => (
                  <span key={i} className='pr-2'>{item.name},</span>
              ))}</div>
            </div>
          }

          {data.product_images?.length > 0 && 
          <div className='w-[100%] flex items-center justify-start gap-4 mb-4'>
            <div className='w-[20%] font-semibold'>Images:</div>
            <div className='w-[80%] grid grid-cols-4 gap-6'>
              {data.product_images.map((item, i) => (
                <div key={i} className='w-[100%] aspect-[5/4] bg-slate-100 rounded-lg overflow-hidden drop-shadow-lg'>
                    <img src={ baseURL + item.image } className='w-[100%] h-[100%] object-cover' />
                </div>
              ))}       
            </div>
          </div>
          }

        </div>
    </section>


  )
}
