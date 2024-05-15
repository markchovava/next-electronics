import React from 'react'

export default function About() {
  return (
    <section className='w-[100%]'>
        <div className='w-[90%] mx-auto pb-[4rem]'>

            <section className='w-[100%] flex items-center justify-start mb-[4rem]'>
                <div className='w-[50%] p-5'>
                    <div className='w-[100%] aspect-[5/3] drop-shadow-lg bg-white rounded-lg'>
                        <img src='./assets/img/about/02.jpg' className='w-[100%] h-[100%] object-cover' />
                    </div>
                </div>
                <div className='w-[50%] p-4 text-lg'>
                    <h6 className='text-[3rem] font-extrabold mb-[2rem]'>Introduction</h6>
                    <p className='mb-4'>
                        At [Your Company Name], we're passionate about bringing high-quality 
                        [Product Category] to the people of Harare. We've been serving the community 
                        since [Year Established] and take pride in offering a wide selection of 
                        [Products] to meet your needs.
                    </p>
                    <p className='mb-4'>
                        Whether you're looking for [Specific Product Examples] or something else entirely, our 
                        friendly and knowledgeable staff are here to assist you. We are committed to providing 
                        exceptional customer service and ensuring you find the perfect product at a competitive price.
                    </p>

                </div>
            </section>


            <section className='w-[100%] flex items-center flex-row-reverse justify-start'>
                <div className='w-[50%] p-5'>
                    <div className='w-[100%] aspect-[5/3] drop-shadow-lg bg-white rounded-lg'>
                        <img src='./assets/img/about/02.jpg' className='w-[100%] h-[100%] object-cover' />
                    </div>
                </div>
                <div className='w-[50%] p-4 text-lg'>
                    <h6 className='text-[3rem] font-extrabold mb-[2rem]'>Here's what sets us apart:</h6>
                    <ul>
                        <li><b>Variety:</b> We offer a diverse range of [Product Category] to cater to different preferences and budgets.</li>
                        <li><b>Quality:</b>
                             We source our products from reputable brands 
                            and manufacturers, ensuring you receive durable and reliable items.
                        </li>
                        <li><b>Expertise:</b>
                             Our staff are knowledgeable about our products and can help you find the perfect fit.
                        </li>
                        <li><b>Customer Focus:</b>
                             We prioritize your satisfaction and go the extra mile to ensure a positive shopping experience.
                        </li>
                    </ul>


                </div>
            </section>


        </div>
    </section>
  )
}
