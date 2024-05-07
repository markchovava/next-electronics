"use client";
import axiosClientAPI from "@/api/axiosClientAPI";
import { tokenAuth } from "@/tokens/tokenAuth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"
import { toast, Bounce } from 'react-toastify';




export default function DeliveryAdd() {
    const router = useRouter();
    const [isSubmit, setIsSubmit] = useState(false);
    const [data, setData] = useState({})
    const { getAuthToken } = tokenAuth();
    const config = {
        headers: {
            "Content-Type": "multipart/form-data",
            'Authorization': `Bearer ${getAuthToken()}`, 
        }
    }

    const handleInput = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }
    
    const postData = async () => {
        const formData = {
            name: data?.name,
            price: data?.price,
        }
        try{
            const result = await axiosClientAPI.post(`delivery`, formData, config)
            .then((response) => {
                router.push(`/admin/delivery`);
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
        <div className='mx-auto w-[90%]'>
            <div className='mb-6'>
                <h6 className='font-bold mb-2'>Name</h6>
                <input 
                    name="name"
                    onChange={handleInput}
                    placeholder="Enter name here..."
                    type='text' 
                    className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300'/>
            </div>
            <div className='mb-6'>
                <h6 className='font-bold mb-2'>Price (cents)</h6>
                <input 
                    type='number'
                    name="price"
                    onChange={handleInput}
                    placeholder="Enter Price here..." 
                    className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300'/>
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
