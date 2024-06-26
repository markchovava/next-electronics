"use client"
import axiosClientAPI from "@/api/axiosClientAPI";
import { tokenAuth } from "@/tokens/tokenAuth";
import { tokenRole } from "@/tokens/tokenRole";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";



export default function AdminNavigation() {
    const router = useRouter();
    const { getAuthToken, removeAuthToken } = tokenAuth()
    const { getRoleToken, removeRoleToken } = tokenRole();
    const [isLogout, setIsLogout] = useState(false);
    const [isActive, setIsActive] = useState({
        setting: false,
        product: false,
        brand: false,
        category: false,
        delivery: false,
        order: false,
        user: false,
        profile: false,
    });

    console.log(getRoleToken())

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
    <section className="w-[100%] text-white bg-gradient-to-br from-orange-500 to-pink-500">
        <div className="w-[94%] mx-auto px-3 py-2 flex justify-between items-center">
            {/* ADMINISTRATION LINKS */}
            <ul className="flex items-center justify-start gap-4">
                {/* SETTINGS */}
                <li className="relative z-20">
                    <button 
                        onClick={() => setIsActive({setting: !isActive.setting})} 
                        className="flex items-center justify-start gap-2">
                        Settings <FaAngleDown /> 
                    </button>
                    <ul className={`absolute z-100 ${isActive.setting == true ? 'block' : 'hidden'} drop-shadow-md top-[130%] transition-all ease-in-out duration-150 left-[-0.5rem]  w-[10rem] border border-white bg-gradient-to-br from-orange-500 to-pink-500`}>
                        <li className='w-[100%] hover:bg-gradient-to-br hover:from-pink-600 hover:to-orange-600 px-3 py-2'>
                            <Link href='/admin/app-info' className=''>App Info</Link>
                        </li>
                        <li className='w-[100%] hover:bg-gradient-to-br hover:from-pink-600 hover:to-orange-600 px-3 py-2'>
                            <Link href='/admin/role' className=''>Roles</Link>
                        </li>
                    </ul>
                </li>
                {/* USERS */}
                <li className="relative z-20">
                    <button 
                        onClick={() => setIsActive({user: !isActive.user})} 
                        className="flex items-center justify-start gap-2">
                        Users <FaAngleDown /> </button>
                    <ul className={`absolute z-100 ${isActive.user == true ? 'block' : 'hidden'} drop-shadow-md top-[130%] transition-all ease-in-out duration-150 left-[-0.5rem]  w-[10rem] border border-white bg-gradient-to-br from-orange-500 to-pink-500`}>
                        <li className='w-[100%] hover:bg-gradient-to-br hover:from-pink-600 hover:to-orange-600 px-3 py-2'>
                            <Link href='/admin/user/add' className=''>Add Users</Link>
                        </li>
                        <li className='w-[100%] hover:bg-gradient-to-br hover:from-pink-600 hover:to-orange-600 px-3 py-2'>
                            <Link href='/admin/user' className=''>User List</Link>
                        </li>
                    </ul>
                </li>
                {/* PRODUCTS */}
                <li className="relative z-20">
                    <button 
                        onClick={() => setIsActive({product: !isActive.product})} 
                        className="flex items-center justify-start gap-2">
                        Products <FaAngleDown /> </button>
                    <ul className={`absolute z-100 ${isActive.product == true ? 'block' : 'hidden'} drop-shadow-md top-[130%] transition-all ease-in-out duration-150 left-[-0.5rem]  w-[10rem] border border-white bg-gradient-to-br from-orange-500 to-pink-500`}>
                        <li className='w-[100%] hover:bg-gradient-to-br hover:from-pink-600 hover:to-orange-600 px-3 py-2'>
                            <Link href='/admin/product/add' className=''>Add Products</Link>
                        </li>
                        <li className='w-[100%] hover:bg-gradient-to-br hover:from-pink-600 hover:to-orange-600 px-3 py-2'>
                            <Link href='/admin/product' className=''>Products List</Link>
                        </li>
                    </ul>
                </li>
                {/* BRAND */}
                <li className="relative z-20">
                    <button 
                        onClick={() => setIsActive({brand: !isActive.brand})} 
                        className="flex items-center justify-start gap-2">
                        Brands <FaAngleDown /> </button>
                    <ul className={`absolute z-100 ${isActive.brand == true ? 'block' : 'hidden'} drop-shadow-md top-[130%] transition-all ease-in-out duration-150 left-[-0.5rem]  w-[10rem] border border-white bg-gradient-to-br from-orange-500 to-pink-500`}>
                        <li className='w-[100%] hover:bg-gradient-to-br hover:from-pink-600 hover:to-orange-600 px-3 py-2'>
                            <Link href='/admin/brand/add' className=''>Add Brand</Link>
                        </li>
                        <li className='w-[100%] hover:bg-gradient-to-br hover:from-pink-600 hover:to-orange-600 px-3 py-2'>
                            <Link href='/admin/brand' className=''>Brand List</Link>
                        </li>
                    </ul>
                </li>
                {/* CATEGORY */}
                <li className="relative z-20">
                    <button
                        onClick={() => setIsActive({category: !isActive.category})} 
                        className="flex items-center justify-start gap-2">
                        Categories <FaAngleDown /> </button> 
                    <ul className={`absolute z-100 ${isActive.category == true ? 'block' : 'hidden'} drop-shadow-md top-[130%] transition-all ease-in-out duration-150 left-[-0.5rem]  w-[10rem] border border-white bg-gradient-to-br from-orange-500 to-pink-500`}>
                        <li className='w-[100%] hover:bg-gradient-to-br hover:from-pink-600 hover:to-orange-600 px-3 py-2'>
                            <Link href='/admin/category/add' className=''>Add Category</Link>
                        </li>
                        <li className='w-[100%] hover:bg-gradient-to-br hover:from-pink-600 hover:to-orange-600 px-3 py-2'>
                            <Link href='/admin/category' className=''>Categories List</Link>
                        </li>
                    </ul>
                </li>
                {/* DELIVERY */}
                <li className="relative z-20">
                    <button
                        onClick={() => setIsActive({delivery: !isActive.delivery})} 
                        className="flex items-center justify-start gap-2">
                        Deliveries <FaAngleDown /> </button> 
                    <ul className={`absolute z-100 ${isActive.delivery == true ? 'block' : 'hidden'} drop-shadow-md top-[130%] transition-all ease-in-out duration-150 left-[-0.5rem]  w-[10rem] border border-white bg-gradient-to-br from-orange-500 to-pink-500`}>
                        <li className='w-[100%] hover:bg-gradient-to-br hover:from-pink-600 hover:to-orange-600 px-3 py-2'>
                            <Link href='/admin/delivery' className=''>Add Delivery</Link>
                        </li>
                        <li className='w-[100%] hover:bg-gradient-to-br hover:from-pink-600 hover:to-orange-600 px-3 py-2'>
                            <Link href='/admin/delivery' className=''>Delivery List</Link>
                        </li>
                    </ul>
                </li>
                {/* ORDER */}
                <li className="relative z-20">
                    <button
                        onClick={() => setIsActive({order: !isActive.order})} 
                        className="flex items-center justify-start gap-2">
                        Orders <FaAngleDown /> 
                    </button> 
                    <ul className={`absolute z-100 ${isActive.order == true ? 'block' : 'hidden'} drop-shadow-md top-[130%] transition-all ease-in-out duration-150 left-[-0.5rem]  w-[10rem] border border-white bg-gradient-to-br from-orange-500 to-pink-500`}>
                        <li className='w-[100%] hover:bg-gradient-to-br hover:from-pink-600 hover:to-orange-600 px-3 py-2'>
                            <Link href='/admin/order' className=''>Order List</Link>
                        </li>
                    </ul>
                </li>
            </ul>
            
            <ul className="flex items-center justify-start gap-4">
                {/* PROFILE */}
                <li className="relative z-20">
                    <button
                        onClick={() => setIsActive({profile: !isActive.profile})} 
                        className="flex items-center justify-start gap-2">
                        Profile <FaAngleDown /> </button> 
                    <ul className={`absolute z-120 ${isActive.profile == true ? 'block' : 'hidden'} drop-shadow-md top-[130%] transition-all ease-in-out duration-150 right-[-0.5rem]  w-[10rem] border border-white bg-gradient-to-br from-orange-500 to-pink-500`}>
                        <li className='w-[100%] hover:bg-gradient-to-br hover:from-pink-600 hover:to-orange-600 px-3 py-2'>
                            <Link href='/admin/profile' className=''>Profile</Link>
                        </li>
                        <li className='w-[100%] hover:bg-gradient-to-br hover:from-pink-600 hover:to-orange-600 px-3 py-2'>
                            <Link href='/admin/password' className=''>Password</Link>
                        </li>
                        <li className='w-[100%] hover:bg-gradient-to-br hover:from-pink-600 hover:to-orange-600 px-3 py-2'>
                            <button onClick={() => setIsLogout(true)} className=''>Logout</button>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </section>
  )
}
