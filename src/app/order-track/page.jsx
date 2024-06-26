import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import OrderTrackList from './components/OrderTrackList'




export default function page() {
  return (
    <div>
      {/* Bread Crumbs */}
      <section className='w-[100%]'>
            <div className='mx-auto w-[90%] border-b border-slate-200'>
                <ul className='flex items-center justify-start gap-2 px-3 py-2'>
                    <li><Link href='/'>Home</Link></li>
                    <li><FaAngleRight /></li>
                    <li><Link href='/admin/delivery'>Track Order List</Link></li>
                    
                </ul>
            </div>
      </section>
      {/* Page Title */}
      <section className='w-[100%]'>
        <div className='w-[90%] mx-auto flex items-center justify-center'>
          <h6 className='text-center font-black text-[3rem] pt-[3rem] pb-[2rem] text-transparent bg-gradient-to-br bg-clip-text from-orange-400 to-pink-500'>
            Track Order List</h6>
        </div>
      </section>

      {/* List */}
      <OrderTrackList />

    </div>
  )
}
