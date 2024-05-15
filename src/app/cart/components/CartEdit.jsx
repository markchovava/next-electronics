"use client";
import { baseURL } from '@/api/baseURL';
import Loader from '@/app/components/Loader';
import { tokenAuth } from '@/tokens/tokenAuth';
import { tokenCart } from '@/tokens/tokenCart';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { MdDeleteForever } from 'react-icons/md';
import { Bounce, toast } from 'react-toastify';




export default function CartEdit() {
    const router = useRouter();
    const [cart, setCart] = useState();
    const [items, setItems] = useState();
    const {getCartToken, setCartToken} = tokenCart()
    const { getAuthToken } = tokenAuth()
    const [isSubmit, setIsSubmit] = useState(false);
    
    /* GET DATA */
  async function getData() {
    try{
      const result = await axios.get(`${baseURL}cart-view?cart_session=${getCartToken()}`)
      .then((response) => {
        setCart(response.data.cart)
        setItems(response.data.items)
      })
    } catch (error) {
      console.error(`Error: ${error}`)
    }   
  }  
  /* DELETE ITEM */
  const deleteData = async (id) => {
    try{
        const result = await axios.delete(`${baseURL}cart-item/${id}`)
        .then((response) => {
          getData();
          toast.success(response.data.message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
          window.location.reload();
            
        })
      } catch (error) {
        console.error(`Error: ${error}`)
      }   
  }
  /* CALCULATIONS */
  const quantityTotal = () => {
    const total = items.reduce((acc, item) => acc + Number(item.quantity), 0);
    return total;
  }
  const cartTotal = () => {
      const total = items.reduce((acc, item) => acc + (Number(item.quantity) * item.price), 0);
      return total;
  }

  async function postData (){
    if(cart.id){
      const formData = {
        cart_session: getCartToken(),
        total: cartTotal(),
        quantity: quantityTotal(),
        items: items,
      };
      try{
        const result = await axios.post(`${baseURL}cart/${cart.id}`, formData)
        .then((response) => {
              router.push('/checkout');
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
              setTimeout(() => {
                window.location.reload();
              }, 1000);
            }
        );    
        } catch (error) {
            console.error(`Error: ${error}`);
            console.error(`Error Message: ${error.message}`);
            console.error(`Error Response: ${error.response}`);
            setIsSubmit(false);
        }

    } else{
      toast.success('Cart is empty, please add products to the cart.', {
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
      setIsSubmit(false);
    }
  }



  useEffect(() => {
    getData()
  }, []);


  useEffect(() => {
    isSubmit === true && postData();
  }, [isSubmit]);


  if(!cart && !items){
      return (
          <Loader />
      )
  }


  
  return (
    <>
      <section className='w-[100%] mb-[1rem]'>
          <div className='w-[90%] mx-auto flex items-center justify-end bg-pink-50 px-3 py-4'>
              <button 
                  onClick={() => router.back()}
                  className='bg-gradient-to-br from-blue-500 to-pink-500 hover:bg-gradient-to-br hover:to-blue-500 hover:from-pink-500 px-4 py-3 text-white rounded-lg'>
                  Continue Shopping
              </button>     
          </div>
      </section>

      <section className='w-[100%]'>
          <div className='w-[90%] mx-auto pb-[5rem]'>
              <section className='flex items-center justify-start text-lg font-extrabold bg-slate-200 drop-shadow-lg'>
                  <div className='w-[30%] pt-5 pb-4 px-4 '>PRODUCT</div>
                  <div className='w-[20%] pt-5 pb-4 px-4 border-l border-white'>PRICE</div>
                  <div className='w-[30%] pt-5 pb-4 px-4 border-l border-white'>QUANTITY</div>
                  <div className='w-[20%] pt-5 pb-4 px-4 border-l border-white'>TOTAL</div>
              </section>
              {/*  */}
              {items.map((item, i) => (
                  <section className='flex items-center justify-start border-b border-slate-100'>
                      <div className='w-[30%] p-4 border-l border-slate-100 flex items-center justify-start gap-3'>
                          <span className=''>
                          <MdDeleteForever 
                              onClick={() => deleteData(item.id)}
                              className='hover:text-red-500 duration-150 hover:scale-110 transition-all ease-in' /> 
                          </span>
                          <Link 
                            className='hover:text-blue-600 hover:underline'
                            href={`/product/${item.product_id}`}>
                            {item.name}
                          </Link>
                      </div>
                      <div className='w-[20%] p-4 border-l border-slate-100'>
                          {item.price ? '$' + (item.price / 100).toFixed(2) : ''}
                      </div>
                      <div className='w-[30%] p-4 border-x border-slate-100'>
                          <input 
                              type='number' 
                              value={item.quantity}
                              onChange={(e) => 
                                  setItems(prevState => prevState.map(i => i.id === item.id ? {...i, quantity: e.target.value} : i))
                              } 
                              placeholder='Quantity' 
                              className='p-3 outline-none border border-slate-200 rounded-lg'/>
                      </div>
                      <div className='w-[20%] p-4 border-r border-slate-100'>
                          {'$' +((Number(item.quantity) * item.price) / 100).toFixed(2)}
                      </div>
                  </section>

              ))}
              
              {/*  */}
              <section className='flex items-center justify-end font-bold text-lg'>
                  <div className='w-[30%] p-4 border border-slate-100'>QUANTITY</div>
                  <div className='w-[20%] p-4 border border-slate-100'>{quantityTotal()}</div>
              </section>
              <section className='flex items-center justify-end font-bold text-lg'>
                  <div className='w-[30%] p-4 border border-slate-100'>CART TOTAL</div>
                  <div className='w-[20%] p-4 border border-slate-100 text-red-600'>
                    {'$' + (cartTotal() / 100).toFixed(2)}
                  </div>
              </section>
              
              {getAuthToken() ?
              <section className='flex items-center justify-end text-lg'>
                <div className='w-[50%]'>
                  <button 
                    onClick={() => setIsSubmit(true) }
                    className='w-[100%] rounded-lg text-white py-[1.5rem] bg-gradient-to-br from-pink-500 to-blue-500 hover:bg-gradient-to-br hover:from-blue-500 hover:to-pink-500 transition-all duration-200 ease-in-out'>
                    {isSubmit === true ? 'Processing' : 'Proceed to Checkout'}
                  </button>
                </div>
              </section>
              :
              <section className='flex items-center justify-end text-lg'>
                <div className='w-[50%]'>
                  <Link href='/checkout-login'>
                    <button
                      className='w-[100%] rounded-lg text-white py-[1.5rem] bg-gradient-to-br from-pink-500 to-blue-500 hover:bg-gradient-to-br hover:from-blue-500 hover:to-pink-500 transition-all duration-200 ease-in-out'>
                      Proceed to Login
                    </button>
                  </Link>
                </div>
              </section>
              }

          </div>
      </section>
    </>
  )
}
