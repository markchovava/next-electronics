"use client";
import axiosClientAPI from '@/api/axiosClientAPI';
import { tokenAuth } from '@/tokens/tokenAuth';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { toast, Bounce } from 'react-toastify';




export default function OrderEdit({ id }) {
    const router = useRouter()
    const [data, setData] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const { getAuthToken } = tokenAuth();
    const config = {
        headers: {
            "Content-Type": "multipart/form-data",
            'Authorization': `Bearer ${getAuthToken()}`, 
        }
    };

    const handleInput = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    async function getData() {
        try{
          const result = await axiosClientAPI.get(`order/${id}`, config)
          .then((response) => {
            setData(response.data.data)
          })
        } catch (error) {
          console.error(`Error: ${error}`)
        }   
      }  

    const postData = async () => {
        const formData = {
            order_id: data.id,
            status: data?.status,
        }
        /*  console.log(data)
        console.log(formData)
        setIsSubmit(false) */
        try{
            const result = await axiosClientAPI.post(`order-status`, formData, config)
            .then((response) => {
                router.push(`/admin/order`);
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
        getData();
    }, []);

    useEffect(() => {
        isSubmit == true && postData();
    }, [isSubmit]);



  return (
    <section className='w-[100%]'>
    <div className='mx-auto w-[90%]'>
        {/* Password */}
        <div className='mb-6'>
            <h6 className='mb-2'>:</h6>
            <select
                name='status'
                type='text'
                onChange={handleInput} 
                placeholder='Enter Status here...'
                className='mb-2 w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300'>
                <option option=''>Select an option.</option>
                <option value='Processing' selected={data.status == 'Processing' && 'selected'}>Processing</option>
                <option value='Dispatched' selected={data.status == 'Dispatched' && 'selected'}>Dispatched</option>
                <option value='Delivered' selected={data.status == 'Delivered' && 'selected'}>Delivered</option>
            </select>
        </div>
        <div className='flex items-center justify-center pb-[4rem]'>
            <button
                onClick={() => setIsSubmit(true)}
                className='px-[8rem] py-5 text-white rounded-lg transition-all duration-200 ease-in-out bg-gradient-to-br from-orange-500 to-pink-500 hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-600'>
                { isSubmit === true ? 'Processing' : 'Submit' }
            </button>
        </div>

    </div>
</section>
  )
}
