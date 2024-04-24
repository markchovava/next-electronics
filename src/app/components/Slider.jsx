"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';
import { BsArrowRight } from "react-icons/bs";



export default function Slider() {
  return (
    <div className='w-[100%] relative z-0'>
        <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        navigation
        effect
        pagination={{
          clickable: true,
        }}
        speed={1500}
        loop={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: true,
        }}
        className='z-[-100]'
        slidesPerView={1}
       /*  onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)} */ >
        <SwiperSlide>
          <div 
            style={{ backgroundImage: `url('/assets/img/slider/01.jpg')`}}
            className='w-full h-[34rem] bg-no-repeat bg-cover'>
            <section className='mx-auto w-[94%] h-[100%] flex flex-col items-start justify-center'>
                <h5 className='px-3 py-2 text-[3.5rem] font-bold leading-none w-[50%]'>
                    Lorem ipsum dolor sit amet.
                </h5>
                <p className='px-3 py-2 w-[50%] mb-[1.5rem]'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo quaerat 
                    dignissimos sequi impedit excepturi vero fugit eum ab qui numquam.
                </p>
                <div className='px-3 py-2'>
                    <Link href='#' className='py-5 px-12 flex items-center justify-center gap-2 group rounded-lg text-white bg-gradient-to-br from-orange-400 to-pink-400 hover:from-pink-400 hover:to-orange-400 drop-shadow-lg'>
                        Shop Now <BsArrowRight className='group-hover:translate-x-2 transition-all duration-150 ease-in-out' />
                    </Link>
                </div>
            </section>
          </div>
        </SwiperSlide>
       
        <SwiperSlide>
          <div 
            style={{ backgroundImage: `url('/assets/img/slider/02.jpg')`}}
            className='w-full h-[34rem] bg-cover bg-gradient-to-br from-pink-200 to-pink-500'>
            <section className='mx-auto w-[94%] h-[100%] flex flex-col items-end justify-center'>
                <h5 className='px-3 py-2 text-[3.5rem] text-end font-bold leading-none w-[45%]'>
                    Lorem ipsum dolor sit amet.
                </h5>
                <p className='px-3 py-2 w-[45%] mb-[1.5rem] text-end'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo quaerat 
                    dignissimos sequi impedit excepturi vero fugit eum ab qui numquam.
                </p>
                <div className='px-3 py-2 flex justify-end w-[45%]'>
                    <Link href='#' className='py-5 px-12 flex items-center justify-center gap-2 group rounded-lg text-white bg-gradient-to-br from-orange-400 to-pink-400 hover:from-pink-400 hover:to-orange-400 drop-shadow-lg'>
                        Shop Now <BsArrowRight className='group-hover:translate-x-2 transition-all duration-150 ease-in-out' />
                    </Link>
                </div>
            </section>
            
          </div>
        </SwiperSlide>
        {/*  */}
        <SwiperSlide>
          <div 
            style={{ backgroundImage: `url('/assets/img/slider/03.jpg')`}}
            className='w-full h-[34rem] bg-cover bg-gradient-to-br from-pink-200 to-pink-500'>
            <section className='mx-auto w-[94%] h-[100%] flex flex-col items-start justify-center'>
                <h5 className='px-3 py-2 text-[3.5rem] font-bold leading-none w-[50%]'>
                    Lorem ipsum dolor sit amet.
                </h5>
                <p className='px-3 py-2 w-[50%] mb-[1.5rem]'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo quaerat 
                    dignissimos sequi impedit excepturi vero fugit eum ab qui numquam.
                </p>
                <div className='px-3 py-2'>
                    <Link href='#' className='py-5 px-12 flex items-center justify-center gap-2 group rounded-lg text-white bg-gradient-to-br from-orange-400 to-pink-400 hover:from-pink-400 hover:to-orange-400 drop-shadow-lg'>
                        Shop Now <BsArrowRight className='group-hover:translate-x-2 transition-all duration-150 ease-in-out' />
                    </Link>
                </div>
            </section>
          </div>
        </SwiperSlide>
       
      </Swiper>
    </div>
  )
}
