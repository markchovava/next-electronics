"use client"
import { FaRegPlusSquare, FaSearch } from "react-icons/fa";
import { CgRemoveR } from "react-icons/cg";
import { useEffect, useState } from "react";
import axiosClientAPI from "@/api/axiosClientAPI";
import { tokenAuth } from "@/tokens/tokenAuth";
import { MainContextState } from "@/context/MainContext";
import { Bounce, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Loader from "@/app/components/Loader";




export default function ProductCategoryEdit({id}) {
    const router = useRouter();
    const [isSubmit, setIsSubmit] = useState(false);
    const {productCategoryState, productCategoryDispatch} = MainContextState();
    const [category, setCategory] = useState()
    const [productCats, setProductCats] = useState()
    const [data, setData] = useState([]);
    const [product, setProduct] = useState({});
    const [categoryComp, setCategoryComp] = useState([{key:0}])
    const { getAuthToken } = tokenAuth();
    const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getAuthToken()}`
    }};

    const addComponent = () => {
        let i =  categoryComp.length;
        setCategoryComp([...categoryComp, {key:i++}])
    }
    const subtractComponent = () => {
        setCategoryComp(categoryComp.slice(0, -1))
    }
    async function getCategory() {
        try{
          const result = await axiosClientAPI.get(`category/index-all`, config)
          .then((response) => {
            setCategory(response.data.data)
          })
        } catch (error) {
          console.error(`Error: ${error}`)
        }   
    } 
    /* GET PRODUCT */
    async function getProduct() {
        try{
          const result = await axiosClientAPI.get(`product/${id}`, config)
          .then((response) => {
            setProduct(response.data.data)
          })
        } catch (error) {
          console.error(`Error: ${error}`)
        }   
    } 
    async function getProductCategories(){
        try{
            const result = await axiosClientAPI.get(`product-category/by-product/${id}`, config)
            .then((response) => {
                if(response.data.status === 1){
                    setProductCats(response.data.data)
                    return;
                }
                console.log(response.data.message)
            })
          } catch (error) {
            console.error(`Error: ${error}`)
          }   
    } 
    /*  */
    async function deleteCategory(id){
        try{
            const result = await axiosClientAPI.delete(`product-category/${id}`, config)
            .then((response) => {
                getProductCategories();
                toast.success(response.data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
            })
          } catch (error) {
            console.error(`Error: ${error}`)
          }   
    } 
    
    async function postData(){

        console.log(productCategoryState.items)
        //setIsSubmit(false)
        if(productCategoryState.items.length > 0){
            const formData = {
                product_categories: productCategoryState.items
            }
            productCategoryDispatch({type: 'EMPTY_ITEM'})
            try{
                const result = await axiosClientAPI.post(`product-category`, formData, config)
                .then((response) => {
                    toast.success(response.data.message, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: Bounce,
                    });
                    router.push('/admin/product')
                    setIsSubmit(false)
                })
              } catch (error) {
                console.error(`Error: ${error}`)
                setIsSubmit(false)
              }  
        } else{
            router.push('/admin/product')
            toast.success('You are required to add a Category', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
            setIsSubmit(false)
        }
    }

    useEffect(() => {
        getProduct()
        getCategory();
        getProductCategories();
    }, []);

    useEffect(() => {
        isSubmit === true && postData();
    }, [isSubmit])

    

    if(!productCats && !product && !category){
        return (
          <Loader />
        )
      }

  return (
    <section className='w-[100%]'>
        <div className='w-[90%] mx-auto'>
            <h6 className="p-4 font-extrabold text-[2.6rem]">{product.name}</h6>
           <section className='w-[100%] bg-slate-100 border border-slate-300 font-extrabold flex items-center justify-start'>
                <div className='w-[80%] border-r border-slate-300 p-4'>CATEGORY</div>
                <div className='w-[20%] px-4 py-5 flex items-center justify-start'>
                   ACTION
                </div>
           </section>
           {/*  */}
           <div className="w-[100%] border border-slate-300">
                {productCats?.length > 0 &&
                    productCats.map((item, i) => (
                        <section key={i} className='w-[100%] flex items-center justify-start'>
                            <div className='w-[80%] p-4'>{item.category?.name}</div>
                            <div className='w-[20%] px-4 py-5 flex items-center justify-start gap-4'>
                                <CgRemoveR 
                                    onClick={() => deleteCategory(item.id)}  
                                    className='text-xl hover:scale-110 hover:text-red-600 transition-all duration-150 ease-in-out' /> 
                            </div>
                        </section>
                    ))
                }
           </div>

                <div className="w-[100%]">
                    <section className='w-[100%] border-x border-t border-slate-300 font-extrabold pb-4 '>
                        <div className="w-[100%] flex items-center justify-start mb-8">
                            <h6 className="w-[80%] mb-3 px-4 pt-4 font-extrabold">Add Category</h6>
                             <div className='w-[20%] px-4 py-5 flex items-center justify-start gap-4'>
                                <FaRegPlusSquare
                                    onClick={() => addComponent()} 
                                    className='text-xl hover:scale-110 text-slate-800 hover:text-green-600 transition-all duration-150 ease-in-out' />
                                <CgRemoveR   
                                    onClick={() => {
                                        productCategoryDispatch({type: 'REMOVE_ITEM'})
                                        subtractComponent()
                                    }} 
                                    className='text-xl hover:scale-110 hover:text-red-600 transition-all duration-150 ease-in-out' /> 
                            </div>
                        </div>
                       
                        {/* COMPONENTS */}
                        { categoryComp.map((item, key) => (
                            <div key={key} className="w-[100%] flex items-center justify-start mb-8">
                                <div className='w-[80%] px-4'>
                                    <div className="flex items-center justify-start">
                                        <select
                                            onChange={(e) => (
                                                productCategoryDispatch({
                                                    type: 'ADD_CATEGORY', 
                                                    payload: {
                                                        id: key++,
                                                        product_id: product.id, 
                                                        category_id: e.target.value}
                                                    })
                                                )
                                            }
                                            className="w-[100%] h-[3.5rem] font-normal p-3 rounded-lg outline-none border border-slate-300">
                                            <option>Select an option.</option>
                                            {category?.length > 0 &&
                                                category.map((item, i) => (
                                                    <option key={i} value={item.id}>{item.name}</option>
                                                ))
                                            }

                                        </select>
                                    </div>
                                </div>
                                <div className="w-[20%] px-4 py-5 flex items-center justify-start gap-4">
                                   
                                </div>
                               
                            </div>   
                            ))
                        }


                      
                         
                        <section className="w-[100%] flex items-center justify-center mb-12">
                            <button
                                onClick={() => setIsSubmit(true)} 
                                className='px-[8rem] py-5 font-normal text-white rounded-lg transition-all duration-200 ease-in-out bg-gradient-to-br from-orange-500 to-pink-500 hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-600'>
                                {isSubmit == true ? 'Processing' : 'Submit'}
                            </button>
                            
                        </section>
                    </section>
                </div>


              
            
        </div>
    </section>
  )
}
