import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";


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
            <div className='mx-auto w-[90%] flex items-start justify-start pt-[4rem] pb-[5rem]'>
                {/*  */}
                <section className='w-[25%] rounded-lg bg-slate-100 drop-shadow-lg py-8 px-6'>
                    <h6 className='font-extrabold text-[1.5rem] mb-4'>Categories</h6>
                    <ul className='flex flex-col items-start gap-2 px-6 mb-4 font-medium'>
                        <li className='w-[100%] hover:font-bold hover:translate-x-2 transition-all duration-200 ease-in-out'>
                            <Link href='#' className='w-[100%]'>
                                IT
                            </Link>
                        </li>
                        <li className='w-[100%] hover:font-bold hover:translate-x-2 transition-all duration-200 ease-in-out'>
                            <Link href='#' className='w-[100%]'>Security</Link></li>
                        <li className='w-[100%] hover:font-bold hover:translate-x-2 transition-all duration-200 ease-in-out'>
                            <Link href='#' className='w-[100%]'>Softwares</Link></li>
                        <li className='w-[100%] hover:font-bold hover:translate-x-2 transition-all duration-200 ease-in-out'>
                            <Link href='#' className='w-[100%]'>Gadgets</Link></li>
                        <li className='w-[100%] hover:font-bold hover:translate-x-2 transition-all duration-200 ease-in-out'>
                            <Link href='#' className='w-[100%]'>Gifts</Link></li>
                    </ul>
                    <hr className='border-b border-slate-300 mb-4' />
                    <h6 className='font-extrabold text-[1.5rem] mb-4'>Brands</h6>
                    <ul className='flex flex-col items-start gap-2 px-6 font-medium'>
                        <li className='w-[100%] hover:font-bold hover:translate-x-2 transition-all duration-200 ease-in-out'>
                            <Link href='#' className='w-[100%]'>
                                IT
                            </Link>
                        </li>
                        <li className='w-[100%] hover:font-bold hover:translate-x-2 transition-all duration-200 ease-in-out'>
                            <Link href='#' className='w-[100%]'>Security</Link></li>
                        <li className='w-[100%] hover:font-bold hover:translate-x-2 transition-all duration-200 ease-in-out'>
                            <Link href='#' className='w-[100%]'>Softwares</Link></li>
                        <li className='w-[100%] hover:font-bold hover:translate-x-2 transition-all duration-200 ease-in-out'>
                            <Link href='#' className='w-[100%]'>Gadgets</Link></li>
                        <li className='w-[100%] hover:font-bold hover:translate-x-2 transition-all duration-200 ease-in-out'>
                            <Link href='#' className='w-[100%]'>Gifts</Link></li>
                    </ul>
                </section>

                {/* RIGHT */}
                <section className='w-[75%] px-8'>
                    <h6 className='text-[2.5rem] font-extrabold mb-4'>Products</h6>
                    <div className='flex justify-between items-center mb-6'>
                        <div className='flex'>Showing 12 of 120</div>
                        <div className='flex items-center justify-end gap-3'>
                            <button className='group flex items-center justify-center gap-2 text-transparent bg-gradient-to-br bg-clip-text from-orange-500 to-pink-500'>
                                <FaArrowLeftLong className='group-hover:-translate-x-2 duration-200 transition-all ease-in-out text-orange-500' /> 
                                Prev </button>
                            <button className='group flex items-center justify-center gap-2 text-transparent bg-gradient-to-br bg-clip-text from-orange-500 to-pink-500'>
                                Next <FaArrowRightLong className='text-orange-500 group-hover:translate-x-2 duration-200 transition-all ease-in-out' /></button>
                        </div>
                    </div>
                    <div className='w-[100%] h-auto grid grid-cols-3 gap-8 mb-12'>
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
                                    className="w-[55%] rounded-l-xl outline-none bg-white border border-slate-300 h-[3rem] px-3" />
                                    <button className="w-[45%] rounded-r-xl drop-shadow-md bg-gradient-to-br from-orange-400 to-pink-400 hover:bg-gradient-to-br hover:from-pink-400 hover:to-orange-400 text-white h-[3rem]">
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
                                    className="w-[55%] rounded-l-xl outline-none bg-white border border-slate-300 h-[3rem] px-3" />
                                    <button className="w-[45%] rounded-r-xl drop-shadow-md bg-gradient-to-br from-orange-400 to-pink-400 hover:bg-gradient-to-br hover:from-pink-400 hover:to-orange-400 text-white h-[3rem]">
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
                                    className="w-[55%] rounded-l-xl outline-none bg-white border border-slate-300 h-[3rem] px-3" />
                                    <button className="w-[45%] rounded-r-xl drop-shadow-md bg-gradient-to-br from-orange-400 to-pink-400 hover:bg-gradient-to-br hover:from-pink-400 hover:to-orange-400 text-white h-[3rem]">
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
                                    className="w-[55%] rounded-l-xl outline-none bg-white border border-slate-300 h-[3rem] px-3" />
                                    <button className="w-[45%] rounded-r-xl drop-shadow-md bg-gradient-to-br from-orange-400 to-pink-400 hover:bg-gradient-to-br hover:from-pink-400 hover:to-orange-400 text-white h-[3rem]">
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
                                    className="w-[55%] rounded-l-xl outline-none bg-white border border-slate-300 h-[3rem] px-3" />
                                    <button className="w-[45%] rounded-r-xl drop-shadow-md bg-gradient-to-br from-orange-400 to-pink-400 hover:bg-gradient-to-br hover:from-pink-400 hover:to-orange-400 text-white h-[3rem]">
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
                                    className="w-[55%] rounded-l-xl outline-none bg-white border border-slate-300 h-[3rem] px-3" />
                                    <button className="w-[45%] rounded-r-xl drop-shadow-md bg-gradient-to-br from-orange-400 to-pink-400 hover:bg-gradient-to-br hover:from-pink-400 hover:to-orange-400 text-white h-[3rem]">
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
                                    className="w-[55%] rounded-l-xl outline-none bg-white border border-slate-300 h-[3rem] px-3" />
                                    <button className="w-[45%] rounded-r-xl drop-shadow-md bg-gradient-to-br from-orange-400 to-pink-400 hover:bg-gradient-to-br hover:from-pink-400 hover:to-orange-400 text-white h-[3rem]">
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
                                    className="w-[55%] rounded-l-xl outline-none bg-white border border-slate-300 h-[3rem] px-3" />
                                    <button className="w-[45%] rounded-r-xl drop-shadow-md bg-gradient-to-br from-orange-400 to-pink-400 hover:bg-gradient-to-br hover:from-pink-400 hover:to-orange-400 text-white h-[3rem]">
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
                                    className="w-[55%] rounded-l-xl outline-none bg-white border border-slate-300 h-[3rem] px-3" />
                                    <button className="w-[45%] rounded-r-xl drop-shadow-md bg-gradient-to-br from-orange-400 to-pink-400 hover:bg-gradient-to-br hover:from-pink-400 hover:to-orange-400 text-white h-[3rem]">
                                    Add to Cart</button>
                                </div>
                            </div>
                        </div>
                        

                    </div>
                    <div className='flex items-center justify-end gap-3'>
                        <button className='group flex items-center justify-center gap-2 text-transparent bg-gradient-to-br bg-clip-text from-orange-400 to-pink-400'>
                            <FaArrowLeftLong className='group-hover:-translate-x-2 duration-200 transition-all ease-in-out text-orange-400' /> 
                            Prev </button>
                        <button className='group flex items-center justify-center gap-2 text-transparent bg-gradient-to-br bg-clip-text from-orange-400 to-pink-400'>
                            Next <FaArrowRightLong className='text-orange-400 group-hover:translate-x-2 duration-200 transition-all ease-in-out' /></button>
                    </div>
                </section>
            </div>
        </section>
    </div>
  )
}
