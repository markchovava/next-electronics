import Slider from "./components/Slider";
import { RiCustomerService2Line } from 'react-icons/ri'
import { BiCheckShield } from 'react-icons/bi'
import { LiaShippingFastSolid } from 'react-icons/lia';
import { HiOutlineCubeTransparent } from 'react-icons/hi';
import Carousel from "./components/Carousel";
import Grid8 from "./components/Grid8";
import { getCategoryFeatured, getCategoryTopSelling } from "@/api/getCategory";




export default async function Home() {
    const [featuredCategory, topSellingCategory] = await Promise.all([
                                                    getCategoryFeatured(), 
                                                    getCategoryTopSelling(),
                                                  ]);


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

      {/* GRID */}
      <Grid8 featuredCategory={featuredCategory}  />
      {/* CAROUSEL */}
      <Carousel topSellingCategory={topSellingCategory} />
      

    </main>
  );
}
