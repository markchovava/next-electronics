import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import AppInfoEdit from './components/AppInfoEdit'
import { tokenAuthName } from '@/tokens/tokenAuth'
import { cookies } from 'next/headers'
import { getAppInfo } from '@/api/getAppInfo'




export default async function page() {
  const cookieAuthStore = cookies()
  const cookieAuth = cookieAuthStore.get(tokenAuthName)
  const appInfo = await getAppInfo(cookieAuth);


  return (
    <div>
      {/* Bread Crumbs */}
      <section className='w-[100%]'>
            <div className='mx-auto w-[90%] border-b border-slate-200'>
                <ul className='flex items-center justify-start gap-2 px-3 py-2'>
                    <li><Link href='/'>Home</Link></li>
                    <li><FaAngleRight /></li>
                    <li><Link href='/admin/app-info'>AppInfo</Link></li>
                    <li><FaAngleRight /></li>
                    <li><Link href='/admin/app-info/edit'>App Info Edit</Link></li>
                </ul>
            </div>
      </section>

      {/* PAGE TITLE */}
      <section className='w-[100%]'>
          <div className='w-[90%] mx-auto flex items-center justify-center'>
            <h6 className='text-center font-black text-[3rem] pt-[3rem] pb-[2rem] text-transparent bg-gradient-to-br bg-clip-text from-orange-400 to-pink-500'>
              App Info Edit</h6>
          </div>
      </section>

      <section className='w-[100%]'>
          <div className='mx-auto w-[90%] flex items-center justify-end'>
            <Link href='/admin/app-info' className='text-white rounded-lg px-6 py-3 transition-all duration-200 ease-in-out bg-gradient-to-br from-orange-500 to-pink-500 hover:gradient-to-br hover:from-pink-500 hover:to-orange-600'>
              View
            </Link>
          </div>
      </section>

      {/* APP INFO */}
      <AppInfoEdit appInfo={appInfo} />
         

    </div>
  )
}
