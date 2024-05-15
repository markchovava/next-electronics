import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import ProductList from './components/ProductList';
import { getProducts } from '@/api/getProducts';
import RightNav from '../components/RightNav';
import { getCategoriesAll } from '@/api/getCategory';
import { getBrandsAll } from '@/api/getBrands';




export default async function page() {
    const [products, categories, brands] = await Promise.all([
        getProducts(), getCategoriesAll(), getBrandsAll()
    ]);

  return (
    <div>
        {/* Bread Crumbs */}
        <section className='w-[100%]'>
            <div className='mx-auto w-[90%] border-b border-slate-200'>
                <ul className='flex items-center justify-start gap-3 px-3 py-2'>
                    <li><Link href='/'>Home</Link></li>
                    <li><FaAngleRight /></li>
                    <li><Link href='/product'>All Products</Link></li>
                </ul>
            </div>
        </section>

        <section className='w-[100%]'>
            <div className='mx-auto w-[90%] flex items-start justify-start pt-[4rem] pb-[5rem]'>
                
                {/*  */}
                <RightNav brands={brands} categories={categories} />

                {/* PRODUCT LIST */}
                <ProductList products={products} />
                
            </div>
        </section>
    </div>
  )
}
