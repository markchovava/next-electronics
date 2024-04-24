import Link from 'next/link'
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
                <h6 className='font-black text-[3rem] text-center'>Shopping Checkout</h6>
            </div>
        </section>

        <section className='w-[100%]'>
            <div className='mx-auto w-[90%] flex items-start justify-start pb-[4rem] gap-4'>
                {/*  */}
                <div className='w-[60%]'>
                    <h6 className='px-3 text-[2rem] font-black mb-4'>Customer Details</h6>
                    <div className='w-[100%] flex justify-between items-center gap-4 px-3 mb-4'>
                        <div className='w-[50%]'>
                            <h6 className='mb-2'>First Name:</h6>
                            <input type='text' placeholder='Enter First Name...' className='w-[100%] outline-none border border-slate-300 rounded-lg px-4 py-3' />
                        </div>
                        <div className='w-[50%]'>
                            <h6 className='mb-2'>Last Name:</h6>
                            <input type='text' placeholder='Enter Last Name...' className='w-[100%] outline-none border border-slate-300 rounded-lg px-4 py-3' />
                        </div>
                    </div>
                    <div className='w-[100%] px-3 mb-4'>
                        <h6 className='mb-2'>Delivery Address:</h6>
                        <input type='text' placeholder='Enter Delivery Address...' className='w-[100%] outline-none border border-slate-300 rounded-lg px-4 py-3' />
                    </div>
                    <div className='w-[100%] px-3 mb-4'>
                        <h6 className='mb-2'>Delivery City:</h6>
                        <input type='text' placeholder='Enter Delivery City...' className='w-[100%] outline-none border border-slate-300 rounded-lg px-4 py-3' />
                    </div>
                    <div className='w-[100%] px-3 mb-4'>
                        <h6 className='mb-2'>Delivery Country:</h6>
                        <input type='text' placeholder='Enter Delivery Country...' className='w-[100%] outline-none border border-slate-300 rounded-lg px-4 py-3' />
                    </div>
                    <div className='w-[100%] px-3 mb-4'>
                        <h6 className='mb-2'>Delivery Phone Number:</h6>
                        <input type='text' placeholder='Enter Delivery Address...' className='w-[100%] outline-none border border-slate-300 rounded-lg px-4 py-3' />
                    </div>
                    <div className='w-[100%] px-3 mb-4'>
                        <h6 className='mb-2'>Delivery Email:</h6>
                        <input type='text' placeholder='Enter Delivery Address...' className='w-[100%] outline-none border border-slate-300 rounded-lg px-4 py-3' />
                    </div>
                    <h6 className='px-3 text-[1.5rem] font-black mb-4'>Additional Information</h6>
                    <div className='w-[100%] px-3 mb-4'>
                        <h6 className='mb-2'>Message:</h6>
                        <textarea 
                            placeholder='Write your Message...' 
                            className='w-[100%] h-[8rem] outline-none border border-slate-300 rounded-lg px-4 py-3'></textarea>
                    </div>
                </div>
                {/*  */}
                <div className='w-[40%] px-4 py-5 bg-slate-100 drop-shadow-lg'>
                    <h6 className='font-bold text-lg mb-4'>Your Order</h6>
                    <section className='flex items-center justify-start bg-slate-400 border border-white font-bold'>
                        <div className='w-[55%] border-r border-slate-300 py-3 px-2'>Name</div>
                        <div className='w-[45%] py-3 px-2'>Total</div>
                    </section>
                    {/*  */}
                    <section className='flex items-center justify-start border-b border-slate-300'>
                        <div className='w-[55%] border-r border-slate-300 py-3 px-2'>
                            Intel Core i7 12700 (12th gen) (No Cooler) × 3
                        </div>
                        <div className='w-[45%] py-3 px-2'>
                            R15,000.00
                        </div>
                    </section>
                    {/*  */}
                    <section className='flex items-center justify-start border-b border-slate-300'>
                        <div className='w-[55%] border-r border-slate-300 py-3 px-2'>
                            Intel Core i7 12700 (12th gen) (No Cooler) × 3
                        </div>
                        <div className='w-[45%] py-3 px-2'>
                            R15,000.00
                        </div>
                    </section>
                    {/*  */}
                    <section className='flex items-center justify-start border-b border-slate-300'>
                        <div className='w-[55%] text-right border-r border-slate-300 py-3 px-2'>
                            Subtotal
                        </div>
                        <div className='w-[45%] py-3 px-2'>
                            R15,000.00
                        </div>
                    </section>
                    <section className='flex items-start justify-start border-b border-slate-300'>
                        <div className='w-[55%] text-right py-3 px-2 font-bold'>
                            Delivery
                        </div>
                        <div className='w-[45%] border-l border-slate-300 py-3 px-2'>
                            <div className='px-3 flex items-center justify-start gap-3'>
                                <input name='delivery' type='radio' value='1' /> Delivery 1
                            </div>
                            <div className='px-3 flex items-center justify-start gap-3'>
                                <input name='delivery'  type='radio' value='1' /> Delivery 1
                            </div>
                            <div className='px-3 flex items-center justify-start gap-3'>
                                <input name='delivery'  type='radio' value='1' /> Delivery 1
                            </div>
                        </div> 
                    </section>

                    <section className='flex items-start justify-start bg-slate-300 mb-4'>
                        <div className='w-[55%] border-r border-slate-50 text-right py-3 px-2 font-bold'>
                            ORDER TOTAL
                        </div>
                        <div className='w-[45%] font-bold border-l border-slate-300 py-3 px-2 text-blue-600'>
                           $5,000,00
                        </div> 
                    </section>

                    <section className='pb-4'>
                        <h6 className='px-3 py-2 font-bold text-lg'>Payment Methods</h6>
                        <div className='px-3 pb-3 flex items-center justify-start gap-3'>
                            <input name='delivery' type='radio' value='1' /> Debit and Credit Card
                        </div>
                        <div className='px-3 pb-3 flex items-center justify-start gap-3'>
                            <input name='delivery'  type='radio' value='1' /> EFT
                        </div>
                    </section>

                    <section className='pb-4'>
                        <button className='w-[100%] rounded-lg text-white bg-gradient-to-br from-orange-500 to-pink-500 hover:bg-gradient-to-br drop-shadow-lg hover:drop-shadow-xl hover:from-pink-500 hover:to-orange-600 transition-all duration-200 ease-in-out py-5 text-center px-4'>
                            Submit
                        </button>
                    </section>

                </div>
            </div>
        </section>

    </div>
  )
}
