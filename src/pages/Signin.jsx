import React from 'react'

export default function Singin() {
  return (
    <>
      <section>
        <h1 className='text-3xl font-bold text-center py-6'>Signin</h1>
        <div className='flex flex-wrap'>
          <div className='lg:w-[40%] md:w-[67%] mx-4 md:m-auto'>
            <img src='https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357'
            className='w-full rounded-2xl'

            />

          </div>
          <div className=' mx-auto md:mt-6 lg:w-[40%] lg:ml-20 md:w-[67%] mt-7'>
            <form>
              <input className='rounded-[12px] py-6 px-6 border-black border-2 w-full rounded-md h-8' placeholder='Email Address '
              >
              </input>
              <input className=' mt-7 rounded-[12px] py-6 px-6 border-black border-2 w-full rounded-md h-8' placeholder='Passowrd'
              >
              </input>
            </form>

          </div>

        </div>
   
      </section>
      
    
    </>
  )
}
