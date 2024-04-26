import React from 'react'

export default function ProductAdd() {
  return (
    <section className='w-[100%]'>
        <div className='mx-auto w-[80%]'>
            {/* PRODUCT NAME */}
            <div className='mb-6'>
                <h6 className='mb-2'>Name:</h6>
                <input type='text' className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300'/>
            </div>
            {/* CONDITION */}
            <div className='mb-6'>
                <h6 className='mb-2'>Product Condition:</h6>
                <input type='text' className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300'/>
            </div>
             {/* Product Source */}
             <div className='mb-6'>
                <h6 className='mb-2'>Product Source:</h6>
                <input type='text' className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300'/>
            </div>
            {/* PRICE */}
            <div className='mb-6'>
                <h6 className='mb-2'>Price:</h6>
                <input type='number' className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300'/>
            </div>
             {/* PRODUCT SHORT DESCRIPTION */}
             <div className='mb-6'>
                <h6 className='mb-2'>Product Short Description:</h6>
                <input type='number' className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300'/>
            </div>
            {/* DESCRIPTION */}
            <div className='mb-6'>
                <h6 className='mb-2'>Description:</h6>
                <textarea 
                    type='text' 
                    className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300'></textarea>
            </div>
            {/* IMAGES */}
            <div className='mb-8'>
                <h6 className='mb-2'>Images:</h6>
                <div className='w-[100%] grid grid-cols-4 gap-8'>
                    {/* COL */}
                    <div className='w-[100%] bg-white'>
                        <input 
                            type='file' 
                            className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300 mb-3' />
                        <div className="mb-4 bg-slate-100 drop-shadow-lg rounded-lg overflow-hidden w-[100%] aspect-[5/4]">
                            <img src="" className="w-[100%] object-cover" alt='Image' />
                        </div>
                        <select
                            className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300 mb-3'>
                            <option>Select a priority.</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </select>
                    </div>
                    {/* COL */}
                    <div className='w-[100%] bg-white'>
                        <input 
                            type='file' 
                            className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300 mb-3' />
                        <div className="mb-4 bg-slate-100 drop-shadow-lg rounded-lg overflow-hidden w-[100%] aspect-[5/4]">
                            <img src="" className="w-[100%] object-cover" alt='Image' />
                        </div>
                        <select
                            className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300 mb-3'>
                            <option>Select a priority.</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </select>
                    </div>
                    {/* COL */}
                    <div className='w-[100%] bg-white'>
                        <input 
                            type='file' 
                            className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300 mb-3' />
                        <div className="mb-4 bg-slate-100 drop-shadow-lg rounded-lg overflow-hidden w-[100%] aspect-[5/4]">
                            <img src="" className="w-[100%] object-cover" alt='Image' />
                        </div>
                        <select
                            className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300 mb-3'>
                            <option>Select a priority.</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </select>
                    </div>
                    {/* COL */}
                    <div className='w-[100%] bg-white'>
                        <input 
                            type='file' 
                            className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300 mb-3' />
                        <div className="mb-4 bg-slate-100 drop-shadow-lg rounded-lg overflow-hidden w-[100%] aspect-[5/4]">
                            <img src="" className="w-[100%] object-cover" alt='Image' />
                        </div>
                        <select
                            className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300 mb-3'>
                            <option>Select a priority.</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </select>
                    </div>
                    {/* COL */}
                    <div className='w-[100%] bg-white'>
                        <input 
                            type='file' 
                            className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300 mb-3' />
                        <div className="mb-4 bg-slate-100 drop-shadow-lg rounded-lg overflow-hidden w-[100%] aspect-[5/4]">
                            <img src="" className="w-[100%] object-cover" alt='Image' />
                        </div>
                        <select
                            className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300 mb-3'>
                            <option>Select a priority.</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </select>
                    </div>
                   
                </div>   
            </div>
            <div className='flex items-center justify-center pb-[4rem]'>
                <button className='px-[8rem] py-5 text-white rounded-lg transition-all duration-200 ease-in-out bg-gradient-to-br from-orange-500 to-pink-500 hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-600'>
                    Submit
                </button>
            </div>
        </div>
    </section>
  )
}
