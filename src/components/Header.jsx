import { getAuth } from 'firebase/auth'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {useLocation,useNavigate} from 'react-router-dom'
import {onAuthStateChanged} from  'firebase/auth'

export default function Header() {
  const location= useLocation()
  const navigate=useNavigate()

  const [title,setTitle]=useState('signin')
  useEffect(()=>{
    const auth=getAuth()
    onAuthStateChanged(auth,(user)=>{
        if(user){
          setTitle('Profile')
        }
        else{
          setTitle('Signin')
        }
    
      })
},[])

  function show(route){
    if(route==location.pathname){
      return true
    }
  }
  return (
    <div className='bg-white border-b-2 shadow-sm sticky top-0 z-11'>
        <header className='flex justify-between items-center px-5 max-w-6xl mx-auto'>
        <div>
            <img src="https://b2bweb.realtor.com/web_assets/rdc/SFMC-lp-images/2021/RDC%20-tagline-wide.png"
            alt='ReactApp'
            className='h-5 cursor-pointer'
            onClick={ ()=>navigate('/profile')}
          
            />

        </div>
        <div>
            <ul className='flex space-x-6'>
                <li 
                className={`py-3 text-slate-500 text-sm font-semibold border-b-[3px] cursor-pointer
                border-b-transparent ${show('/') && 'text-black border-b-red-600'}
                `}
                onClick={ ()=>navigate('/')}
                >

                  Home</li>
                  <li 
                className={`py-3 text-slate-500 text-sm font-semibold border-b-[3px] cursor-pointer
                border-b-transparent ${show('/offers') && 'text-black border-b-red-600'}
                `}
                onClick={ ()=>navigate('/Offers')}
                >

                  Offers</li>
                  <li 
                className={`py-3 text-slate-500 text-sm font-semibold border-b-[3px] cursor-pointer
                border-b-transparent ${show('/Signin') && 'text-black border-b-red-600'}
                `}
                onClick={ ()=>navigate('/profile')}
                >
                {title}
                  </li>
                 
                
            </ul>
        </div>
        </header>

    </div>
    
  )
}
