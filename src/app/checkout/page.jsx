import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa'
import CheckoutEdit from './components/CheckoutEdit'
import { getDeliveryOrder } from '@/api/getDeliveryOrder'
import { cookies } from 'next/headers'
import { getCookie } from 'cookies-next';

export default async function page() {
    //const cookieAuth = getCookie('ELECTRONIC_AUTH_TOKEN', { cookies });
    //const deliverOrder = await getDeliveryOrder(cookieAuth)


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

        {/* <CheckoutEdit cookieAuth={cookieAuth} deliverOrder={deliverOrder} />       */} 
        
        <CheckoutEdit />       

    </div>
  )
}
