import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { getBrandsAll } from '@/api/getBrands';
import { getCategoriesAll, getCategoryBySlug, getCategoryProductsBySlug} from '@/api/getCategory';
import CategoryProductList from './components/CategoryProductList';
import RightNav from '@/app/components/RightNav';




export default async function page({ params: {slug} }) {
    const [categories, category, categoryProducts, brands] = await Promise.all([
                                                    getCategoriesAll(),
                                                    getCategoryBySlug(slug), 
                                                    getCategoryProductsBySlug(slug), 
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
                    <li><Link href={`/category-product/${slug}`}>Category Products</Link></li>
                </ul>
            </div>
        </section>

        <section className='w-[100%]'>
            <div className='mx-auto w-[90%] flex items-start justify-start pt-[4rem] pb-[5rem]'>
                
                {/*  */}
                <RightNav brands={brands} categories={categories} />

                {/* PRODUCT LIST */}
                <CategoryProductList slug={slug} category={category} categoryProducts={categoryProducts} />
                
            </div>
        </section>
    </div>
  )
}
