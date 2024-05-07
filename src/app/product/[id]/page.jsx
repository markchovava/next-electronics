import Link from 'next/link'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { FaAngleRight } from "react-icons/fa";
import ProductImageView from './components/ProductImageView';
import { getProduct } from '@/api/getProducts';
import ProductView from './components/ProductView';





export default async function page({ params: {id} }) {
    const product = await getProduct(id);


  return (
    <div>
        {/* Bread Crumbs */}
        <section className='w-[100%]'>
            <div className='mx-auto w-[90%] border-b border-slate-200'>
                <ul className='flex items-center justify-start gap-3 px-3 py-2'>
                    <li><Link href='#'>Home</Link></li>
                    <li><FaAngleRight /></li>
                    <li><Link href='#'>Home</Link></li>
                    <li><FaAngleRight /></li>
                    <li><Link href='#'>Home</Link></li>
                </ul>
            </div>
        </section>

        <section className='w-[100%]'>
            <div className='mx-auto w-[90%] flex justify-start items-center pt-[2rem] pb-[3rem]'>
                
                <ProductImageView product={product} />

               <ProductView product={product} />
            </div>
        </section>

       

        <section className="w-[100%]">
          <div className='mx-auto w-[90%] flex justify-between items-center border-t border-slate-200 pt-3 px-3'>  
                <h5 className="text-[2.5rem] font-semibold">
                    Featured Products
                </h5>
                <button className="group flex items-center justify-start gap-1 text-orange-500 hover:text-orange-600">
                    View More <BsArrowRight className="ease-in-out duration-200 transition-all group-hover:translate-x-2" />
                </button>
          </div>
          <div className='mx-auto w-[90%] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 px-3 pt-[2rem] pb-[4rem]'>
            {/*  */}
            <div className="overflow-hidden rounded-xl bg-white drop-shadow-lg">
              <div className="w-[100%] aspect-[5/4] bg-orange-300">Image</div>
              <div className="w-[100%] px-3 py-4">
                <h5 className="font-semibold text-lg mb-2">Product Name Lorem ipsum dolor sit amet. Product Name </h5>
                <div className="w-[100%] flex items-center justify-center font-bold text-xl mb-4">
                  $75.00
                </div>
                <div className="flex items-center justify-start">
                    <input 
                      type="number" 
                      placeholder="9"
                      className="w-[60%] rounded-l-xl outline-none bg-white border border-slate-300 h-[3rem] px-3" />
                    <button className="w-[40%] rounded-r-xl drop-shadow-md bg-gradient-to-br from-orange-400 to-pink-400 hover:bg-gradient-to-br hover:from-pink-400 hover:to-orange-400 text-white h-[3rem]">
                      Add to Cart</button>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="overflow-hidden rounded-xl bg-white drop-shadow-lg">
              <div className="w-[100%] aspect-[5/4] bg-orange-300">Image</div>
              <div className="w-[100%] px-3 py-4">
                <h5 className="font-semibold text-lg mb-2">Product Name Lorem ipsum dolor sit amet. Product Name </h5>
                <div className="w-[100%] flex items-center justify-center font-bold text-xl mb-4">
                  $75.00
                </div>
                <div className="flex items-center justify-start">
                    <input 
                      type="number" 
                      placeholder="9"
                      className="w-[60%] rounded-l-xl outline-none bg-white border border-slate-300 h-[3rem] px-3" />
                    <button className="w-[40%] rounded-r-xl drop-shadow-md bg-gradient-to-br from-orange-400 to-pink-400 hover:bg-gradient-to-br hover:from-pink-400 hover:to-orange-400 text-white h-[3rem]">
                      Add to Cart</button>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="overflow-hidden rounded-xl bg-white drop-shadow-lg">
              <div className="w-[100%] aspect-[5/4] bg-orange-300">Image</div>
              <div className="w-[100%] px-3 py-4">
                <h5 className="font-semibold text-lg mb-2">Product Name Lorem ipsum dolor sit amet. Product Name </h5>
                <div className="w-[100%] flex items-center justify-center font-bold text-xl mb-4">
                  $75.00
                </div>
                <div className="flex items-center justify-start">
                    <input 
                      type="number" 
                      placeholder="9"
                      className="w-[60%] rounded-l-xl outline-none bg-white border border-slate-300 h-[3rem] px-3" />
                    <button className="w-[40%] rounded-r-xl drop-shadow-md bg-gradient-to-br from-orange-400 to-pink-400 hover:bg-gradient-to-br hover:from-pink-400 hover:to-orange-400 text-white h-[3rem]">
                      Add to Cart</button>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="overflow-hidden rounded-xl bg-white drop-shadow-lg">
              <div className="w-[100%] aspect-[5/4] bg-orange-300">Image</div>
              <div className="w-[100%] px-3 py-4">
                <h5 className="font-semibold text-lg mb-2">Product Name Lorem ipsum dolor sit amet. Product Name </h5>
                <div className="w-[100%] flex items-center justify-center font-bold text-xl mb-4">
                  $75.00
                </div>
                <div className="flex items-center justify-start">
                    <input 
                      type="number" 
                      placeholder="9"
                      className="w-[60%] rounded-l-xl outline-none bg-white border border-slate-300 h-[3rem] px-3" />
                    <button className="w-[40%] rounded-r-xl drop-shadow-md bg-gradient-to-br from-orange-400 to-pink-400 hover:bg-gradient-to-br hover:from-pink-400 hover:to-orange-400 text-white h-[3rem]">
                      Add to Cart</button>
                </div>
              </div>
            </div>

          </div>

        </section>

    </div>
  )
}
