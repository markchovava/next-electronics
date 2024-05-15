import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import CartEdit from './components/CartEdit'

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

       <CartEdit />


    </div>
  )
}
