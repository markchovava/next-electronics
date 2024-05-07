"use client"

import axiosClientAPI from "@/api/axiosClientAPI";
import { tokenAuth } from "@/tokens/tokenAuth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast, Bounce } from "react-toastify";




export default function CategoryAdd() {
    const router = useRouter();
    const [data, setData] = useState();
    const [isSubmit, setIsSubmit] = useState(false);
    const { getAuthToken } = tokenAuth();
    const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getAuthToken()}`
    }};
    const handleInput = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    const postData = async () => {
        const formData = {
            name: data?.name,
            slug: data?.slug,
            description: data?.description,
        }
        try{
            const result = await axiosClientAPI.post(`category`, formData, config)
            .then((response) => {
                router.push(`/admin/category`);
                toast.success(response.data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
                setIsSubmit(false)
                }
            );    
            } catch (error) {
                console.error(`Error: ${error}`);
                console.error(`Error Message: ${error.message}`);
                console.error(`Error Response: ${error.response}`);
                setIsSubmit(false);
            }

    }

    useEffect(() => {
        isSubmit === true && postData();
    }, [isSubmit]);


    
    return (
      <section className='w-[100%]'>
          <div className='mx-auto w-[80%]'>
              <div className='mb-6'>
                  <h6 className='font-bold mb-2'>Name:</h6>
                  <input type='text'
                    name="name"
                    onChange={handleInput}
                    placeholder="Enter name here..."
                    className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300'/>
              </div>
              <div className='mb-6'>
                  <h6 className='font-bold mb-2'>Slug:</h6>
                  <input type='text'
                    name="slug"
                    onChange={handleInput}
                    placeholder="Enter Slug here..."
                    className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300'/>
              </div>
              <div className='mb-6'>
                  <h6 className='font-bold mb-2'>Description:</h6>
                  <textarea 
                    name="description"
                    onChange={handleInput}
                    placeholder="Enter Description here..."
                    className='w-[100%] h-[8rem] rounded-lg outline-none px-4 py-3 border border-slate-300'></textarea>
              </div>
              <div className='flex items-center justify-center pb-[4rem]'>
                  <button 
                    onClick={() => setIsSubmit(true)}
                    className='px-[8rem] py-5 text-white rounded-lg transition-all duration-200 ease-in-out bg-gradient-to-br from-orange-500 to-pink-500 hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-600'>
                    {isSubmit === true ? 'Processing' : 'Submit'}
                  </button>
              </div>
          </div>
      </section>
    )
  }