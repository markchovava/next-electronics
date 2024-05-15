"use client";
import { baseURL } from "@/api/baseURL";
import { MainContextState } from "@/context/MainContext";
import { tokenCart } from "@/tokens/tokenCart";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Bounce, toast } from "react-toastify";



export default function ProductView({ product }) {
  const router = useRouter();
  const {cartState, cartDispatch} = MainContextState();
  const [isSubmit, setIsSubmit] = useState(false);
  const [data, setData] = useState(product?.data);
  const {getCartToken, setCartToken} = tokenCart()


  const postData = async () => {
    const formData = {...cartState.product, cart_session: getCartToken()};
    try{
        const result = await axios.post(`${baseURL}cart`, formData)
          .then((response) => {
            if(response?.data?.data?.cart_session !== getCartToken()){
              setCartToken(response?.data?.data?.cart_session)
            }
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
            router.push('/cart');
            setTimeout(() => {
              window.location.reload();
            }, 1500);
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
    <div className='w-[50%] px-4 py-8'>
        <div className='flex items-center justify-start gap-5 mb-[1rem]'>
            <span className=''>Category:</span>
            <span className='font-bold'>
              {data.categories.map((item, i) => (
                item.name + ', '
              ))}
            </span>
        </div>
        <div className='font-bold text-[2rem] mb-[1rem]'>
          {data.name}
        </div>
        <div className='font-extrabold text-[3.5rem] text-orange-500'>
          {'$' + (data.price / 100).toFixed(2)}
        </div>
        {data.brand?.name &&
          <div className='flex items-center justify-start gap-5 mb-[1rem]'>
              <span className=''>Brand:</span>
              <span className='font-bold'>{data.brand?.name}</span>
          </div>
        }
       
        <div className='mb-[1rem]'>
            <h6 className='font-bold mb-[0.5rem]'>Description</h6>
            <p className=''>
                {data?.description}
            </p>
        </div>
        <div className='mb-[1rem] flex items-center justify-start'>
            <input 
                type='number'
                name="quantity"
                onChange={(e) => setData({...data, quantity: e.target.value})} 
                placeholder='0' 
                className='px-4 py-3 outline-none border border-slate-300 rounded-l-lg' 
            />
            <button
              onClick={() => {
                setIsSubmit(true);
                cartDispatch({
                  type: 'ADD_PRODUCT', 
                  payload: {
                    product_id: data.id,
                    name: data.name,
                    price: data.price,
                    quantity: Number(data.quantity),
                    image: data.product_images[0].image,
                  }
                }); 
              }} 
              className='py-3 px-4 border-r border-y border-slate-300 rounded-r-lg text-white bg-gradient-to-br from-orange-500 to-pink-500 hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-500 '>
                {isSubmit == true ? 'Processing' : 'Add to Cart' }
            </button>
        </div>
    </div>
  )
}
