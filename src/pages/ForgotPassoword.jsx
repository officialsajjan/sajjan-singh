import React from 'react'
import { useState } from "react";
import { AiFillEyeInvisible,AiFillEye } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function ForgotPassoword() {
  const [showPassword,setshowPassword]=useState(false)
  return (
    <>
      <section>
        <h1 className='text-3xl font-bold text-center py-6'>ForgotPassword</h1>
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
              
        
    
            </div>
            <div className='flex justify-between'>
              <p>Already have an account/<Link to='/Signup' className='font-semibold test-blue-500'>Register</Link></p>
             <Link to="/Forgot-Passoword"></Link>
            </div>
            <Button title= "Reset" back='bg-blue-500'/>
           
            
            <div className='flex items-center before:border-t before:flex-1 before:border-gray-500
            after:border-t after:flex-1 after:border-gray-500'>
              <p className='font-bold mx-3'>or</p>
            </div>
           <Button title='continue with google' back=' bg-red-500' pic='fcgoogle'/>

            </form>

          </div>

        </div>
  
      </section>
      
    
    </>
  )
}

