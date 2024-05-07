"use client"

import axiosClientAPI from "@/api/axiosClientAPI";
import { tokenAuth } from "@/tokens/tokenAuth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast, Bounce } from "react-toastify";


export default function RoleAdd() {
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
            level: data?.level,
        }
        try{
            const result = await axiosClientAPI.post(`role`, formData, config)
            .then((response) => {
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
              router.push(`/admin/role`);
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
                  <h6 className='font-bold mb-2'>Name</h6>
                  <input type='text'
                    name="name"
                    onChange={handleInput}
                    placeholder="Enter name here..."
                    className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300'/>
              </div>
              <div className='mb-6'>
                  <h6 className='font-bold mb-2'>Level</h6>
                  <select
                    name="level"
                    onChange={handleInput}
                    placeholder="Enter name here..."
                    className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300'>
                    <option value=''>Select an option.</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                  </select>
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
