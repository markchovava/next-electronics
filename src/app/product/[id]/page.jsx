import Link from 'next/link'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { FaAngleRight } from "react-icons/fa";

export default function page() {
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
                <div className='w-[50%] px-4 py-8'>
                    <div className='w-[100%] aspect-[4/3] rounded-lg bg-blue-300'></div>
                    <div className='w-[100%] flex items-center justify-start gap-4 py-4'>
                        <div className='w-[7rem] rounded-lg aspect-[4/3] bg-red-400'></div>
                        <div className='w-[7rem] rounded-lg aspect-[4/3] bg-red-400'></div>
                        <div className='w-[7rem] rounded-lg aspect-[4/3] bg-red-400'></div>
                        <div className='w-[7rem] rounded-lg aspect-[4/3] bg-red-400'></div>
                        <div className='w-[7rem] rounded-lg aspect-[4/3] bg-red-400'></div>
                    </div>
                </div>
                <div className='w-[50%] px-4 py-8'>
                    <h5 className='font-bold text-[2.5rem] mb-[1rem]'>Lorem ipsum dolor sit amet.</h5>
                    <div className='font-extrabold text-[4rem] text-orange-500'>$20.00</div>
                    <div className='flex items-center justify-start gap-5 mb-[1rem]'>
                        <span className=''>Brand:</span>
                        <span className='font-bold'>Brand</span>
                    </div>
                    <div className='flex items-center justify-start gap-5 mb-[1rem]'>
                        <span className=''>Category:</span>
                        <span className='font-bold'>One, 2, Three, Four</span>
                    </div>
                    <div className='mb-[1rem]'>
                        <h6 className='font-bold mb-[0.5rem]'>Description</h6>
                        <p className=''>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fugiat quas 
                            quod sit aliquam et explicabo eaque ut eos nostrum, labore soluta? Animi quam laborum 
                            ipsam tempore, quibusdam culpa corporis! Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Consequuntur fugiat quas quod sit aliquam et explicabo eaque ut eos 
                            nostrum, labore soluta? Animi quam laborum ipsam tempore, quibusdam culpa corporis!
                        </p>
                    </div>
                    <div className='mb-[1rem] flex items-center justify-start'>
                        <input 
                            type='number' 
                            placeholder='0' 
                            className='px-4 py-3 outline-none border border-slate-300 rounded-l-lg' 
                        />
                        <button className='py-3 px-4 border-r border-y border-slate-300 rounded-r-lg text-white bg-gradient-to-br from-orange-500 to-pink-500 hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-500 '>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <section className='w-[100%]'>
            <div className='mx-auto w-[90%] flex justify-between items-center border-t border-slate-200 pt-3 px-3'>  
                <h5 className="text-[2.5rem] font-semibold">
                    Featured Products
                </h5>
                <button className="group flex items-center justify-start gap-1 text-orange-500 hover:text-orange-600">
                    View More <BsArrowRight className="ease-in-out duration-200 transition-all group-hover:translate-x-2" />
                </button>
            </div>
        </section>

        <section className="w-[100%]">
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
