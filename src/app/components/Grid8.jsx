"use client";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { useState } from "react";
import { baseURL } from "@/api/baseURL";



export default function Grid8({ featuredCategory }) {
  const [data, setData] = useState(featuredCategory.data);
  const [category, setCategory] = useState(featuredCategory.category);
 
  return (
    <section className="w-[100%] pb-[4rem]">
        <div className="mx-auto w-[90%]">
          <section className="w-[100%] flex items-center justify-between pb-[1.5rem]">
            <h5 className="text-[2.5rem] font-semibold">
              {category.name}
            </h5>
            <Link 
              href={`/category/${category.id}`} 
              className="group flex items-center justify-start gap-1 text-orange-500 hover:text-orange-600">
              View More <BsArrowRight className="ease-in-out duration-200 transition-all group-hover:translate-x-2" />
            </Link>
          </section>
          <section className="w-[100%] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
            {/* COL */}
            {data.map((item, i) => (
              <div className="group overflow-hidden rounded-xl bg-white drop-shadow-lg">
                <div className="w-[100%] aspect-[5/4] overflow-hidden bg-orange-300">
                  <img src={baseURL + item?.product_images[0]?.image} className='w-[100%] h-[100%] object-fill group-hover:scale-110 transition-all duration-300 ease-in-out' />
                </div>
                <div className="w-[100%] px-3 py-4">
                  <Link href={`/product/${item.id}`} className="hover:text-orange-600">
                    <h5 className="font-semibold text-lg mb-2">
                      { item.name.length > 20 ? item.name.slice(0,20) + '...' : item.name }
                    </h5>
                  </Link>
                
                  <div className="w-[100%] flex items-center justify-center font-bold text-xl mb-4">
                    {item.price ? '$' + (item.price / 100).toFixed(2) : 'Not Added.'}
                  </div>
                  <div className="flex items-center justify-start">
                      <input 
                        type="number" 
                        placeholder="00"
                        className="w-[60%] rounded-l-xl outline-none bg-white border border-slate-300 h-[3rem] px-3" />
                      <button className="w-[40%] rounded-r-xl drop-shadow-md bg-gradient-to-br from-orange-400 to-pink-400 hover:bg-gradient-to-br hover:from-pink-400 hover:to-orange-400 text-white h-[3rem]">
                        Add to Cart</button>
                  </div>
                </div>
              </div>

            ))}
            
          </section>
        </div>

    </section>
  )
}
