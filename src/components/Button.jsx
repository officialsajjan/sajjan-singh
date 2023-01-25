import React from 'react'
import {FcGoogle} from  'react-icons/fc'

export default function Button({title,back,pic}) {
  return (
    <div>
            <button className={`uppercase flex items-center justify-center ${back} bg-blue-500 text-white w-full my-5 py-2`}
            >{pic?<FcGoogle className='bg-white mx-3'/>:''}{title}</button>
    </div> 
  )
}
