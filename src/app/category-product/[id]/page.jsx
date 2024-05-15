import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { getBrandsAll } from '@/api/getBrands';
import { getCategoriesAll, getCategory, getCategoryProducts } from '@/api/getCategory';
import CategoryProductList from './components/CategoryProductList';
import RightNav from '@/app/components/RightNav';




export default async function page({ params: {id} }) {
    const [categories, category, categoryProducts, brands] = await Promise.all([
                                                    getCategoriesAll(), 
                                                    getCategory(id),
                                                    getCategoryProducts(id), 
                                                    getBrandsAll()
                                                ]);

  return (
    <div>
        {/* Bread Crumbs */}
        <section className='w-[100%]'>
            <div className='mx-auto w-[90%] border-b border-slate-200'>
                <ul className='flex items-center justify-start gap-3 px-3 py-2'>
                    <li><Link href='/'>Home</Link></li>
                    <li><FaAngleRight /></li>
                    <li><Link href={`/category-product/${id}`}>Category Products</Link></li>
                </ul>
            </div>
        </section>

        <section className='w-[100%]'>
            <div className='mx-auto w-[90%] flex items-start justify-start pt-[4rem] pb-[5rem]'>
                
                {/*  */}
                <RightNav brands={brands} categories={categories} />

                {/* PRODUCT LIST */}
                <CategoryProductList category={category} categoryProducts={categoryProducts} />
                
            </div>
        </section>
    </div>
  )
}
