"use client"
import Link from 'next/link'
import React, { useState } from 'react'



export default function RightNav({ categories, brands}) {
    const [categoryData, setCategoryData] = useState(categories?.data)
    const [brandData, setBrandData] = useState(brands.data);
    
  return (
    <section className='w-[25%] rounded-lg bg-slate-100 drop-shadow-lg py-8 px-6'>
        {categoryData?.length > 0 &&
            <>
                <h6 className='font-extrabold text-[1.5rem] mb-4'>Categories</h6>
                <ul className='flex flex-col items-start gap-2 px-6 mb-4 font-medium'>
                    {categoryData?.map((item, i) => (
                        <li className='w-[100%] hover:font-bold hover:translate-x-2 transition-all duration-200 ease-in-out'>
                            <Link href={`/category/${item.slug}`} className='w-[100%]'>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </>
        }
        <hr className='border-b border-slate-300 mb-4' />
        {brandData.length > 0 &&
            <>
                <h6 className='font-extrabold text-[1.5rem] mb-4'>Brands</h6>
                <ul className='flex flex-col items-start gap-2 px-6 font-medium'>
                    {brandData.map((item, i) => (
                        <li key={i} className='w-[100%] hover:font-bold hover:translate-x-2 transition-all duration-200 ease-in-out'>
                            <Link href={`/brand-product/${item.id}`} className='w-[100%]'>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </>
        }
    </section>
  )
}
