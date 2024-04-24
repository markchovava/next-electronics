import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa'

export default function page() {
  return (
    <div>
        {/* Bread Crumbs */}
        <section className='w-[100%]'>
            <div className='mx-auto w-[90%] border-b border-slate-200'>
                <ul className='flex items-center justify-start gap-3 px-3 py-2'>
                    <li><Link href='#'>Home</Link></li>
                    <li><FaAngleRight /></li>
                    <li><Link href='#'>Home</Link></li>
                    <li><FaAngleRight /></li>
                    <li><Link href='#'>Home</Link></li>
                </ul>
            </div>
        </section>

        {/* PAGE TITLE */}
        <section className='w-[100%]'>
            <div className='w-[90%] mx-auto py-[3rem] flex items-center justify-center'>
                <h6 className='font-black text-[3rem] text-center'>Shopping Cart</h6>
            </div>
        </section>

        <section className='w-[100%] mb-[1rem]'>
            <div className='w-[90%] mx-auto flex items-center justify-end bg-pink-50 px-3 py-4'>
                <button className='bg-gradient-to-br from-blue-500 to-pink-500 hover:bg-gradient-to-br hover:to-blue-500 hover:from-pink-500 px-4 py-3 text-white rounded-lg'>
                    Continue Shopping</button>
                
            </div>
        </section>

        <section className='w-[100%]'>
            <div className='w-[90%] mx-auto pb-[5rem]'>
                <section className='flex items-center justify-start text-lg font-extrabold bg-slate-200 drop-shadow-lg'>
                    <div className='w-[40%] pt-5 pb-4 px-4 '>PRODUCT</div>
                    <div className='w-[20%] pt-5 pb-4 px-4 border-l border-white'>PRICE</div>
                    <div className='w-[10%] pt-5 pb-4 px-4 border-l border-white'>QUANTITY</div>
                    <div className='w-[30%] pt-5 pb-4 px-4 border-l border-white'>TOTAL</div>
                </section>
                {/*  */}
                <section className='flex items-center justify-start border-b border-slate-100'>
                    <div className='w-[40%] p-4 border-l border-slate-100'>PRODUCT</div>
                    <div className='w-[20%] p-4 border-l border-slate-100'>PRICE</div>
                    <div className='w-[10%] p-4 border-x border-slate-100'>QUANTITY</div>
                    <div className='w-[30%] p-4 border-r border-slate-100'>TOTAL</div>
                </section>
                {/*  */}
                <section className='flex items-center justify-start border-b border-slate-100'>
                    <div className='w-[40%] p-4 border-l border-slate-100'>PRODUCT</div>
                    <div className='w-[20%] p-4 border-l border-slate-100'>PRICE</div>
                    <div className='w-[10%] p-4 border-x border-slate-100'>QUANTITY</div>
                    <div className='w-[30%] p-4 border-r border-slate-100'>TOTAL</div>
                </section>
                {/*  */}
                <section className='flex items-center justify-end '>
                    <div className='w-[10%] p-4 border border-slate-100'>QUANTITY</div>
                    <div className='w-[30%] p-4 border border-slate-100'>TOTAL</div>
                </section>
                <section className='flex items-center justify-end font-bold '>
                    <div className='w-[10%] p-4 border border-slate-100'>QUANTITY</div>
                    <div className='w-[30%] p-4 border border-slate-100'>TOTAL</div>
                </section>
            </div>
        </section>
    </div>
  )
}
