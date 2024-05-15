"use client";
import axiosClientAPI from '@/api/axiosClientAPI';
import { baseURL } from '@/api/baseURL';
import Loader from '@/app/components/Loader';
import { tokenAuth } from '@/tokens/tokenAuth';
import { tokenCart } from '@/tokens/tokenCart';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { CiCircleRemove } from "react-icons/ci";
import { Bounce, toast } from 'react-toastify';


export default function CheckoutEdit() {
    const router = useRouter();
    const [data, setData] = useState()
    const { getAuthToken } = tokenAuth()
    const { getCartToken, removeCartToken } = tokenCart()
    const [errorMsg, setErrorMsg] = useState({});
    const [cart, setCart] = useState();
    const [delivery, setDelivery] = useState();
    const [items, setItems] = useState();
    const [isSubmit, setIsSubmit] = useState(false);
    const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getAuthToken()}`
    }};

    const handleInput = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }


     /* GET DATA */
    async function getData() {
        try{
        const result = await axiosClientAPI.get(`auth`, config)
        .then((response) => {
            setData(response.data.data)
        })
        } catch (error) {
        console.error(`Error: ${error}`)
        }   
    }

    /* GET CART */
    async function getCart() {
        try{
        const result = await axios.get(`${baseURL}cart-view?cart_session=${getCartToken()}`)
        .then((response) => {
            setCart(response.data.cart)
            setItems(response.data.items)
            console.log(response.data.items)
        })
        } catch (error) {
        console.error(`Error: ${error}`)
        }   
    } 
    /* GET CART */
    async function getDelivery() {
        try{
        const result = await axios.get(`${baseURL}delivery-all`)
        .then((response) => {
            setDelivery(response.data.data)
        })
        } catch (error) {
        console.error(`Error: ${error}`)
        }   
    } 

    async function postData(){
        if(cart.id){
            if(!data.fname){
                setErrorMsg({fname: 'First Name is required.'})
                setIsSubmit(false);
                toast.error('First Name is required.', {
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
                return;
            }
            if(!data.lname){
                setErrorMsg({lname: 'Last Name is required.'})
                setIsSubmit(false);
                toast.error('Last Name is required.', {
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
                return;
            }
            if(!data.address){
                setErrorMsg({address: 'Address is required.'})
                setIsSubmit(false);
                toast.error('Address is required.', {
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
                return;
            }
            if(!data.city){
                setErrorMsg({city: 'City is required.'})
                setIsSubmit(false);
                toast.error('City is required.', {
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
                return;
            }
            if(!data.country){
                setErrorMsg({country: 'Country is required.'})
                setIsSubmit(false);
                toast.error('Country is required.', {
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
                return;
            }
            if(!data.phone){
                setErrorMsg({phone: 'Phone is required.'})
                setIsSubmit(false);
                toast.error('Phone is required.', {
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
                return;
            }
            if(!data.delivery){
                setErrorMsg({delivery: 'Delivery is required.'})
                setIsSubmit(false);
                toast.error('Delivery is required.', {
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
                return;
            }
            if(!data.email){
                setErrorMsg({email: 'Email is required.'})
                setIsSubmit(false);
                toast.error('Email is required.', {
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
                return;
            }
            if(!data.payment_method){
                setErrorMsg({payment_method: 'Payment Method is required.'})
                setIsSubmit(false);
                toast.error('Payment Method is required.', {
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
                return;
            }
            const delivery = JSON.parse(data.delivery)
            const formData = {
                cart_id: cart.id,
                delivery_order: {
                    fname: data.fname,
                    lname: data.lname,
                    address: data.address,
                    city: data.city,
                    country: data.country,
                    phone: data.phone,
                    email: data.email
                },
                order: {
                    products_total: cartTotal(),
                    delivery_name: delivery.name,
                    delivery_fee: Number(delivery.price),
                    order_total: grandTotal(),
                    products_quantity: quantityTotal(),
                    message: data.message ? data.message : '',
                },
                items: items
            }
            try{
                const result = await axiosClientAPI.post(`order`, formData, config)
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
                    router.push(`/order-track`);
                    removeCartToken();
                    setIsSubmit(false)
                  }
                );    
                } catch (error) {
                    console.error(`Error: ${error}`);
                    console.error(`Error Message: ${error.message}`);
                    console.error(`Error Response: ${error.response}`);
                    setIsSubmit(false);
                }
            setIsSubmit(false)
        } else{
            toast.error('Cart is empty at the moment.', {
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
    const grandTotal = () => {
        const delivery = data.delivery ? JSON.parse(data.delivery) : 0;
        const total = cartTotal() + (delivery.price ? Number(delivery.price) : 0);
        return total;
    }

    useEffect(() => {
        getDelivery();
        getData();
        getCart();
    }, []);


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
        <div className='mx-auto w-[90%] flex items-start justify-start pb-[4rem] gap-4'>
            {/*  */}
            <div className='w-[60%]'>
                <h6 className='px-3 text-[2rem] font-black mb-4'>Customer Details</h6>
                <div className='w-[100%] flex justify-between items-center gap-4 px-3'>
                    <div className='w-[50%]'>
                        <h6 className='mb-2'>First Name:</h6>
                        <input 
                            type='text' 
                            name='fname'
                            onChange={handleInput}
                            value={data.fname}
                            placeholder='Enter First Name...' 
                            className='w-[100%] outline-none border border-slate-300 rounded-lg px-4 py-3' />
                    </div>
                    <div className='w-[50%]'>
                        <h6 className='mb-2'>Last Name:</h6>
                        <input 
                            type='text' 
                            name='lname'
                            onChange={handleInput}
                            value={data.lname}
                            placeholder='Enter Last Name...' 
                            className='w-[100%] outline-none border border-slate-300 rounded-lg px-4 py-3' />
                    </div>
                </div>
                <div className='w-[100%] flex justify-between items-center gap-4 px-3 mb-4'>
                    <div className='w-[50%]'>
                        { errorMsg.fname &&
                        <div className='w-[100%] flex items-center justify-start gap-3 pt-1 text-red-600'>
                            <span>{errorMsg.fname}</span>
                            <span 
                                className='cursor-pointer' 
                                onClick={() => setErrorMsg({...errorMsg, fname: undefined})}>
                                    <CiCircleRemove />
                            </span>
                        </div>
                        }
                    </div>
                    <div className='w-[50%]'>
                        { errorMsg.lname &&
                            <div className='w-[100%] flex items-center justify-start gap-3 pt-1 text-red-600'>
                                <span>{errorMsg.lname}</span>
                                <span 
                                    className='cursor-pointer' 
                                    onClick={() => setErrorMsg({...errorMsg, lname: undefined})}>
                                        <CiCircleRemove />
                                </span>
                            </div>
                        }  
                    </div>
                </div>
                <div className='w-[100%] px-3 mb-4'>
                    <h6 className='mb-2'>Delivery Address:</h6>
                    <input 
                        type='text' 
                        name='address'
                        onChange={handleInput}
                        value={data.address}
                        placeholder='Enter Delivery Address...' 
                        className='w-[100%] outline-none border border-slate-300 rounded-lg px-4 py-3' />
                    {errorMsg.address &&
                        <div className='w-[100%] flex items-center justify-start gap-3 pt-1 text-red-600'>
                            <span>{errorMsg.address}</span>
                            <span 
                                className='cursor-pointer' 
                                onClick={() => setErrorMsg({...errorMsg, address: undefined})}>
                                    <CiCircleRemove />
                            </span>
                        </div>
                    }  
                </div>
                <div className='w-[100%] px-3 mb-4'>
                    <h6 className='mb-2'>Delivery City:</h6>
                    <input 
                        type='text' 
                        name='city'
                        onChange={handleInput}
                        value={data.city}
                        placeholder='Enter Delivery City...' 
                        className='w-[100%] outline-none border border-slate-300 rounded-lg px-4 py-3' />
                    {errorMsg.city &&
                        <div className='w-[100%] flex items-center justify-start gap-3 pt-1 text-red-600'>
                            <span>{errorMsg.city}</span>
                            <span 
                                className='cursor-pointer' 
                                onClick={() => setErrorMsg({...errorMsg, city: undefined})}>
                                    <CiCircleRemove />
                            </span>
                        </div>
                    }  
                </div>
                <div className='w-[100%] px-3 mb-4'>
                    <h6 className='mb-2'>Delivery Country:</h6>
                    <input 
                        type='text' 
                        name='country'
                        onChange={handleInput}
                        value={data.country}
                        placeholder='Enter Delivery Country...' 
                        className='w-[100%] outline-none border border-slate-300 rounded-lg px-4 py-3' />
                    {errorMsg.country &&
                        <div className='w-[100%] flex items-center justify-start gap-3 pt-1 text-red-600'>
                            <span>{errorMsg.country}</span>
                            <span 
                                className='cursor-pointer' 
                                onClick={() => setErrorMsg({...errorMsg, country: undefined})}>
                                    <CiCircleRemove />
                            </span>
                        </div>
                    }  
                </div>
                <div className='w-[100%] px-3 mb-4'>
                    <h6 className='mb-2'>Delivery Phone Number:</h6>
                    <input 
                        type='text' 
                        name='phone'
                        onChange={handleInput}
                        value={data.phone}
                        placeholder='Enter Delivery Phone Number...' 
                        className='w-[100%] outline-none border border-slate-300 rounded-lg px-4 py-3' />
                    {errorMsg.phone &&
                        <div className='w-[100%] flex items-center justify-start gap-3 pt-1 text-red-600'>
                            <span>{errorMsg.phone}</span>
                            <span 
                                className='cursor-pointer' 
                                onClick={() => setErrorMsg({...errorMsg, phone: undefined})}>
                                    <CiCircleRemove />
                            </span>
                        </div>
                    }  
                </div>
                <div className='w-[100%] px-3 mb-4'>
                    <h6 className='mb-2'>Delivery Email:</h6>
                    <input 
                        type='email' 
                        name='email'
                        onChange={handleInput}
                        value={data.email}
                        placeholder='Enter Delivery Email...' 
                        className='w-[100%] outline-none border border-slate-300 rounded-lg px-4 py-3' />
                    {errorMsg.email &&
                        <div className='w-[100%] flex items-center justify-start gap-3 pt-1 text-red-600'>
                            <span>{errorMsg.email}</span>
                            <span 
                                className='cursor-pointer' 
                                onClick={() => setErrorMsg({...errorMsg, email: undefined})}>
                                    <CiCircleRemove />
                            </span>
                        </div>
                    }  
                </div>
                <h6 className='px-3 text-[1.5rem] font-black mb-4'>Additional Information</h6>
                {/* MESSAGE */}
                <div className='w-[100%] px-3 mb-4'>
                    <h6 className='mb-2'>Message:</h6>
                    <textarea 
                        name='message'
                        onChange={handleInput}
                        placeholder='Write your Message...' 
                        className='w-[100%] h-[8rem] outline-none border border-slate-300 rounded-lg px-4 py-3'></textarea>
                </div>
            </div>
            {/*  */}
            <div className='w-[40%] px-4 py-5 bg-slate-100 drop-shadow-lg'>
                <h6 className='font-bold text-lg mb-4'>Your Order</h6>
                <section className='flex items-center justify-start bg-slate-400 border border-white font-bold'>
                    <div className='w-[55%] border-r border-slate-300 py-3 px-2'>Name</div>
                    <div className='w-[45%] py-3 px-2'>Total</div>
                </section>
                {/*  */}
                {items.length > 0 &&
                    items.map((item, i) => (
                        <section className='flex items-center justify-start border-b border-slate-300'>
                            <div className='w-[55%] border-r border-slate-300 py-3 px-2'>
                                {item.name} × {item.quantity}
                            </div>
                            <div className='w-[45%] py-3 px-2'>
                                {'$' + (item.total / 100).toFixed(2)}
                            </div>
                        </section>

                    ))
                }

               
                {/*  */}
                <section className='flex items-center justify-start border-b border-slate-300 font-bold'>
                    <div className='w-[55%] text-right border-r border-slate-300 py-3 px-2'>
                        Quantity
                    </div>
                    <div className='w-[45%] py-3 px-2'>
                        {quantityTotal()}
                    </div>
                </section>
                {/*  */}
                <section className='flex items-center justify-start border-b border-slate-300 font-bold'>
                    <div className='w-[55%] text-right border-r border-slate-300 py-3 px-2'>
                        Cart Total
                    </div>
                    <div className='w-[45%] py-3 px-2'>
                        {cartTotal() ? '$' + (cartTotal() / 100).toFixed(2) : (0).toFixed(2)}
                    </div>
                </section>
                <section className='flex items-start justify-start border-b border-slate-300'>
                    <div className='w-[55%] text-right py-3 px-2 font-bold'>
                        Delivery
                    </div>
                    <div className='w-[45%] border-l border-slate-300 py-3 px-2'>
                        {delivery.map((item, i) => (
                            <div key={i} className='px-3 flex items-center justify-start gap-3 mb-3'>
                                <input 
                                    name='delivery' 
                                    type='radio' 
                                    onChange={(e) => setData({...data, delivery: e.target.value ? e.target.value : 0})}
                                    value={JSON.stringify({name: item.name, price:item.price})} /> 
                                <span>{item.name} ({item.price ? '$' + (item.price / 100).toFixed(2) : ''})</span>
                            </div>
                        ))}
                        { errorMsg.delivery &&
                            <div className='w-[100%] flex items-center justify-start gap-3 pt-1 text-red-600'>
                                <span>{errorMsg.delivery}</span>
                                <span 
                                    className='cursor-pointer' 
                                    onClick={() => setErrorMsg({...errorMsg, delivery: undefined})}>
                                        <CiCircleRemove />
                                </span>
                            </div>
                        }  
                    </div> 
                </section>

                <section className='flex items-start justify-start bg-slate-300 mb-4 text-lg'>
                    <div className='w-[55%] border-r border-slate-50 text-right py-3 px-2 font-bold'>
                        ORDER TOTAL
                    </div>
                    <div className='w-[45%] font-bold border-l border-slate-300 py-3 px-2 text-red-600'>
                        { 
                            grandTotal() 
                            ? '$' + (grandTotal() / 100).toFixed(2) 
                            : '$' + (0).toFixed(2)
                        }
                    </div> 
                </section>

                <section className='pb-4'>
                    <h6 className='px-3 py-2 font-bold text-lg'>Payment Methods</h6>
                    <div className='px-3 pb-3 flex items-center justify-start gap-3'>
                        <input 
                            name='payment_method'
                            onChange={handleInput} 
                            type='radio' 
                            value='debit_credit_card' /> Debit and Credit Card
                    </div>
                    <div className='px-3 pb-3 flex items-center justify-start gap-3'>
                        <input 
                            name='payment_method'
                            onChange={handleInput} 
                            type='radio' 
                            value='eft' /> EFT
                    </div>
                    { errorMsg.payment_method &&
                            <div className='w-[100%] flex items-center justify-start gap-3 pt-1 text-red-600'>
                                <span>{errorMsg.payment_method}</span>
                                <span 
                                    className='cursor-pointer' 
                                    onClick={() => setErrorMsg({...errorMsg, payment_method: undefined})}>
                                        <CiCircleRemove />
                                </span>
                            </div>
                        }  
                </section>

                <section className='pb-4'>
                    <button
                        onClick={() => setIsSubmit(true)}
                        className='w-[100%] rounded-lg text-white bg-gradient-to-br from-orange-500 to-pink-500 hover:bg-gradient-to-br drop-shadow-lg hover:drop-shadow-xl hover:from-pink-500 hover:to-orange-600 transition-all duration-200 ease-in-out py-5 text-center px-4'>
                        {isSubmit == true ? 'Processing' : 'Submit'}
                    </button>
                </section>

            </div>
        </div>
    </section>
  )
}
