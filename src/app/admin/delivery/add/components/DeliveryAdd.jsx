import React from 'react'

export default function DeliveryAdd() {
  return (
    <section className='w-[100%]'>
        <div className='mx-auto w-[80%]'>
            <div className='mb-6'>
                <h6 className='font-bold mb-2'>Name</h6>
                <input type='text' className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300'/>
            </div>
            <div className='mb-6'>
                <h6 className='font-bold mb-2'>Price</h6>
                <input type='number' className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300'/>
            </div>
        </div>
    </section>
  )
}
