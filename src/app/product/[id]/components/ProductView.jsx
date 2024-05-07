"use client";
import { useState } from "react";



export default function ProductView({ product }) {
  const [isSubmit, setIsSubmit] = useState(false);
  const [data, setData] = useState(product?.data);

  



  return (
    <div className='w-[50%] px-4 py-8'>
        <div className='flex items-center justify-start gap-5 mb-[1rem]'>
            <span className=''>Category:</span>
            <span className='font-bold'>
              {data.categories.map((item, i) => (
                item.name + ', '
              ))}
            </span>
        </div>
        <div className='font-bold text-[2rem] mb-[1rem]'>
          {data.name}
        </div>
        <div className='font-extrabold text-[3.5rem] text-orange-500'>
          {'$' + (data.price / 100).toFixed(2)}
        </div>
        {data.brand?.name &&
          <div className='flex items-center justify-start gap-5 mb-[1rem]'>
              <span className=''>Brand:</span>
              <span className='font-bold'>{data.brand?.name}</span>
          </div>
        }
       
        <div className='mb-[1rem]'>
            <h6 className='font-bold mb-[0.5rem]'>Description</h6>
            <p className=''>
                {data?.description}
            </p>
        </div>
        <div className='mb-[1rem] flex items-center justify-start'>
            <input 
                type='number'
                name="quantity"
                onChange={(e) => setData({...data, quantity: e.target.value})} 
                placeholder='0' 
                className='px-4 py-3 outline-none border border-slate-300 rounded-l-lg' 
            />
            <button
              onClick={() => setIsSubmit(true) } className='py-3 px-4 border-r border-y border-slate-300 rounded-r-lg text-white bg-gradient-to-br from-orange-500 to-pink-500 hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-500 '>
                {isSubmit ? 'Processing' : 'Add to Cart' }
            </button>
        </div>
    </div>
  )
}
