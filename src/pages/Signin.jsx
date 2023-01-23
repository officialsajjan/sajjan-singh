import React from 'react'
import { useState } from "react";
import { AiFillEyeInvisible,AiFillEye } from "react-icons/ai";
import { Link } from 'react-router-dom';

export default function Singin() {
  const [showPassword,setshowPassword]=useState(false)
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
              <input 
               className='rounded-[12px] py-6 px-6 border-2 w-full rounded-md h-8 focus:border-blue-300 focus:outline-none' 
               placeholder='Email Address'
              >
              </input>
            <div className=' my-6 relative'>
              <input type={showPassword? 'text':'password'}
              className='focus:border-blue-300 focus:outline-none mt-7 rounded-[12px] 
              py-6 px-6 border-2 w-full rounded-md h-8' 
              placeholder='Password'
              />
              {showPassword?(
              <AiFillEye className='cursor-pointer absolute right-4 top-[40px]'
              onClick={()=>setshowPassword(false)}
              />
              ):(
              <AiFillEyeInvisible className='cursor-pointer absolute right-4 top-[40px]'
              onClick={()=>setshowPassword(true)}
              />
              )}
    
            </div>
            <div className='flex justify-between'>
              <p>Dont have a account/<Link className='font-semibold test-blue-500'>Register</Link></p>
              <p>Forgot password</p>
            </div>
            <div>
              <button className='uppercase bg-blue-500 text-white w-full my-5 py-2'>SIGN-IN</button>
            </div>
            <div className='flex items-center before:border-t before:flex-1 before:border-gray-500
            after:border-t after:flex-1 after:border-gray-500'>
              <p className='font-bold mx-3'>or</p>
            </div>
            <button className='uppercase bg-red-500 text-white w-full my-5 py-2'>Continue with google</button>
            </form>

          </div>

        </div>
  
      </section>
      
    
    </>
  )
}
