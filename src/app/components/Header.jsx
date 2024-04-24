"use client";
import { FaMapLocationDot } from "react-icons/fa6";
import {FaSearch, FaPhoneAlt, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { RxPerson } from "react-icons/rx";
import { IoCartOutline } from "react-icons/io5";
import Link from 'next/link';
import MainNavigation from "./MainNavigation";
import AdminNavigation from "./AdminNavigation";


export default function Header() {
    

  return (
    <div>
        <AdminNavigation />
        {/* TOP AREA */}
        <section className='w-[100%] bg-slate-50 drop-shadow-lg'>
            <div className='mx-auto w-[94%] flex items-center justify-between'>
                <div className='w-[40%] flex justify-start'>
                    <div className='border-r border-slate-200 flex items-center justify-start gap-2 py-2 px-3'>
                        <FaMapLocationDot />
                        <span>11 Test GRIVE, Ave. Mabelreign</span>
                    </div>
                    <div className='border-r border-slate-200 flex items-center justify-start gap-2 py-2 px-3'>
                        <FaPhoneAlt />
                        <span>+263 782 210021</span>
                    </div>
                </div>
                <div className='w-[50%] flex justify-end items-center'>
                    <div className='flex items-center justify-center border-l border-slate-200 gap-2 py-2 px-3'>
                        <Link href='#' className="text-slate-950 hover:text-blue-600">
                            <FaFacebookF />
                        </Link>
                        <Link href='#' className="text-slate-950 hover:text-pink-600">
                            <FaInstagram />
                        </Link>
                        <Link href='#' className="text-slate-950 hover:text-green-600">
                            <FaWhatsapp />
                        </Link>
                    </div>
                </div>
            </div>
        </section>

        {/* LOGO AREA */}
        <section className='w-[100%]'>
            <div className='mx-auto w-[94%] h-[7rem] flex items-center justify-between'>
                <div className='px-3 py-2 text-2xl font-bold tracking-wide'>
                    Fortune Shop
                </div>
                <div className='flex items-center justify-end'>
                    {/* SEARCH */}
                    <section className='px-3 py-2'>
                        <div className='flex justify-center items-center'>
                           <input 
                                type='text' 
                                placeholder='Search Product by name...'
                                className='py-3 px-4 w-[30rem] h-[3.5rem] rounded-l-xl border-y border-l border-slate-300 outline-none'/>
                           <button className='group hover:bg-orange-50 duration-150 transition-all ease-in-out flex items-center justify-center px-4 py-3 w-[5rem] h-[3.5rem] border border-slate-300 rounded-r-xl'>
                                <FaSearch className='group-hover:text-orange-500 text-lg text-slate-600' />
                            </button>
                        </div>
                    </section>
                    {/* CART */}
                    <section className='px-3 py-2'>
                        <Link href='/cart'>
                            <div className='group flex justify-center items-center gap-2 border-l'>
                                <div className='p-3'>
                                    <IoCartOutline className='text-[3.5rem] text-slate-800 group-hover:text-orange-500 transition-all duration-200 ease-in-out' />
                                </div>
                                <div className='group-hover:text-orange-500 text-slate-800 transition-all duration-200 ease-in-out'>
                                    <p>Cart</p>
                                    <h5 className='font-semibold text-lg'>$0.00</h5>
                                </div>
                            </div>
                        </Link>
                    </section>
                    {/* USER */}
                    <section className='px-3 py-2'>
                        <div className='group flex justify-center items-center gap-2 border-l'>
                            <div className='p-3'>
                                <RxPerson className='text-[3.5rem] text-slate-800 group-hover:text-orange-500 transition-all duration-200 ease-in-out' />
                            </div>
                            <div className='text-slate-800 group-hover:text-orange-500 transition-all duration-200 ease-in-out'>
                                <p>User</p>
                                <h5 className='font-semibold text-lg'>Account</h5>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>

        {/* NAVIGATION AREA */}
        <MainNavigation />

    </div>
  )
}
