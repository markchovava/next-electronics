import Slider from "./components/Slider";
import { RiCustomerService2Line } from 'react-icons/ri'
import { BiCheckShield } from 'react-icons/bi'
import { LiaShippingFastSolid } from 'react-icons/lia';
import { HiOutlineCubeTransparent } from 'react-icons/hi';
import { GoDotFill } from 'react-icons/go';
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";



export default function Home() {
  return (
    <main>
      <Slider />

      <section className="w-[100%] pt-[4rem] pb-[4rem]">
        <div className="mx-auto w-[94%] border border-slate-300 bg-white drop-shadow-md flex justify-start gap-3 items-center">
          {/*  */}
          <div className="w-[25%] border-r border-slate-300 gap-1 px-3 py-2 flex items-center justify-start">
            <div>
              <RiCustomerService2Line className="text-[3rem]" />
            </div>
            <div className="px-3 py-2">
              <h5 className="font-semibold text-lg">Responsive</h5>
              <p>Customer Service availble 24/7.</p>
            </div>
          </div>
          {/*  */}
          <div className="w-[25%] border-r border-slate-300 gap-1 px-3 py-2 flex items-center justify-start">
            <div>
              <BiCheckShield className="text-[3rem]" />
            </div>
            <div className="px-3 py-2">
              <h5 className="font-semibold text-lg">Responsive</h5>
              <p>Customer Service availble 24/7.</p>
            </div>
          </div>
          {/*  */}
          <div className="w-[25%] border-r border-slate-300 gap-1 px-3 py-2 flex items-center justify-start">
            <div>
              <LiaShippingFastSolid className="text-[3rem]" />
            </div>
            <div className="px-3 py-2">
              <h5 className="font-semibold text-lg">Shipping</h5>
              <p>Fast and reliable.</p>
            </div>
          </div>
          {/*  */}
          <div className="w-[25%] gap-1 px-3 py-2 flex items-center justify-start">
            <div>
              <HiOutlineCubeTransparent className="text-[3rem]" />
            </div>
            <div className="px-3 py-2">
              <h5 className="font-semibold text-lg">Shipping</h5>
              <p>Fast and reliable.</p>
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <section className="w-[100%] pb-[4rem]">
        <div className="mx-auto w-[90%]">
          <section className="w-[100%] flex items-center justify-between pb-[1.5rem]">
            <h5 className="text-[2.5rem] font-semibold">
              Featured Products
            </h5>
            <button className="group flex items-center justify-start gap-1 text-orange-500 hover:text-orange-600">
              View More <BsArrowRight className="ease-in-out duration-200 transition-all group-hover:translate-x-2" />
            </button>
          </section>
          <section className="w-[100%] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
            {/*  */}
            <div className="overflow-hidden rounded-xl bg-white drop-shadow-lg">
              <div className="w-[100%] aspect-[5/4] bg-orange-300">Image</div>
              <div className="w-[100%] px-3 py-4">
                <Link href='/product/1' className="hover:text-orange-600">
                  <h5 className="font-semibold text-lg mb-2">
                    Product Name Lorem ipsum dolor sit amet. Product Name 
                  </h5>
                </Link>
                <ul className="list-disc mb-4">
                  <li className="flex items-center justify-start gap-2 mb-1">
                    <GoDotFill className="text-orange-500" />
                    <span>We are one</span>
                  </li>
                  <li className="flex items-center justify-start gap-2 mb-1">
                    <GoDotFill className="text-orange-500" />
                    <span>We are one</span>
                  </li>
                  <li className="flex items-center justify-start gap-2 mb-1">
                    <GoDotFill className="text-orange-500" />
                    <span>We are one</span>
                  </li>
                  <li className="flex items-center justify-start gap-2 mb-1">
                    <GoDotFill className="text-orange-500" />
                    <span>We are one</span>
                  </li>
                </ul>
                <div className="w-[100%] flex items-center justify-center font-bold text-xl mb-4">
                  $75.00
                </div>
                <div className="flex items-center justify-start">
                    <input 
                      type="number" 
                      placeholder="9"
                      className="w-[60%] rounded-l-xl outline-none bg-white border border-slate-300 h-[3rem] px-3" />
                    <button className="w-[40%] rounded-r-xl drop-shadow-md bg-gradient-to-br from-orange-400 to-pink-400 hover:bg-gradient-to-br hover:from-pink-400 hover:to-orange-400 text-white h-[3rem]">
                      Add to Cart</button>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="overflow-hidden rounded-xl bg-white drop-shadow-lg">
              <div className="w-[100%] aspect-[5/4] bg-orange-300">Image</div>
              <div className="w-[100%] px-3 py-4">
                <Link href='/product/1' className="hover:text-orange-600">
                  <h5 className="font-semibold text-lg mb-2">
                    Product Name Lorem ipsum dolor sit amet. Product Name 
                  </h5>
                </Link>
                <ul className="list-disc mb-4">
                  <li className="flex items-center justify-start gap-2 mb-1">
                    <GoDotFill className="text-orange-500" />
                    <span>We are one</span>
                  </li>
                  <li className="flex items-center justify-start gap-2 mb-1">
                    <GoDotFill className="text-orange-500" />
                    <span>We are one</span>
                  </li>
                  <li className="flex items-center justify-start gap-2 mb-1">
                    <GoDotFill className="text-orange-500" />
                    <span>We are one</span>
                  </li>
                  <li className="flex items-center justify-start gap-2 mb-1">
                    <GoDotFill className="text-orange-500" />
                    <span>We are one</span>
                  </li>
                </ul>
                <div className="w-[100%] flex items-center justify-center font-bold text-xl mb-4">
                  $75.00
                </div>
                <div className="flex items-center justify-start">
                    <input 
                      type="number" 
                      placeholder="0"
                      className="w-[60%] rounded-l-xl outline-none bg-white border border-slate-300 h-[3rem] px-3" />
                    <button className="w-[40%] rounded-r-xl drop-shadow-md bg-gradient-to-br from-orange-400 to-pink-400 hover:bg-gradient-to-br hover:from-pink-400 hover:to-orange-400 text-white h-[3rem]">
                      Add to Cart</button>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="overflow-hidden rounded-xl bg-white drop-shadow-lg">
              <div className="w-[100%] aspect-[5/4] bg-orange-300">Image</div>
              <div className="w-[100%] px-3 py-4">
                <Link href='/product/1' className="hover:text-orange-600">
                  <h5 className="font-semibold text-lg mb-2">
                    Product Name Lorem ipsum dolor sit amet. Product Name 
                  </h5>
                </Link>
                <ul className="list-disc mb-4">
                  <li className="flex items-center justify-start gap-2 mb-1">
                    <GoDotFill className="text-orange-500" />
                    <span>We are one</span>
                  </li>
                  <li className="flex items-center justify-start gap-2 mb-1">
                    <GoDotFill className="text-orange-500" />
                    <span>We are one</span>
                  </li>
                  <li className="flex items-center justify-start gap-2 mb-1">
                    <GoDotFill className="text-orange-500" />
                    <span>We are one</span>
                  </li>
                  <li className="flex items-center justify-start gap-2 mb-1">
                    <GoDotFill className="text-orange-500" />
                    <span>We are one</span>
                  </li>
                </ul>
                <div className="w-[100%] flex items-center justify-center font-bold text-xl mb-4">
                  $75.00
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
            {/*  */}
            <div className="overflow-hidden rounded-xl bg-white drop-shadow-lg">
              <div className="w-[100%] aspect-[5/4] bg-orange-300">Image</div>
              <div className="w-[100%] px-3 py-4">
                <Link href='/product/1' className="hover:text-orange-600">
                  <h5 className="font-semibold text-lg mb-2">
                    Product Name Lorem ipsum dolor sit amet. Product Name 
                  </h5>
                </Link>
                <ul className="list-disc mb-4">
                  <li className="flex items-center justify-start gap-2 mb-1">
                    <GoDotFill className="text-orange-500" />
                    <span>We are one</span>
                  </li>
                  <li className="flex items-center justify-start gap-2 mb-1">
                    <GoDotFill className="text-orange-500" />
                    <span>We are one</span>
                  </li>
                  <li className="flex items-center justify-start gap-2 mb-1">
                    <GoDotFill className="text-orange-500" />
                    <span>We are one</span>
                  </li>
                  <li className="flex items-center justify-start gap-2 mb-1">
                    <GoDotFill className="text-orange-500" />
                    <span>We are one</span>
                  </li>
                </ul>
                <div className="w-[100%] flex items-center justify-center font-bold text-xl mb-4">
                  $75.00
                </div>
                <div className="flex items-center justify-start">
                    <input 
                      type="number" 
                      placeholder="0"
                      className="w-[60%] rounded-l-xl outline-none bg-white border border-slate-300 h-[3rem] px-3" />
                    <button className="w-[40%] rounded-r-xl drop-shadow-md bg-gradient-to-br from-orange-400 to-pink-400 hover:bg-gradient-to-br hover:from-pink-400 hover:to-orange-400 text-white h-[3rem]">
                      Add to Cart</button>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="overflow-hidden rounded-xl bg-white drop-shadow-lg">
              <div className="w-[100%] aspect-[5/4] bg-orange-300">Image</div>
              <div className="w-[100%] px-3 py-4">
                <Link href='/product/1' className="hover:text-orange-600">
                  <h5 className="font-semibold text-lg mb-2">
                    Product Name Lorem ipsum dolor sit amet. Product Name 
                  </h5>
                </Link>
                <ul className="list-disc mb-4">
                  <li className="flex items-center justify-start gap-2 mb-1">
                    <GoDotFill className="text-orange-500" />
                    <span>We are one</span>
                  </li>
                  <li className="flex items-center justify-start gap-2 mb-1">
                    <GoDotFill className="text-orange-500" />
                    <span>We are one</span>
                  </li>
                  <li className="flex items-center justify-start gap-2 mb-1">
                    <GoDotFill className="text-orange-500" />
                    <span>We are one</span>
                  </li>
                  <li className="flex items-center justify-start gap-2 mb-1">
                    <GoDotFill className="text-orange-500" />
                    <span>We are one</span>
                  </li>
                </ul>
                <div className="flex items-center justify-start">
                    <input 
                      type="number" 
                      placeholder="9"
                      className="w-[60%] rounded-l-xl outline-none bg-white border border-slate-300 h-[3rem] px-3" />
                    <button className="w-[40%] rounded-r-xl drop-shadow-md bg-gradient-to-br from-orange-400 to-pink-400 hover:bg-gradient-to-br hover:from-pink-400 hover:to-orange-400 text-white h-[3rem]">
                      Add to Cart</button>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="overflow-hidden rounded-xl bg-white drop-shadow-lg">
              <div className="w-[100%] aspect-[5/4] bg-orange-300">Image</div>
              <div className="w-[100%] px-3 py-4">
                <Link href='/product/1' className="hover:text-orange-600">
                  <h5 className="font-semibold text-lg mb-2">
                    Product Name Lorem ipsum dolor sit amet. Product Name 
                  </h5>
                </Link>
                <ul className="list-disc mb-4">
                  <li className="flex items-center justify-start gap-2 mb-1">
                    <GoDotFill className="text-orange-500" />
                    <span>We are one</span>
                  </li>
                  <li className="flex items-center justify-start gap-2 mb-1">
                    <GoDotFill className="text-orange-500" />
                    <span>We are one</span>
                  </li>
                  <li className="flex items-center justify-start gap-2 mb-1">
                    <GoDotFill className="text-orange-500" />
                    <span>We are one</span>
                  </li>
                  <li className="flex items-center justify-start gap-2 mb-1">
                    <GoDotFill className="text-orange-500" />
                    <span>We are one</span>
                  </li>
                </ul>
                <div className="flex items-center justify-start">
                    <input 
                      type="number" 
                      placeholder="0"
                      className="w-[60%] rounded-l-xl outline-none bg-white border border-slate-300 h-[3rem] px-3" />
                    <button className="w-[40%] rounded-r-xl drop-shadow-md bg-gradient-to-br from-orange-400 to-pink-400 hover:bg-gradient-to-br hover:from-pink-400 hover:to-orange-400 text-white h-[3rem]">
                      Add to Cart</button>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="overflow-hidden rounded-xl bg-white drop-shadow-lg">
              <div className="w-[100%] aspect-[5/4] bg-orange-300">Image</div>
              <div className="w-[100%] px-3 py-4">
                <Link href='/product/1' className="hover:text-orange-600">
                  <h5 className="font-semibold text-lg mb-2">
                    Product Name Lorem ipsum dolor sit amet. Product Name 
                  </h5>
                </Link>
                <ul className="list-disc mb-4">
                  <li className="flex items-center justify-start gap-2 mb-1">
                    <GoDotFill className="text-orange-500" />
                    <span>We are one</span>
                  </li>
                  <li className="flex items-center justify-start gap-2 mb-1">
                    <GoDotFill className="text-orange-500" />
                    <span>We are one</span>
                  </li>
                  <li className="flex items-center justify-start gap-2 mb-1">
                    <GoDotFill className="text-orange-500" />
                    <span>We are one</span>
                  </li>
                  <li className="flex items-center justify-start gap-2 mb-1">
                    <GoDotFill className="text-orange-500" />
                    <span>We are one</span>
                  </li>
                </ul>
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
            {/*  */}
            <div className="overflow-hidden rounded-xl bg-white drop-shadow-lg">
              <div className="w-[100%] aspect-[5/4] bg-orange-300">Image</div>
              <div className="w-[100%] px-3 py-4">
                <Link href='/product/1' className="hover:text-orange-600">
                  <h5 className="font-semibold text-lg mb-2">
                    Product Name Lorem ipsum dolor sit amet. Product Name 
                  </h5>
                </Link>
                <ul className="list-disc mb-4">
                  <li className="flex items-center justify-start gap-2 mb-1">
                    <GoDotFill className="text-orange-500" />
                    <span>We are one</span>
                  </li>
                  <li className="flex items-center justify-start gap-2 mb-1">
                    <GoDotFill className="text-orange-500" />
                    <span>We are one</span>
                  </li>
                  <li className="flex items-center justify-start gap-2 mb-1">
                    <GoDotFill className="text-orange-500" />
                    <span>We are one</span>
                  </li>
                  <li className="flex items-center justify-start gap-2 mb-1">
                    <GoDotFill className="text-orange-500" />
                    <span>We are one</span>
                  </li>
                </ul>
                <div className="flex items-center justify-start">
                    <input 
                      type="number" 
                      placeholder="0"
                      className="w-[60%] rounded-l-xl outline-none bg-white border border-slate-300 h-[3rem] px-3" />
                    <button className="w-[40%] rounded-r-xl drop-shadow-md bg-gradient-to-br from-orange-400 to-pink-400 hover:bg-gradient-to-br hover:from-pink-400 hover:to-orange-400 text-white h-[3rem]">
                      Add to Cart</button>
                </div>
              </div>
            </div>
          </section>
        </div>

      </section>

    </main>
  );
}
