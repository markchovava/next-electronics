"use client";
import React, { useEffect, useState } from 'react'
import axiosClientAPI from "@/api/axiosClientAPI";
import { useRouter } from "next/navigation";
import { tokenAuth } from '@/tokens/tokenAuth';
import Loader from '@/app/components/Loader';


export default function OrderView({ id }) {
    const router = useRouter();
    const [order, setOrder] = useState();
    const { getAuthToken } = tokenAuth();

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getAuthToken()}`
      }}

    async function getOrder() {
        try{
          const result = await axiosClientAPI.get(`order/${id}`, config)
          .then((response) => {
            console.log(response.data.data)
            setOrder(response.data.data)
          })
        } catch (error) {
            console.error(`Error: ${error}`);
            console.error(`Error Message: ${error.message}`);
            console.error(`Error Response: ${error.response}`);
        }   
    } 


    useEffect(() => {
        getOrder();
    }, [])


    if(!order){
        return (
            <Loader />
        )
    }

    console.log(order)

  return (
    <section className='mx-auto h-auto w-[100%]'>
        <div className='mx-auto w-[90%] h-auto pb-[4rem]'>
            {/* DETAILS */}
            <section className="mx-auto w-[100%] pb-[2rem] flex flex-col lg:flex-row justify-start items-start gap-4">
                <div className="lg:w-[50%] w-[100%]">
                    <h5 className='font-light text-[2rem] pb-4'>Billing Details</h5>
                    <ul>
                        <li className="flex justify-start items-center gap-1 pb-1">
                            Full name: 
                            <span className="font-semibold">
                                {
                                (order.delivery_order?.fname ? 
                                order.delivery_order?.fname : 
                                '')
                                + ' ' + 
                                (order.delivery_order?.lname ? 
                                    order.delivery_order?.lname : 
                                '')
                                }
                            </span>
                        </li>
                        <li className="flex justify-start items-center gap-1 pb-1">
                            Address: 
                            <span className="font-semibold">{order.delivery_order?.address}</span>
                        </li>
                        <li className="flex justify-start items-center gap-1 pb-1">
                            City: 
                            <span className="font-semibold">{order.delivery_order?.city}</span>
                        </li>
                        <li className="flex justify-start items-center gap-1 pb-1">
                            Country: 
                            <span className="font-semibold">{order.delivery_order?.country}</span>
                        </li>
                        <li className="flex justify-start items-center gap-1 pb-1">
                            Phone:
                            <span className="font-semibold">{order.delivery_order?.phone}</span> 
                        </li>
                        <li className="flex justify-start items-center gap-1 pb-1">
                            Email: 
                            <span className="font-semibold">{order.delivery_order?.email}</span>
                        </li>
                        <li className="flex justify-start items-center gap-1 pb-1">
                            Message: 
                            <span className="font-semibold">
                                {order.message ? order.message : 'Not added.'}</span>
                        </li>
                    </ul>
                </div>
                <div className="lg:w-[50%] w-[100%]">
                    <h5 className='font-light text-[2rem] pb-4'>Order Details</h5>
                    <ul>
                        <li className="flex justify-start items-center gap-1 pb-1">
                            Order No.: 
                            <span className="font-semibold">
                                {order.order_ref}</span>
                        </li>
                        <li className="flex justify-start items-center gap-1 pb-1">
                            Order Total: 
                            <span className="font-semibold">
                                {order?.order_total && '$' + (order?.order_total / 100).toFixed(2)}</span>
                        </li>
                        <li className="flex justify-start items-center gap-1 pb-1">
                            Product Total: 
                            <span className="font-semibold">
                                {order?.products_total && '$' + (order?.products_total / 100).toFixed(2)}</span>
                        </li>
                        <li className="flex justify-start items-center gap-1 pb-1">
                            Product Quantity: 
                            <span className="font-semibold">
                                {order?.products_quantity && order?.products_quantity}</span>
                        </li>
                    
                        <li className="flex justify-start items-center gap-1 pb-1">
                            Delivery Type: 
                            <span className="font-semibold">
                                {order.delivery_name ? order.delivery_name : 'Not added.'}</span>
                        </li>
                        <li className="flex justify-start items-center gap-1 pb-1">
                            Delivery Fee: 
                            <span className="font-semibold">
                                ${order.delivery_fee ? (order.delivery_fee / 100).toFixed(2) : (0).toFixed(2)}</span>
                        </li>
                        <li className="flex justify-start items-center gap-1 pb-1">
                            Delivery Status: 
                            <span 
                                className={`${order?.status === 'Processing' && 'bg-red-500'}
                                            ${order?.status === 'Dispatched' && 'bg-blue-500'}
                                            ${order?.status === 'Delivered' && 'bg-green-600'}
                                            font-semibold px-2 py-1 rounded-xl text-white`}>
                                {order.status}</span>
                        </li>
                    </ul>
                </div>
            
            </section>

            <section className="w-[100%] lg:overflow-hidden overflow-scroll">
                {/* HEADER */}
                <div className="font-bold lg:w-[100%] w-[50rem] flex items-center justify-start bg-slate-200 py-3">
                    <div className="w-[40%] py-2 px-3 ">NAME</div>
                    <div className="w-[20%] py-2 px-3 border-l border-white">Price</div>
                    <div className="w-[20%] py-2 px-3 border-l border-white">Quantity</div>
                    <div className="w-[20%] py-2 px-3 border-l border-white">Total</div>
                </div>
                {/*  */}
                {order.order_items?.length > 0 && order.order_items?.map((item, i) => (
                    <div key={i} className="lg:w-[100%] w-[50rem] flex items-center justify-start border border-slate-200 py-3">
                        <div className="w-[40%] py-2 px-3 ">{item.name}</div>
                        <div className="w-[20%] py-2 px-3 border-l border-slate-200">
                            {item.price ? '$' + (item.price / 100).toFixed(2) : (0).toFixed(2)}
                        </div>
                        <div className="w-[20%] py-2 px-3 border-l border-slate-200">
                            {item.quantity}
                        </div>
                        <div className="w-[20%] py-2 px-3 border-l border-slate-200">
                            {item.total ? '$' + (item.total / 100).toFixed(2) : (0).toFixed(2)}
                        </div>
                    </div>

                ))}
                
            </section>
        </div>
    </section>
  )
}
