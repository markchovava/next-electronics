"use client";
import { baseURL } from '@/api/baseURL';
import React, { useState } from 'react';




export default function ProductImageView({ product }) {
    const [images, setImages] = useState(product?.data?.product_images)
    const [activeImg, setActiveImg] = useState(product?.data?.product_images[0]?.image);

    
  return (
    <div className='w-[50%] px-4 py-8'>
           <div className='group w-[100%] aspect-[4/3] overflow-hidden rounded-lg bg-slate-50 drop-shadow-lg'>
            <img src={baseURL + activeImg} className='w-[100%] h-[100%] object-cover ease-in-out group-hover:scale-110 transition-all duration-300' />
           </div>

           <div className='w-[100%] flex items-center justify-start gap-4 py-4'>
                {images.map((item, i) => (
                    <div className='w-[7rem] rounded-lg aspect-[4/3] overflow-hidden bg-red-400'>
                        <img 
                            src={baseURL + item.image} 
                            className='w-[100%] h-[100%] hover:scale-110 transition-all duration-300 object-cover drop-shadow-md' 
                            onClick={() => setActiveImg(item.image)}
                        />
                    </div>

                ))}
              
           </div>
    </div>
    
  )
}
