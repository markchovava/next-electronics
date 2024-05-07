"use client"
import axiosClientAPI from '@/api/axiosClientAPI';
import { baseURL } from '@/api/baseURL';
import Loader from '@/app/components/Loader';
import { MainContextState } from '@/context/MainContext';
import { tokenAuth } from '@/tokens/tokenAuth';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { toast, Bounce } from 'react-toastify';



export default function ProductEdit({id}) {
    const router = useRouter();
    const { productDispatch, productState } = MainContextState()
    const [data, setData] = useState();
    const [imageId, setImageId] = useState({})
    const [image, setImage] = useState({});
    const [brand, setBrand] = useState();
    const [isSubmit, setIsSubmit] = useState(false);
    const { getAuthToken } = tokenAuth()
    const config = {
        headers: {
            "Content-Type": "multipart/form-data",
            'Authorization': `Bearer ${getAuthToken()}`
    }};

    const handleInput = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    /* GET DATA */
    async function getData() {
        try{
          const result = await axiosClientAPI.get(`product/${id}`, config)
          .then((response) => {
            setData(response.data.data)
            setImage(() => ({
                image1: response.data.data.product_images[0]?.image ? baseURL + response.data.data.product_images[0].image : '',
                image2: response.data.data.product_images[1]?.image ? baseURL + response.data.data.product_images[1].image : '',
                image3: response.data.data.product_images[2]?.image ? baseURL + response.data.data.product_images[2].image : '',
                image4: response.data.data.product_images[3]?.image ? baseURL + response.data.data.product_images[3].image : '',
                image5: response.data.data.product_images[4]?.image ? baseURL + response.data.data.product_images[4].image : '',
            }))
            /* setImage({
                image1: response.data.data.product_images[0].image ? baseURL + response.data.data.product_images[0].image : '',
                image2: response.data.data.product_images[1].image ? baseURL + response.data.data.product_images[1].image : '',
                image3: response.data.data.product_images[2].image ? baseURL + response.data.data.product_images[2].image : '',
                image4: response.data.data.product_images[3].image ? baseURL + response.data.data.product_images[3].image : '',
                image5: response.data.data.product_images[4].image ? baseURL + response.data.data.product_images[4].image : '',
            }) */
            /* Image Id to be used for deletion */
            setImageId(() => ({
                image1: response.data.data.product_images[0]?.id ? response.data.data.product_images[0].id : null,
                image2: response.data.data.product_images[1]?.id ? response.data.data.product_images[1].id : null,
                image3: response.data.data.product_images[2]?.id ? response.data.data.product_images[2].id : null,
                image4: response.data.data.product_images[3]?.id ? response.data.data.product_images[3].id : null,
                image5: response.data.data.product_images[4]?.id ? response.data.data.product_images[4].id : null,
            }));
          })
        } catch (error) {
          console.error(`Error: ${error}`)
        }   
    } 

    /* GET DATA */
    async function getBrand() {
        try{
          const result = await axiosClientAPI.get(`brand`, config)
          .then((response) => {
            setBrand(response.data.data)
          })
        } catch (error) {
          console.error(`Error: ${error}`)
        }   
    }
    
    
    const deleteImage = async (img_id) => {
        try{
            const result = await axiosClientAPI.delete(`product-image/${img_id}`, config)
            .then((response) => {
                toast.success('Previous image removed successfully.', {
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
              //getData();
            })
          } catch (error) {
            console.error(`Error: ${error}`)
          }   
    }

    /* POST DATA */
    async function postData(){
        let images = []; 
        for(let i = 0; i < productState?.images.length; i++ ){
            let item = productState?.images[i];
            if(item.image){
                images = [...images, item.image];
            }
        }
        const formData = {
            name: data?.name,
            code: data?.code,
            priority: data?.priority,
            brand_id: data?.brand_id ? data?.brand_id : 0,
            condition: data?.condition,
            source: data?.source,
            price: data?.price,
            short_description: data?.short_description,
            description: data?.description,
            product_images: images
        }

        try{
            const result = await axiosClientAPI.post(`product/${id}`, formData, config)
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
                router.push(`/admin/product/${id}`);
                setIsSubmit(false)
                }
            );    
            } catch (error) {
                console.error(`Error: ${error}`);
                console.error(`Error Message: ${error.message}`);
                console.error(`Error Response: ${error.response}`);
                setIsSubmit(false);
            } 
        
    }
    
    useEffect(() => {
        getBrand();
        getData();
    },[]);

    useEffect(() => {
        isSubmit === true && postData()
    }, [isSubmit]);

    if(!data){
        return ( 
            <Loader />
        )
    }



  return (
    <section className='w-[100%]'>
    <div className='mx-auto w-[90%]'>
        {/* PRODUCT NAME */}
        <div className='mb-6'>
            <h6 className='mb-2'>Name:</h6>
            <input 
                type='text' 
                name='name'
                onChange={handleInput}
                value={data.name}
                placeholder='Enter Name here...'
                className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300'/>
        </div>
        {/* PRODUCT CODE */}
        <div className='mb-6'>
            <h6 className='mb-2'>Code:</h6>
            <input 
                type='text' 
                name='code'
                onChange={handleInput}
                value={data.code}
                placeholder='Enter Code here...'
                className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300'/>
        </div>
        {/*  */}
        <div className='flex items-center justify-start gap-6 mb-6'>
            {/* Priority */}
            <div className='w-[50%]'>
                <h6 className='mb-2'>Priority:</h6>
                <select
                    name='priority'
                    placeholder=''
                    onChange={handleInput}
                    className='w-[100%] rounded-lg outline-none px-4 py-4 border border-slate-300'>
                    <option value={0}>Select a priority.</option>
                    <option value='1' selected={data.priority == 1 && 'selected'}>1</option>
                    <option value='2' selected={data.priority == 2 && 'selected'}>2</option>
                    <option value='3' selected={data.priority == 3 && 'selected'}>3</option>
                    <option value='4' selected={data.priority == 4 && 'selected'}>4</option>
                    <option value='5' selected={data.priority == 5 && 'selected'}>5</option>
                    <option value='6' selected={data.priority == 6 && 'selected'}>6</option>
                    <option value='7' selected={data.priority == 7 && 'selected'}>7</option>
                    <option value='8' selected={data.priority == 8 && 'selected'}>8</option>
                </select>
            </div>
             {/* PRICE */}
            <div className='w-[50%]'>
                <h6 className='mb-2'>Price (cents):</h6>
                <input 
                    type='number'
                    name='price'
                    value={data.price}
                    onChange={handleInput} 
                    placeholder='Enter Price here...'
                    className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300'/>
            </div>
        </div>
        {/*  */}
        <div className='flex items-center justify-start gap-6'>
            {/* CONDITION */}
            <div className='w-[50%] mb-6'>
                <h6 className='mb-2'>Product Condition:</h6>
                <input 
                    type='text'
                    name='condition'
                    value={data.condition}
                    onChange={handleInput} 
                    placeholder='Enter Condition here...'
                    className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300'/>
            </div>
            {/* Product Source */}
            <div className='w-[50%] mb-6'>
                <h6 className='mb-2'>Product Source:</h6>
                <input 
                    type='text'
                    name='source'
                    value={data.source}
                    onChange={handleInput} 
                    placeholder='Enter Source here...'
                    className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300'/>
            </div>
        </div>  
         {/* PRODUCT SHORT DESCRIPTION */}
         <div className='mb-6'>
            <h6 className='mb-2'>Short Description:</h6>
            <input 
                name='short_description'
                value={data.short_description}
                onChange={handleInput} 
                placeholder='Enter Short description here...'
                type='text' 
                className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300'/>
        </div>
        {/* DESCRIPTION */}
        <div className='mb-6'>
            <h6 className='mb-2'>Description:</h6>
            <textarea 
                type='text'
                name='description'
                value={data.description}
                onChange={handleInput} 
                placeholder='Enter Long description here...'
                className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300'></textarea>
        </div>
        {/* Brand */}
        {brand && 
            <div className='mb-6'>
                <h6 className='mb-2'>Brand:</h6>
                <select
                    name='brand_id'
                    onChange={handleInput}
                    className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300 mb-3'>
                    <option value={0}>Select a Brand.</option>
                    {brand.map((item, i) => (
                        <option key={i} value={item.id} selected={item.id === data.brand_id && 'selected'}>
                            {item.name}</option>
                    ))}
                </select>
            </div>
        }
        {/* IMAGES */}
        <div className='mb-8'>
            <h6 className='mb-2'>Images:</h6>
            <div className='w-[100%] grid grid-cols-4 gap-8'>
                {/* COL 1 */}
                <div className='w-[100%] bg-white'>
                    <input 
                        type='file'
                        name='image1'
                        onChange={(e) => {
                            setImage({...image, image1: URL.createObjectURL(e.target.files[0])});
                            productDispatch({type: 'ADD_IMAGE', payload: {id: 1, image: e.target.files[0]} });
                            imageId.image1 && deleteImage(imageId.image1);
                        }} 
                        className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300 mb-3' />
                    <div className="mb-4 bg-slate-100 drop-shadow-lg rounded-lg overflow-hidden w-[100%] aspect-[5/4]">
                        <img src={image.image1} className="w-[100%] object-cover" alt='Image' />
                    </div>
                    
                </div>
                {/* COL 2 */}
                <div className='w-[100%] bg-white'>
                    <input 
                        type='file'
                        name='image2'
                        onChange={(e) => {
                            setImage({...image, image2: URL.createObjectURL(e.target.files[0])})
                            productDispatch({type: 'ADD_IMAGE', payload: {id: 2, image: e.target.files[0]} })
                            imageId.image2 && deleteImage(imageId.image2);
                        }}  
                        className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300 mb-3' />
                    <div className="mb-4 bg-slate-100 drop-shadow-lg rounded-lg overflow-hidden w-[100%] aspect-[5/4]">
                        <img src={image.image2} className="w-[100%] object-cover" alt='Image' />
                    </div>
                    
                </div>
                {/* COL */}
                <div className='w-[100%] bg-white'>
                    <input 
                        type='file' 
                        name='image3'
                        onChange={(e) => {
                            setImage({...image, image3: URL.createObjectURL(e.target.files[0])})
                            productDispatch({type: 'ADD_IMAGE', payload: {id: 3, image: e.target.files[0]} });
                            imageId.image3 && deleteImage(imageId.image3);
                        }} 
                        className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300 mb-3' />
                    <div className="mb-4 bg-slate-100 drop-shadow-lg rounded-lg overflow-hidden w-[100%] aspect-[5/4]">
                        <img src={image.image3} className="w-[100%] object-cover" alt='Image' />
                    </div>
                    
                </div>
                {/* COL 4 */}
                <div className='w-[100%] bg-white'>
                    <input 
                        type='file'
                        name='image4' 
                        onChange={(e) => {
                            setImage({...image, image4: URL.createObjectURL(e.target.files[0])})
                            productDispatch({type: 'ADD_IMAGE', payload: {id: 4, image: e.target.files[0]} })
                            imageId.image4 && deleteImage(imageId.image4)
                        }}
                        className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300 mb-3' />
                    <div className="mb-4 bg-slate-100 drop-shadow-lg rounded-lg overflow-hidden w-[100%] aspect-[5/4]">
                        <img src={image.image4} className="w-[100%] object-cover" alt='Image' />
                    </div>
                    
                </div>
                {/* COL 5 */}
                <div className='w-[100%] bg-white'>
                    <input 
                        type='file'
                        name='image5'
                        onChange={(e) => {
                            setImage({...image, image5: URL.createObjectURL(e.target.files[0])})
                            productDispatch({type: 'ADD_IMAGE', payload: {id: 5, image: e.target.files[0]} })
                            imageId.image5 && deleteImage(imageId.image5)
                        }} 
                        className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300 mb-3' />
                    <div className="mb-4 bg-slate-100 drop-shadow-lg rounded-lg overflow-hidden w-[100%] aspect-[5/4]">
                        <img src={image.image5} className="w-[100%] object-cover" alt='Image' />
                    </div>
                   
                </div>
               
            </div>   
        </div>
        <div className='flex items-center justify-center pb-[4rem]'>
            <button
                onClick={() => setIsSubmit(true)} 
                className='px-[8rem] py-5 text-white rounded-lg transition-all duration-200 ease-in-out bg-gradient-to-br from-orange-500 to-pink-500 hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-600'>
                {isSubmit == true ? 'Processing' : 'Submit'}
            </button>
        </div>
    </div>
</section>
  )
}
