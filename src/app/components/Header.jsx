"use client";
import { FaMapLocationDot } from "react-icons/fa6";
import {FaSearch, FaPhoneAlt, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { RxPerson } from "react-icons/rx";
import { IoCartOutline } from "react-icons/io5";
import Link from 'next/link';
import MainNavigation from "./MainNavigation";
import AdminNavigation from "./AdminNavigation";
import LogoArea from "./LogoArea";


export default function Header({ appInfo }) {
    

  return (
    <div>
        <AdminNavigation />
        {/* TOP AREA */}
        <section className='w-[100%] bg-slate-50 drop-shadow-lg'>
            <div className='mx-auto w-[94%] flex items-center justify-between'>
                <div className='w-[40%] flex justify-start'>
                    <div className='border-r border-slate-200 flex items-center justify-start gap-2 py-2 px-3'>
                        <FaMapLocationDot />
                        <span>{appInfo?.data?.address}</span>
                    </div>
                    <div className='border-r border-slate-200 flex items-center justify-start gap-2 py-2 px-3'>
                        <FaPhoneAlt />
                        <span>{appInfo?.data?.phone}</span>
                    </div>
                </div>
                <div className='w-[50%] flex justify-end items-center'>
                    <div className='flex items-center justify-center border-l border-slate-200 gap-2 py-2 px-3'>
                        <Link 
                            href={appInfo?.data?.facebook ? appInfo?.data?.facebook : '/#'} 
                            className="text-slate-950 hover:text-blue-600">
                            <FaFacebookF />
                        </Link>
                        <Link href={appInfo?.data?.instagram ? appInfo?.data?.instagram : '/#'} 
                            className="text-slate-950 hover:text-pink-600">
                            <FaInstagram />
                        </Link>
                        <Link href={appInfo?.data?.whatsapp ? appInfo?.data?.whatsapp : '/#'} 
                            className="text-slate-950 hover:text-green-600">
                            <FaWhatsapp />
                        </Link>
                    </div>
                </div>
            </div>
        </section>

        {/* LOGO AREA */}
        <LogoArea />

        {/* NAVIGATION AREA */}
        <MainNavigation />

    </div>
  )
}
