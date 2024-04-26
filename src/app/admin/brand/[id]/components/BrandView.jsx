import React from 'react'

export default function BrandView() {
  return (
    <section className='w-[100%]'>
        <div className='mx-auto w-[80%] pb-[4rem]'>
          <div className='w-[100%] flex items-center justify-start gap-4 mb-4'>
            <div className='w-[20%] font-semibold'>Name:</div>
            <div className='w-[80%]'>
              <div className='w-[50%] aspect-[5/3] overflow-hidden rounded-lg drop-shadow-lg bg-slate-200'>
                <img src='' className='w-[100%] h-[100%] object-cover' />
              </div>
            </div>
          </div>
          <div className='w-[100%] flex items-center justify-start gap-4 mb-4'>
            <div className='w-[20%] font-semibold'>Description:</div>
            <div className='w-[80%]'>Testing</div>
          </div>
          <div className='w-[100%] flex items-center justify-start gap-4 mb-4'>
            <div className='w-[20%] font-semibold'>Author:</div>
            <div className='w-[80%]'>Testing</div>
          </div>
        </div>
    </section>
  )
}
