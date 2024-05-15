import Link from 'next/link'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { FaAngleRight } from "react-icons/fa";
import ProductImageView from './components/ProductImageView';
import { getProduct } from '@/api/getProducts';
import ProductView from './components/ProductView';
import Featured4 from './components/Featured4';
import { getCategoryFeatured4 } from '@/api/getCategory';





export default async function page({ params: {id} }) {
    const [product, featuredCategory] = await Promise.all([getProduct(id), getCategoryFeatured4()]);


  return (
    <div>
        {/* Bread Crumbs */}
        <section className='w-[100%]'>
            <div className='mx-auto w-[90%] border-b border-slate-200'>
                <ul className='flex items-center justify-start gap-3 px-3 py-2'>
                    <li><Link href='/'>Home</Link></li>
                    <li><FaAngleRight /></li>
                    <li><Link href={`/product`}>All Products</Link></li>
                    <li><FaAngleRight /></li>
                    <li><Link href={`/product/${id}`}>Products</Link></li>
                </ul>
            </div>
        </section>

        <section className='w-[100%]'>
            <div className='mx-auto w-[90%] flex justify-start items-center pt-[2rem] pb-[3rem]'>
              {/* PRODUCT IMAGES */}  
              <ProductImageView product={product} />
              {/*  PRODUCT INFO */}
              <ProductView product={product} />
            </div>
        </section>

       
       <Featured4 featuredCategory={featuredCategory} />

    </div>
  )
}
