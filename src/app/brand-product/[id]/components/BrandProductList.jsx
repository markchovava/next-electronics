"use client";
import { baseURL } from '@/api/baseURL';
import axios from 'axios';
import Link from 'next/link'
import React, { useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";



export default function BrandProductList({ brand, brandProducts }) {
    const [data, setData] = useState(brandProducts?.data);
    const [brandData, setCategoryData] = useState(brand?.data);
    const [nextURL, setNextURL] = useState(brandProducts?.links?.next);
    const [prevURL, setPrevURL] = useState(brandProducts?.links?.prev);
    const [meta, setMeta] = useState(brandProducts?.meta)

    /* PAGINATION DATA */
    async function paginationHandler(url) {
        console.log('text')
        try{
           const result = await axios.get(url)
           .then((response) => {
              setData(response.data.data)
              setPrevURL(response.data.links.prev)
              setNextURL(response.data.links.next)
              setMeta(response.data.meta)

           })
        } catch (error) {
           console.error(`Error: ${error}`)
        }     
    }


  return (
    <section className='w-[75%] px-8'>
        <h6 className='text-[2.5rem] font-extrabold mb-4'>
            {brandData?.name} Products
        </h6>
        <div className='flex justify-between items-center mb-6'>
            <div className='flex'>Showing {data?.length} of {meta?.total}.</div>
            {/* PAGINATION */}
            <div className='flex items-center justify-end gap-3'>
                {prevURL &&
                    <button
                        onClick={() => paginationHandler(prevURL)}
                        className='group flex items-center justify-center gap-2 text-transparent bg-gradient-to-br bg-clip-text from-orange-500 to-pink-500'>
                        <FaArrowLeftLong className='group-hover:-translate-x-2 duration-200 transition-all ease-in-out text-orange-500' /> 
                        Prev 
                    </button>
                }
                {nextURL &&
                    <button 
                        onClick={() => paginationHandler(nextURL)}
                        className='group flex items-center justify-center gap-2 text-transparent bg-gradient-to-br bg-clip-text from-orange-500 to-pink-500'>
                        Next <FaArrowRightLong className='text-orange-500 group-hover:translate-x-2 duration-200 transition-all ease-in-out' />
                    </button>
                }
            </div>
        </div>
        {/* PRODUCTS */}
        {data?.length > 0 &&
            <div className='w-[100%] h-auto grid grid-cols-3 gap-8 mb-12'>
                {/*  */}
                {data?.map((item, i) => (
                    <div key={i} className="group overflow-hidden rounded-xl bg-white drop-shadow-lg">
                        <div className="w-[100%] aspect-[5/4] overflow-hidden bg-orange-300">
                            <img 
                                src={baseURL + item?.product_images[0]?.image} 
                                className='w-[100%] h-[100%] object-cover group-hover:scale-110 transition-all duration-300 ease-in-out' />
                        </div>
                        <div className="w-[100%] px-3 py-4">
                            <Link href={`/product/${item.id}`} className="hover:text-orange-600">
                                <h5 className="font-semibold text-lg mb-2">
                                { item.name.length > 20 ? item.name.slice(0,20) + '...' : item.name }
                                </h5>
                            </Link>
                            <div className="w-[100%] flex items-center justify-center font-bold text-xl mb-4">
                                {item.price ? '$' + (item.price / 100).toFixed(2) : 'Not Added.'}
                            </div>
                            <div className="flex items-center justify-start">
                                <input 
                                type="number" 
                                placeholder="00"
                                className="w-[55%] rounded-l-xl outline-none bg-white border border-slate-300 h-[3rem] px-3" />
                                <button className="w-[45%] rounded-r-xl drop-shadow-md bg-gradient-to-br from-orange-400 to-pink-400 hover:bg-gradient-to-br hover:from-pink-400 hover:to-orange-400 text-white h-[3rem]">
                                Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        }

        {/* PAGINATION */}
        <div className='flex items-center justify-end gap-3'>
            {prevURL &&
                <button 
                    onClick={() => paginationHandler(prevURL)}
                    className='group flex items-center justify-center gap-2 text-transparent bg-gradient-to-br bg-clip-text from-orange-400 to-pink-400'>
                    <FaArrowLeftLong className='group-hover:-translate-x-2 duration-200 transition-all ease-in-out text-orange-400' /> 
                    Prev 
                </button>
            }
            {nextURL &&
                <button
                    onClick={() => paginationHandler(nextURL)} 
                    className='group flex items-center justify-center gap-2 text-transparent bg-gradient-to-br bg-clip-text from-orange-400 to-pink-400'>
                    Next <FaArrowRightLong className='text-orange-400 group-hover:translate-x-2 duration-200 transition-all ease-in-out' />
                </button>
            }
        </div>
        
    </section>
  )
}
