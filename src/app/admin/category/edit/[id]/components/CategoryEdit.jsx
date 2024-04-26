export default function CategoryEdit() {
    return (
      <section className='w-[100%]'>
          <div className='mx-auto w-[80%]'>
              <div className='mb-6'>
                  <h6 className='font-bold mb-2'>Name</h6>
                  <input type='text' className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300'/>
              </div>
              <div className='mb-6'>
                  <h6 className='font-bold mb-2'>Description</h6>
                  <textarea className='w-[100%] h-[8rem] rounded-lg outline-none px-4 py-3 border border-slate-300'></textarea>
              </div>
              <div className='flex items-center justify-center pb-[4rem]'>
                  <button className='px-[8rem] py-5 text-white rounded-lg transition-all duration-200 ease-in-out bg-gradient-to-br from-orange-500 to-pink-500 hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-600'>
                      Submit
                  </button>
              </div>
          </div>
      </section>
    )
  }