"use client";
import {FaSearch } from "react-icons/fa";
import { RxPerson } from "react-icons/rx";
import { IoCartOutline } from "react-icons/io5";
import { MainContextState } from "@/context/MainContext";
import Link from "next/link";
import axios from "axios";
import { baseURL } from "@/api/baseURL";
import { useEffect, useState } from "react";
import { tokenCart } from "@/tokens/tokenCart";
import useSWR from "swr";
import fetcherWeb from "@/swr/fetcherWeb";
import axiosClientAPI from "@/api/axiosClientAPI";
import { tokenRole } from "@/tokens/tokenRole";
import { tokenAuth } from "@/tokens/tokenAuth";
import { useRouter } from "next/navigation";




export default function LogoArea() {
    const router = useRouter();
    const [isLogout, setIsLogout] = useState(false);
    const [isActive, setIsActive] = useState({user: false });
    const { getAuthToken, removeAuthToken } = tokenAuth()
    const { getRoleToken, removeRoleToken } = tokenRole();
    const [data, setData] = useState({});
    const { getCartToken } = tokenCart()
    const { data: cartData, error: cartDataError } = useSWR(`${baseURL}cart-session?cart_session=${getCartToken()}`, fetcherWeb);
    const config = {
        headers: {
            "Content-Type": "multipart/form-data",
            'Authorization': `Bearer ${getAuthToken()}`, 
        }
    }

    /* LOGOUT */
    async function postLogout() {
        try{
            const result = await axiosClientAPI.get(`logout`, config)
            .then((response) => {
                removeAuthToken();
                removeRoleToken();
                router.push(`/login`) 
                setIsLogout(false) 
            
            })
        } catch (error) {
            console.error(`Error: ${error}`)
        } 
    } 

    useEffect(() => { 
        isLogout == true && postLogout();
    }, [isLogout]);

  
    return (
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
                                {!data ? 
                                <h5 className='font-semibold text-lg'>
                                    <span className="animate-pulse w-10 h-10 rounded-full bg-slate-900"></span>
                                </h5>
                                : 
                                <div className='font-semibold text-lg'>{cartData?.data?.quantity}</div>
                                }
                            </div>
                        </div>
                    </Link>
                </section>
                {/* USER */}
                <section className='px-3 py-2 relative'>
                    <div onClick={() => setIsActive({user: !isActive.user})} className='cursor-pointer group flex justify-center items-center gap-2 border-l'>
                        <div className='p-3'>
                            <RxPerson className='text-[3.5rem] text-slate-800 group-hover:text-orange-500 transition-all duration-200 ease-in-out' />
                        </div>
                        <div className='text-slate-800 group-hover:text-orange-500 transition-all duration-200 ease-in-out'>
                            <p>User</p>
                            <h5 className='font-semibold text-lg'>Account</h5>
                        </div>
                    </div>
                    <ul className={`text-white absolute z-[1000] ${isActive.user == true ? 'block' : 'hidden'} drop-shadow-md top-[100%] transition-all ease-in-out duration-150 right-[-0.5rem] w-[10rem] border border-white bg-gradient-to-br from-orange-500 to-pink-500`}>
                        <li className='w-[100%] hover:bg-gradient-to-br hover:from-pink-600 hover:to-orange-600 px-3 py-2'>
                            <Link href='/admin/profile' className=''>Profile</Link>
                        </li>
                        <li className='w-[100%] hover:bg-gradient-to-br hover:from-pink-600 hover:to-orange-600 px-3 py-2'>
                            <Link href='/order-track' className=''>Track Orders</Link>
                        </li>
                        <li className='w-[100%] hover:bg-gradient-to-br hover:from-pink-600 hover:to-orange-600 px-3 py-2'>
                            <Link href='/admin/password' className=''>Password</Link>
                        </li>
                        <li className='w-[100%] hover:bg-gradient-to-br hover:from-pink-600 hover:to-orange-600 px-3 py-2'>
                            <button onClick={() => setIsLogout(true)} className=''>Logout</button>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    </section>
  )
}
