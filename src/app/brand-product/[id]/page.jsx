import { getBrand, getBrandProducts,  getBrandsAll } from '@/api/getBrands'
import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import RightNav from '@/app/components/RightNav';
import { getCategoriesAll } from '@/api/getCategory';
import BrandProductList from './components/BrandProductList';

export default async function page({ params: {id} }) {
    const [brands, brand, categories, brandProducts] = await Promise.all([
                                        getBrandsAll(), 
                                        getBrand(id),
                                        getCategoriesAll(), 
                                        getBrandProducts(id)
                                    ]);


  return (
    <div>
        {/* Bread Crumbs */}
        <section className='w-[100%]'>
            <div className='mx-auto w-[90%] border-b border-slate-200'>
                <ul className='flex items-center justify-start gap-3 px-3 py-2'>
                    <li><Link href='/'>Home</Link></li>
                    <li><FaAngleRight /></li>
                    <li><Link href='/product'>Product</Link></li>
                </ul>
            </div>
        </section>

        <section className='w-[100%]'>
            <div className='mx-auto w-[90%] flex items-start justify-start pt-[4rem] pb-[5rem]'>
                
                {/*  */}
                <RightNav brands={brands} categories={categories} />

                {/* PRODUCT LIST */}
                <BrandProductList brand={brand} brandProducts={brandProducts} />
                
            </div>
        </section>
    </div>
  )
}
