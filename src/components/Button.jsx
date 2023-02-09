import React from 'react'
import {FcGoogle,FcHome} from  'react-icons/fc'




export default function Button({title,back,pic,type,onClick,text,value,id}) {
  
  
  return (
    
            <button onClick={onClick} type={type} value={value} id={id} className={`uppercase flex items-center shadow-md hover:shadow-lg justify-center ${back} bg-blue-500 ${text?text:'text-white'} w-full my-5 py-2`}
            >{pic?pic==='FcGoogle'?<FcGoogle className='bg-white mx-3 text-2xl'/>:<FcHome />:''}{title}</button>
     
  )
}
