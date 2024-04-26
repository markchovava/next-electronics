import React from 'react'




export default function AppInfoView() {
  return (
    <section className='w-[100%]'>
        <div className='mx-auto w-[80%] pb-[4rem]'>
          
          {/* NAME */}
          <div className='w-[100%] flex items-center justify-start gap-4 mb-4'>
            <div className='w-[20%] font-semibold'>Name:</div>
            <div className='w-[80%]'>Testing</div>
          </div>
          {/* EMAIL */}
          <div className='w-[100%] flex items-center justify-start gap-4 mb-4'>
            <div className='w-[20%] font-semibold'>Email:</div>
            <div className='w-[80%]'>Testing</div>
          </div>
          {/* PHONE */}
          <div className='w-[100%] flex items-center justify-start gap-4 mb-4'>
            <div className='w-[20%] font-semibold'>Phone:</div>
            <div className='w-[80%]'>Testing</div>
          </div>
          {/* WEBSITE */}
          <div className='w-[100%] flex items-center justify-start gap-4 mb-4'>
            <div className='w-[20%] font-semibold'>Website:</div>
            <div className='w-[80%]'>Testing</div>
          </div>
        </div>
    </section>
  )
}
