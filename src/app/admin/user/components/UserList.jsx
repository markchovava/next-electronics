import Link from 'next/link'
import React from 'react'
import { FaEye, FaSearch } from 'react-icons/fa'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import { MdDeleteForever, MdEdit } from "react-icons/md";



export default function UserList() {
  return (
    <div>
      <section className='w-[100%]'>
        <div className='w-[90%] mx-auto flex items-center justify-between pb-[1rem]'>
          <div className='w-[45%] flex items-center justify-start'>
            <input type='text' 
              placeholder='Enter name here...'
              className='w-[85%] h-[3rem] rounded-l-lg p-3 outline-none border border-slate-300' />
            <button className='w-[15%] h-[3rem] border-y border-r rounded-r-lg text-lg border-slate-300 flex items-center justify-center p-3'>
              <FaSearch /></button>
          </div>
          <div className='flex items-center justify-end gap-6'>
            {/* PAGINATION */}
            <div className='flex items-center justify-end gap-3'>
              <button className='group flex items-center justify-center gap-2 text-transparent bg-gradient-to-br bg-clip-text from-orange-500 to-pink-500'>
                <FaArrowLeftLong className='group-hover:-translate-x-2 duration-200 transition-all ease-in-out text-orange-500' /> 
                  Prev </button>
              <button className='group flex items-center justify-center gap-2 text-transparent bg-gradient-to-br bg-clip-text from-orange-400 to-pink-400'>
                  Next <FaArrowRightLong className='text-orange-400 group-hover:translate-x-2 duration-200 transition-all ease-in-out' /></button>
              </div>
            <Link href='/admin/user/add' 
              className='flex items-center justify-center text-white bg-gradient-to-br from-orange-500 to-pink-500 hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-500 transition-all duration-200 ease-in-out rounded-lg w-[8rem] h-[3rem]'>
              Add</Link>
          </div>
        </div>
      </section>
      {/* TABLE TITLES */}
      <section className='w-[100%]'>
        <div className='w-[90%] mx-auto flex items-center justify-start font-bold font-white bg-slate-200 '>
          <div className='w-[35%] border-r border-white px-3 py-2'>Name</div>
          <div className='w-[25%] border-r border-white px-3 py-2'>Price</div>
          <div className='w-[25%] border-r border-white px-3 py-2'>Author</div>
          <div className='w-[15%] px-3 py-2'>Action</div>
        </div>
      </section>
      {/* TABLE DATA */}
      <section className='w-[100%]'>
        <div className='w-[90%] border-x border-b border-slate-300 mx-auto flex items-center justify-start '>
          <div className='w-[35%] border-r border-slate-300 px-3 py-2'>Name</div>
          <div className='w-[25%] border-r border-slate-300 px-3 py-2'>Price</div>
          <div className='w-[25%] border-r border-slate-300 px-3 py-2'>Author</div>
          <div className='w-[15%] px-3 py-2 flex items-center justify-start gap-4'>
            <Link href='/admin/user/1'> <FaEye className='hover:text-blue-500 duration-150 hover:scale-110 transition-all ease-in'/> </Link>
            <Link href='/admin/user/edit/1'> <MdEdit className='hover:text-green-500 duration-150 hover:scale-110 transition-all ease-in' /> </Link>  
            <button> 
                <MdDeleteForever 
                    className='hover:text-red-500 duration-150 hover:scale-110 transition-all ease-in' /> 
            </button>
          </div>
        </div>
      </section>
      <section className='w-[100%]'>
        <div className='w-[90%] border-x border-b border-slate-300 mx-auto flex items-center justify-start '>
          <div className='w-[35%] border-r border-blue-300 px-3 py-2'>Name</div>
          <div className='w-[25%] border-r border-blue-300 px-3 py-2'>Price</div>
          <div className='w-[25%] border-r border-blue-300 px-3 py-2'>Author</div>
          <div className='w-[15%] px-3 py-2 flex items-center justify-start gap-4'>
            <Link href='#'> <FaEye className='hover:text-blue-500 duration-150 hover:scale-110 transition-all ease-in'/> </Link>
            <Link href='#'> <MdEdit className='hover:text-green-500 duration-150 hover:scale-110 transition-all ease-in' /> </Link>  
            <button> 
                <MdDeleteForever 
                    className='hover:text-red-500 duration-150 hover:scale-110 transition-all ease-in' /> 
            </button>
          </div>
        </div>
      </section>
      {/* PAGINATION */}
      <section className='w-[100%] mt-[2rem] mb-[4rem]'>
        <div className='mx-auto w-[90%] flex items-center justify-end gap-3'>
            <button className='group flex items-center justify-center gap-2 text-transparent bg-gradient-to-br bg-clip-text from-orange-500 to-pink-500'>
              <FaArrowLeftLong className='group-hover:-translate-x-2 duration-200 transition-all ease-in-out text-orange-500' /> 
                Prev </button>
            <button className='group flex items-center justify-center gap-2 text-transparent bg-gradient-to-br bg-clip-text from-orange-500 to-pink-500'>
                Next <FaArrowRightLong className='text-orange-500 group-hover:translate-x-2 duration-200 transition-all ease-in-out' /></button>
        </div>
      </section>
    </div>
  )
}
