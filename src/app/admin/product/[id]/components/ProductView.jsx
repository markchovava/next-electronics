import React from 'react'

export default function ProductView() {
  
  
    return (
    <section className='w-[100%]'>
        <div className='mx-auto w-[80%] pb-[4rem]'>
        
          <div className='w-[100%] flex items-center justify-start gap-4 mb-4'>
            <div className='w-[20%] font-semibold'>Name:</div>
            <div className='w-[80%]'>Testing</div>
          </div>
         

          <div className='w-[100%] flex items-center justify-start gap-4 mb-4'>
            <div className='w-[20%] font-semibold'>Product Condition:</div>
            <div className='w-[80%]'>Testing</div>
          </div>
          <div className='w-[100%] flex items-center justify-start gap-4 mb-4'>
            <div className='w-[20%] font-semibold'>Product Source:</div>
            <div className='w-[80%]'>Testing</div>
          </div>
          <div className='w-[100%] flex items-center justify-start gap-4 mb-4'>
            <div className='w-[20%] font-semibold'>Price:</div>
            <div className='w-[80%]'>Testing</div>
          </div>
          <div className='w-[100%] flex items-center justify-start gap-4 mb-4'>
            <div className='w-[20%] font-semibold'>Product Short Description:</div>
            <div className='w-[80%]'>Testing</div>
          </div>

          <div className='w-[100%] flex items-center justify-start gap-4 mb-4'>
            <div className='w-[20%] font-semibold'>Description:</div>
            <div className='w-[80%]'>Testing</div>
          </div>

          <div className='w-[100%] flex items-center justify-start gap-4 mb-4'>
            <div className='w-[20%] font-semibold'>Images:</div>
            <div className='w-[80%] grid grid-cols-4 gap-6'>
                <div className='w-[100%] aspect-[5/4] bg-slate-100 rounded-lg overflow-hidden drop-shadow-lg'>
                    <img src='' className='w-[100%] h-[100%] object-cover' />
                </div>
                <div className='w-[100%] aspect-[5/4] bg-slate-100 rounded-lg overflow-hidden drop-shadow-lg'>
                    <img src='' className='w-[100%] h-[100%] object-cover' />
                </div>
                <div className='w-[100%] aspect-[5/4] bg-slate-100 rounded-lg overflow-hidden drop-shadow-lg'>
                    <img src='' className='w-[100%] h-[100%] object-cover' />
                </div>
                <div className='w-[100%] aspect-[5/4] bg-slate-100 rounded-lg overflow-hidden drop-shadow-lg'>
                    <img src='' className='w-[100%] h-[100%] object-cover' />
                </div>
                <div className='w-[100%] aspect-[5/4] bg-slate-100 rounded-lg overflow-hidden drop-shadow-lg'>
                    <img src='' className='w-[100%] h-[100%] object-cover' />
                </div>
            </div>
          </div>

        </div>
    </section>


  )
}
