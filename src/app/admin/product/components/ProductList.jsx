"use client"
import axiosClientAPI from '@/api/axiosClientAPI'
import Loader from '@/app/components/Loader'
import { tokenAuth } from '@/tokens/tokenAuth'
import { tokenRole } from '@/tokens/tokenRole'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaEye, FaSearch } from 'react-icons/fa'
import { FaArrowLeftLong, FaArrowRightLong, FaCirclePlus } from 'react-icons/fa6'
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { toast, Bounce } from 'react-toastify'



export default function ProductList() {
  const [data, setData] = useState();
  const [search, setSearch] = useState('')
  const [isSearch, setIsSearch] = useState(false)
  const { getAuthToken } = tokenAuth();
  const { getRoleToken } = tokenRole();
  /* PAGINATION */
  const [nextURL, setNextURL] = useState()
  const [prevURL, setPrevURL] = useState()
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getAuthToken()}`
  }};
  /* PAGINATION DATA */
  async function paginationHandler(url) {
    console.log('text')
    try{
       const result = await axiosClientAPI.get(url, config)
       .then((response) => {
          console.log('PRODUCT')
          console.log(response.data.data)
          setData(response.data.data)
          setPrevURL(response.data.links.prev)
          setNextURL(response.data.links.next)
       })
    } catch (error) {
       console.error(`Error: ${error}`)
    }     
  }
  /* GET DATA */
  async function getData() {
    try{
      const result = await axiosClientAPI.get(`product`, config)
      .then((response) => {
        console.log('PRODUCT')
        console.log(response.data.data)
        setData(response.data.data.sort((a, b) => b.updated_at - a.updated_at ))
        setPrevURL(response.data.links.prev)
        setNextURL(response.data.links.next)
      })
    } catch (error) {
      console.error(`Error: ${error}`)
    }   
  }    
  /* search DATA */
  async function searchData() {
    if(search === ''){
      getData();
      setIsSearch(false);
      return;
    }
    try{
      const result = await axiosClientAPI.get(`product?search=${search}`, config)
      .then((response) => {
        setData(response.data.data)
        setPrevURL(response.data.links.prev)
        setNextURL(response.data.links.next)
        setIsSearch(false);
      })
    } catch (error) {
      console.error(`Error: ${error}`)
      setIsSearch(false);
    }   
  } 
  /* DELETE DATA */
  async function deleteData(id) {
    try{
      const result = await axiosClientAPI.delete(`product/${id}`, config)
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
        getData();
      })
    } catch (error) {
      console.error(`Error: ${error}`)
    }   
  }   

  useEffect(() => { 
    getData();
  }, []);

  useEffect(() => { 
    isSearch === true && searchData();
  }, [isSearch]);

  useEffect(() => { 
    isSearch === true && searchData();
  }, [isSearch]);

  if(!data){
    return (
      <Loader />
    )
  }

  
  
  return (
    <div>
      <section className='w-[100%]'>
        <div className='w-[90%] mx-auto flex items-center justify-between pb-[1rem]'>
          <div className='w-[45%] flex items-center justify-start'>
            <input 
              type='text' 
              value={search}
              onChange={(e) => setSearch(e.target.value)} 
              placeholder='Enter name here...'
              className='w-[85%] h-[3rem] rounded-l-lg p-3 outline-none border border-slate-300' />
            <button
              onClick={() => setIsSearch(true)}  
              className='w-[15%] h-[3rem] border-y border-r rounded-r-lg text-lg border-slate-300 flex items-center justify-center p-3'>
              {isSearch === true ? 
                  <span className='animate-pulse w-[15px] h-[15px] rounded-full bg-slate-900'></span> 
                : 
                  <FaSearch />
              }
            </button>
          </div>
          <div className='flex items-center justify-end gap-6'>
            {/* PAGINATION */}
            <div className='flex items-center justify-end gap-3'>
              {prevURL && 
                <button 
                  onClick={() => paginationHandler(prevURL)}
                  className='group flex items-center justify-center gap-2 text-transparent bg-gradient-to-br bg-clip-text from-orange-500 to-pink-500'>
                  <FaArrowLeftLong className='group-hover:-translate-x-2 duration-200 transition-all ease-in-out text-orange-500' /> 
                    Prev </button>
              }
              {nextURL && 
                <button
                  onClick={() => paginationHandler(nextURL)}
                  className='group flex items-center justify-center gap-2 text-transparent bg-gradient-to-br bg-clip-text from-orange-400 to-pink-400'>
                    Next <FaArrowRightLong className='text-orange-400 group-hover:translate-x-2 duration-200 transition-all ease-in-out' />
                </button>
              }
            </div>
            <Link href='/admin/product/add' 
              className='flex items-center justify-center text-white bg-gradient-to-br from-orange-500 to-pink-500 hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-500 transition-all duration-200 ease-in-out rounded-lg w-[8rem] h-[3rem]'>
              Add</Link>
          </div>
        </div>
      </section>
      {/* TABLE TITLES */}
      <section className='w-[100%]'>
        <div className='w-[90%] mx-auto flex items-center justify-start font-bold font-white bg-slate-200 '>
          <div className='w-[25%] border-r border-white px-3 py-2'>Name</div>
          <div className='w-[15%] border-r border-white px-3 py-2'>Price</div>
          <div className='w-[15%] border-r border-white px-3 py-2'>Brand</div>
          <div className='w-[20%] border-r border-white px-3 py-2'>Category</div>
          <div className='w-[13%] border-r border-white px-3 py-2'>Author</div>
          <div className='w-[12%] px-3 py-2'>Action</div>
        </div>
      </section>
      {/* TABLE DATA */}
      <section className='w-[100%]'>
        {data.length > 0 ?
          data.map((item, i) => (
           <div key={i} className='w-[90%] border-x border-b border-slate-300 mx-auto flex items-center justify-start '>
              <div className='w-[25%] border-r border-slate-300 px-3 py-2 flex items-center justify-between'>
                {item.name}
                <small className='text-pink-600'>{item.priority}</small>
                </div>
              <div className='w-[15%] border-r border-slate-300 px-3 py-2'>
                {item.price ? '$' + (item.price / 100).toFixed(2) : 'Not added.'}
              </div>
              <div className='w-[15%] border-r border-slate-300 px-3 py-2'>
                {item?.brand?.name ? item?.brand?.name : 'Not added'}
              </div>
              {/* CATEGORIES */}
              <div className='w-[20%] border-r border-slate-300 px-3 py-2'>
                { item?.categories.length > 0 ? item.categories.map((item, i) => (
                  item.name + ', '
                )) : 'Not yet added.'}
              </div>
              {/* USER */}
              <div className='w-[13%] border-r border-slate-300 px-3 py-2'>
                {item?.user?.name ? item?.user?.name : item?.user?.email}
              </div>
              <div className='w-[12%] px-3 py-2 flex items-center justify-start gap-4 text-lg'>
                <Link href={`/admin/product/${item.id}`}> 
                  <FaEye className='hover:text-blue-500 duration-150 hover:scale-110 transition-all ease-in'/> </Link>
                <Link href={`/admin/product/edit/${item.id}`}> 
                  <MdEdit className='hover:text-green-500 duration-150 hover:scale-110 transition-all ease-in' /> 
                </Link>  
                <Link href={`/admin/product/category/edit/${item.id}`}>
                  <FaCirclePlus className='hover:text-red-500 duration-150 hover:scale-110 transition-all ease-in' />
                </Link>
                <button> 
                    <MdDeleteForever
                        onClick={() => deleteData(item.id)} 
                        className='hover:text-red-500 duration-150 hover:scale-110 transition-all ease-in text-xl' /> 
                </button>
              </div>
            </div>
          ))
        :
          <div className="mx-auto w-[50rem] lg:w-[90%] flex items-center justify-center py-8">
            <h5 className='p-3 text-4xl font-light'>No Data Available...</h5>
          </div>
        }
       
      </section>
     
      {/* PAGINATION */}
      <section className='w-[100%] mt-[2rem] mb-[4rem]'>
        <div className='mx-auto w-[90%] flex items-center justify-end gap-3'>
          { prevURL && 
            <button 
              onClick={() => paginationHandler(prevURL)}
              className='group flex items-center justify-center gap-2 text-transparent bg-gradient-to-br bg-clip-text from-orange-500 to-pink-500'>
              <FaArrowLeftLong className='group-hover:-translate-x-2 duration-200 transition-all ease-in-out text-orange-500' /> 
                Prev 
            </button>
          }
          { nextURL && 
            <button
              onClick={() => paginationHandler(nextURL)}
              className='group flex items-center justify-center gap-2 text-transparent bg-gradient-to-br bg-clip-text from-orange-400 to-pink-400'>
                Next <FaArrowRightLong className='text-orange-400 group-hover:translate-x-2 duration-200 transition-all ease-in-out' />
            </button>
          }
        </div>
      </section>
    </div>
  )
}
