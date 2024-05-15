"use client"

import React, { useEffect, useState } from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


export default function Contact({ appInfo }) {
    const [data, setData] = useState(appInfo?.data);
    const [isSubmit, setIsSubmit] = useState(false)

    const handleInput = () => {
        setData({...data, [e.target.name]: e.target.value})
    }

    const postData = () => {
        formData = {
            email: data.email,
            title: data.title,
            message: data.message,
        }
        console.log(formData)
    }

  return (
    <div>
        <section className={`w-[100%] h-auto pt-[4rem] pb-[4rem] bg-white`}>
            <div className='mx-auto container h-auto w-[90%] lg:flex flex-col lg:flex-row items-start justify-start gap-8 '>
                <div className='w-[100%] lg:h-[35rem] drop-shadow-lg bg-white rounded-md px-4 py-8 mb-4'>
                    <h3 className='font-black text-4xl pb-5'>Our Contact Details</h3>
                    <ul className="pl-3">
                        <li className="flex items-center justify-start gap-2 pb-4">
                            <FaLocationDot className="text-pink-600" />
                            {data.address} 
                        </li>
                        <li className="flex items-center justify-start gap-2 pb-4">
                            <FaPhoneAlt className="text-pink-600" />
                                {data.phone}
                        </li>
                        <li className="flex items-center justify-start gap-2 pb-4">
                            <MdEmail className="text-pink-600" /> 
                            {data.email}
                        </li>
                    </ul>
                </div>
                <div className='w-[100%] lg:h-[35rem] drop-shadow-lg bg-white rounded-md px-4 py-6 mb-4'>
                    <h3 className='font-black text-4xl'>Write to us</h3>
                    <form onSubmit={(e) => e.preventDefault()} className="mt-4">
                        <div className="pb-5"> 
                            <label className="text-sm">Name</label>
                            <input
                                name='name'
                                onChange={handleInput} 
                                className="w-[100%] rounded-md mt-1 border border-slate-300 py-3 px-4 outline-none"  type="text" />
                        </div>
                        <div className="pb-5">
                            <label className="text-sm">Email</label>
                            <input 
                                name='email'
                                onChange={handleInput}
                                className="w-[100%] rounded-md mt-1 border border-slate-300 py-3 px-4 outline-none" type="text" />
                        </div>
                        <div className="pb-5">
                            <label className="text-sm">Message</label>
                            <textarea 
                                name='message'
                                onChange={handleInput}
                                className="w-[100%] rounded-md h-[8rem] mt-1 border border-slate-200 py-3 px-4 outline-none"></textarea>
                        </div>
                        <div className="">
                            <button 
                            onClick={() => setIsSubmit(true) } className="w-[100%] rounded-md py-5 flex items-center justify-center bg-gradient-to-br text-white transition-all duration-100 from-pink-400 to-red-500 hover:from-pink-500 hover:to-red-600">
                                Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>  
    </div>
  )
}
