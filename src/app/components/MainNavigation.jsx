"use client";
import { FaAngleDown } from "react-icons/fa";
import Link from 'next/link';
import { useState } from "react";


export default function MainNavigation() {
    const [isActive, setIsActive] = useState({
        it: false,
        security: false,
        software: false,
        gadget: false,
        gift: false,
    });

  return (
    <section className='w-[100%] bg-gradient-to-br from-orange-500 to-pink-500 drop-shadow-lg relative z-20'>
            <div className='mx-auto w-[94%]'>
                <ul className='flex items-center justify-center gap-3 h-[4rem]'>
                    <li className='px-3 py-2 text-slate-100'>
                        <Link href='/' className='flex items-center justify-center gap-2'>Home </Link>
                    </li>
                    <li className='px-3 py-2 text-slate-100'>
                        <Link href='/about' className='flex items-center justify-center gap-2'>About Us </Link>
                    </li>
                    <li className='px-3 py-2 text-slate-100'>
                        <Link href='/product' className='flex items-center justify-center gap-2'>All Products</Link>
                    </li>
                    {/* IT */}
                    <li className='relative px-3 py-2 text-slate-100'>
                        <button 
                            onClick={() => setIsActive({it: !isActive.it})}
                            className='flex items-center justify-center gap-2'>
                            IT <FaAngleDown />
                        </button>
                        <ul className={`absolute z-100 ${isActive.it == true ? 'block' : 'hidden'} drop-shadow-md top-[3rem] transition-all ease-in-out duration-150 left-[-0.5rem]  w-[10rem] border border-white bg-gradient-to-br from-orange-500 to-pink-500`}>
                            <li className='w-[100%] hover:bg-gradient-to-br hover:from-pink-600 hover:to-orange-600 px-3 py-2'>
                                <Link href='/category' className=''>Desktop</Link>
                            </li>
                            <li className='w-[100%] hover:bg-gradient-to-br hover:from-pink-600 hover:to-orange-600 px-3 py-2'>
                                <Link href='/category' className=''>Desktop</Link>
                            </li>
                        </ul>
                    </li>
                    {/* SECURITY */}
                    <li className='relative px-3 py-2 text-slate-100'>
                        <button 
                            onClick={() => setIsActive({security: !isActive.security})}
                            className='flex items-center justify-center gap-2'>
                            Security <FaAngleDown />
                        </button>
                        <ul className={`absolute z-100 ${isActive.security == true ? 'block' : 'hidden'} drop-shadow-md top-[3rem] transition-all ease-in-out duration-150 left-[-0.5rem]  w-[10rem] border border-white bg-gradient-to-br from-orange-500 to-pink-500`}>
                            <li className='w-[100%] hover:bg-gradient-to-br hover:from-pink-600 hover:to-orange-600 px-3 py-2'>
                                <Link href='/category' className=''>Desktop</Link>
                            </li>
                            <li className='w-[100%] hover:bg-gradient-to-br hover:from-pink-600 hover:to-orange-600 px-3 py-2'>
                                <Link href='/category' className=''>Desktop</Link>
                            </li>
                        </ul>
                    </li>
                    {/* SOFTWARES */}
                    <li className='relative px-3 py-2 text-slate-100'>
                        <button 
                            onClick={() => setIsActive({software: !isActive.software})}
                            className='flex items-center justify-center gap-2'>
                            Softwares <FaAngleDown />
                        </button>
                        <ul className={`absolute z-100 ${isActive.software == true ? 'block' : 'hidden'} drop-shadow-md top-[3rem] transition-all ease-in-out duration-150 left-[-0.5rem]  w-[10rem] border border-white bg-gradient-to-br from-orange-500 to-pink-500`}>
                            <li className='w-[100%] hover:bg-gradient-to-br hover:from-pink-600 hover:to-orange-600 px-3 py-2'>
                                <Link href='/category' className=''>Desktop</Link>
                            </li>
                            <li className='w-[100%] hover:bg-gradient-to-br hover:from-pink-600 hover:to-orange-600  px-3 py-2'>
                                <Link href='/category' className=''>Desktop</Link>
                            </li>
                        </ul>
                    </li>
                    {/* GADGETS */}
                    <li className='relative px-3 py-2 text-slate-100'>
                        <button 
                            onClick={() => setIsActive({gadget: !isActive.gadget})}
                            className='flex items-center justify-center gap-2'>
                            Gadgets <FaAngleDown />
                        </button>
                        <ul className={`absolute z-100 ${isActive.gadget == true ? 'block' : 'hidden'} drop-shadow-md top-[3rem] transition-all ease-in-out duration-150 left-[-0.5rem]  w-[10rem] border border-white bg-gradient-to-br from-orange-500 to-pink-500`}>
                            <li className='w-[100%] hover:bg-gradient-to-br hover:from-pink-600 hover:to-orange-600  px-3 py-2'>
                                <Link href='/category' className=''>Desktop</Link>
                            </li>
                            <li className='w-[100%] hover:bg-gradient-to-br hover:from-pink-600 hover:to-orange-600 px-3 py-2'>
                                <Link href='/category' className=''>Desktop</Link>
                            </li>
                        </ul>
                    </li>
                    {/* GIFTS */}
                    <li className='relative px-3 py-2 text-slate-100'>
                        <button 
                            onClick={() => setIsActive({gift: !isActive.gift})}
                            className='flex items-center justify-center gap-2'>
                            Gifts <FaAngleDown />
                        </button>
                        <ul className={`absolute z-100 ${isActive.gift == true ? 'block' : 'hidden'} drop-shadow-md top-[3rem] transition-all ease-in-out duration-150 left-[-0.5rem]  w-[10rem] border border-white bg-gradient-to-br from-orange-500 to-pink-500`}>
                            <li className='w-[100%] hover:bg-gradient-to-br hover:from-pink-600 hover:to-orange-600 px-3 py-2'>
                                <Link href='#' className=''>Desktop</Link>
                            </li>
                            <li className='w-[100%] hover:bg-gradient-to-br hover:from-pink-600 hover:to-orange-600 px-3 py-2'>
                                <Link href='#' className=''>Desktop</Link>
                            </li>
                        </ul>
                    </li>
                    {/* CONTACTS */}
                    <li className='px-3 py-2 text-slate-100'>
                        <Link href='/contact' className='flex items-center justify-center gap-2'>Contact Us</Link>
                    </li>
                </ul>
            </div>
        </section>
  )
}
