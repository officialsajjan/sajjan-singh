import React from 'react'
import { useState } from "react";
import { AiFillEyeInvisible,AiFillEye } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import {db} from '../Firebase'
import {getAuth,createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import { async } from '@firebase/util';
import { serverTimestamp } from 'firebase/firestore';
import { setDoc,doc } from 'firebase/firestore';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


export default function Singup() {
  const [showPassword,setshowPassword]=useState(false)
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const navigate=useNavigate()

  async function onSubmit(e){
    e.preventDefault()

    try{
      const auth=getAuth();
      if(name===''){
        throw {code:'auth/no-name'}
      }
      const userCredentail=await createUserWithEmailAndPassword(auth,email,password)
      console.log(userCredentail)
      const user= userCredentail.user
      updateProfile( user, { displayName:name
      })
      const userDetails={
        'name':name,
        'email':email,
        'timestamp':serverTimestamp()
      }
      await setDoc(doc(db,"users", user.uid), userDetails)
      toast.success("login success")
      navigate('/')
      

    }catch(error){
      console.log("Error"+error)
      const wrong=displayError(error.code)
      toast.error(wrong)
    }
  }
  function displayError(code){
    switch(code){
      case "auth/email-already-in-use":
       return 'email invalid'

      case 'auth/weak-password':
        return "invalid password at least 6 "
      

      case 'auth/no-name':
        return "no name"
      

      default:
        return "something went wrong"

    }
  }
  function demo(e){
    console.log(e.target.value)
  }



  return (
    <>
      <section>
        <h1 className='text-3xl font-bold text-center py-6'>Signup</h1>
        <div className='flex flex-wrap'>
          <div className='lg:w-[40%] md:w-[67%] mx-4 md:m-auto'>
            <img src='https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357'
            className='w-full rounded-2xl'

            />

          </div>
          <div className=' mx-auto md:mt-6 lg:w-[40%] lg:ml-20 md:w-[67%] mt-7'>
            <form onSubmit={onSubmit}>
            <input 
               className='rounded-[12px] py-6 px-6 border-2 w-full rounded-md h-8 focus:border-blue-300 focus:outline-none' 
               placeholder='Name'
               onChange={(e)=>setName(e.target.value)}
              >
              </input>
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
              <p>Dont have a account/<Link to='/sigup'className='font-semibold test-blue-500'>Register</Link></p>
             <Link to='/forgot-passoword'>Forgot password</Link>
            </div>
            <Button title= "Signup" back='bg-blue-500'/>
           
            
            <div className='flex items-center before:border-t before:flex-1 before:border-gray-500
            after:border-t after:flex-1 after:border-gray-500'>
              <p className='font-bold mx-3'>or</p>
            </div>

            </form>

          </div>

        </div>
  
      </section>
      
    
    </>
  )
}

