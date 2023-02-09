import React from 'react'
import { FcGoogle } from 'react-icons/fc';
import { useState } from "react";
import { AiFillEyeInvisible,AiFillEye } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '../components/Button';
import { signInWithEmailAndPassword } from "firebase/auth";
import { async } from '@firebase/util';
import { useNavigation } from 'react-router-dom';
import { serverTimestamp } from 'firebase/firestore';
import { db } from '../Firebase';
import { getDoc,setDoc,doc } from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";



export default function  Singin() {
  const [showPassword,setshowPassword]=useState(false)
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const navigate=useNavigate()


  async function Auth(){
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result=await signInWithPopup(auth, provider)
      const user=result.user
      toast.success('valid email ')
      navigate('/')
      const docSpan= await getDoc(doc(db,"users",user.uid));

      if(!docSpan.exists()){
        await setDoc(doc(db,"users",user.uid),{
          email:user.email,
          name:user.displayName,
          timestamp:serverTimestamp()
        })
      }
      
    } catch (error) {
      toast.error('somthing is wrong')
      
    }

  }

  async function onSubmit(e){
    e.preventDefault()
    try {
      const auth = getAuth();
      console.log(email)
      console.log(password)
      const result=await signInWithEmailAndPassword(auth, email, password)
      const user= result.user
      toast.success('valid Id')
      
      
    } catch (error) {
      toast.error('invalid creadential')
      
    }
  }
  return (
    <>
      <section>
        <h1 className='text-3xl font-bold text-center py-6'>Signin</h1>
        <div className='flex flex-wrap'>
          <div className='lg:w-[40%] md:w-[67%] mx-4 md:m-auto'>
            <img src='https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357' alt='no no nhi dikhayege image ko'
            className='w-full rounded-2xl'

            />

          </div>
          <div className=' mx-auto md:mt-6 lg:w-[40%] lg:ml-20 md:w-[67%] mt-7'>
            <form onSubmit={onSubmit}>
              <input 
               className='rounded-[12px] py-6 px-6 border-2 w-full rounded-md h-8 focus:border-blue-300 focus:outline-none' 
               placeholder='Email Address'
               onChange={(e)=>setEmail(e.target.value)}
              >
              </input>
            <div className=' my-6 relative'>
              <input type={showPassword? 'text':'password'}
              className='focus:border-blue-300 focus:outline-none mt-7 rounded-[12px] 
              py-6 px-6 w-full rounded-md h-8' 
              placeholder='Password'
              onChange={(e)=>setPassword(e.target.value)}
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
              <p>Dont have a account/<Link to='/Signup' className='font-semibold test-blue-500'>Register</Link></p>
              <Link to='/forgot-Passoword'> Forgot password</Link>

            </div>
            <Button title= "Signin" back='bg-blue-500'/>
           
            
            <div className='flex items-center before:border-t before:flex-1 before:border-gray-500
            after:border-t after:flex-1 after:border-gray-500'>
              <p className='font-bold mx-3'>or</p>
            </div>
           <Button type="button" onClick={Auth} title='continue with google' back=' bg-red-500' pic={FcGoogle}/>

            </form>

          </div>

        </div>
  
      </section>
      
    
    </>
  )
}
