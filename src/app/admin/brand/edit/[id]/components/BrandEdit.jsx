"use client";
import axiosClientAPI from "@/api/axiosClientAPI";
import { baseURL } from "@/api/baseURL";
import Loader from "@/app/components/Loader";
import { tokenAuth } from "@/tokens/tokenAuth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast, Bounce } from 'react-toastify';



export default function BrandEdit({ id }) {
  const router = useRouter();
  const [data, setData] = useState();
  const [image, setImage] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  const { getAuthToken } = tokenAuth();
  const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getAuthToken()}`
    }};

  /* GET DATA */
  async function getData() {
    try{
      const result = await axiosClientAPI.get(`brand/${id}`, config)
      .then((response) => {
        console.log(response.data.data)
        setData(response.data.data)
        setImage(baseURL + response.data.data.image)
      })
    } catch (error) {
      console.error(`Error: ${error}`)
    }   
  }    

  const postData = async () => {
    const formData = {
        name: data?.name,
        image: data?.image,
    }
    try{
        const result = await axiosClientAPI.post(`brand/${id}`, formData, config)
        .then((response) => {
            router.push(`/admin/brand/${id}`);
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
  }, [])

  useEffect(() => {
      isSubmit === true && postData();
  }, [isSubmit]);

  if(!data){
    return (
      <Loader />
    )
  }



  return (
    <section className='w-[100%]'>
        <div className='mx-auto w-[80%]'>
            <div className='mb-6'>
                <h6 className='font-bold mb-2'>Name</h6>
                <input 
                  type='text' 
                  name="name"
                  value={data.name}
                  onChange={(e) => setData({...data, name: e.target.value})}
                  placeholder="Enter Name here..."
                  className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300'/>
            </div>
            <div className='mb-8'>
                <h6 className='font-bold mb-2'>Image:</h6>
                <input type='file' 
                  name="image"
                  onChange={(e) => {
                    setData({...data, image: e.target.files[0]})
                    setImage(URL.createObjectURL(e.target.files[0]))
                  }}
                  className='rounded-lg outline-none px-4 py-3 border border-slate-300 mb-3'/>
                <div className="bg-slate-100 drop-shadow-lg rounded-lg overflow-hidden w-[40%] aspect-[5/2]">
                  <img src={image} className="w-[100%] object-cover" alt='Image' />
                </div>
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