"use client";

import { baseURL } from "@/api/baseURL";
import { useState } from "react";



export default function AppInfoView({ appInfo }) {
  console.log(appInfo)
  const [data, setData] = useState({
    name: appInfo?.data?.name,
    phone: appInfo?.data?.phone,
    website: appInfo?.data?.website,
    email: appInfo?.data?.email,
    image: appInfo?.data?.image,
    address: appInfo?.data?.address,
  });

  return (
    <section className='w-[100%]'>
        <div className='mx-auto w-[80%] pb-[4rem]'>
          
          {/* NAME */}
          <div className='w-[100%] flex items-center justify-start gap-4 mb-4'>
            <div className='w-[20%] font-semibold'>image:</div>
            <div className='w-[80%]'>
              <div className='w-[50%] rounded-lg aspect-[5/3] overflow-hidden bg-slate-50 drop-shadow-lg'>
                <img src={baseURL + data?.image} className='w-[100%] h-[100%] object-cover' alt='Logo' /></div>
            </div>
          </div>
          {/* NAME */}
          <div className='w-[100%] flex items-center justify-start gap-4 mb-4'>
            <div className='w-[20%] font-semibold'>Name:</div>
            <div className='w-[80%]'>{data?.name}</div>
          </div>
          {/* EMAIL */}
          <div className='w-[100%] flex items-center justify-start gap-4 mb-4'>
            <div className='w-[20%] font-semibold'>Email:</div>
            <div className='w-[80%]'>{data?.email}</div>
          </div>
          {/* EMAIL */}
          <div className='w-[100%] flex items-center justify-start gap-4 mb-4'>
            <div className='w-[20%] font-semibold'>Address:</div>
            <div className='w-[80%]'>{data?.address}</div>
          </div>
          {/* PHONE */}
          <div className='w-[100%] flex items-center justify-start gap-4 mb-4'>
            <div className='w-[20%] font-semibold'>Phone:</div>
            <div className='w-[80%]'>{data?.phone}</div>
          </div>
          {/* WEBSITE */}
          <div className='w-[100%] flex items-center justify-start gap-4 mb-4'>
            <div className='w-[20%] font-semibold'>Website:</div>
            <div className='w-[80%]'>{data?.website}</div>
          </div>
        </div>
    </section>
  )
}
