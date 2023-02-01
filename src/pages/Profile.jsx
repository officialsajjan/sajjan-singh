// import userEvent from '@testing-library/user-event'
import { async } from '@firebase/util'
import { getAuth, signOut, updateProfile } from 'firebase/auth'
import { doc, updateDoc } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import Button from '../components/Button'
import { db} from '../Firebase'


export default function Profile() {
    const auth=getAuth()
    const [name,setName]=useState(auth.currentUser.displayName)
    const [email,setEmail]=useState(auth.currentUser.email)
    const[edit,setEdit]=useState('false')
    const navigate=useNavigate()



    function signOut(){
      auth.signOut()
      navigate('/')
      toast.info('sigt')
    }
    function onchange(e){
      setName(e.target.value)

    }
    async function Submit(){
      if(auth.currentUser.displayName!==name){
        updateProfile(auth.currentUser,{
          displayName:name
        })
         await updateDoc(doc(db,"users",auth.currentUser.uid),{
          name
         })
         toast.success("update succuss")
      }
    }

  return (
   <>
   <div className='max-w-6xl mx-auto flex justify-center items-center flex-col' >
    <h1 className='text-3xl text-center mt-6' >My Profile</h1>
   <div className='w-full md:w-[50%] px-5 mt-6'>
    <form>
        <input type='text' 
        value={name}
        onChange={onchange}
        disabled={!edit}
        className={`mb-6 text-xl text-gray-700 w-full px-4 py-2 border-1 rounded ${edit && 'bg-red-300'}`} />
         <input type='text' 
        value={email}
        className='mb-6 text-xl   text-gray-700 w-full px-4 py-2  border-1 rounded' />
    </form>
    <div className='flex justify-between'>
    <p>do want to rename?
      <span 
      className=' hover:blue text-red-400 cursor-pointer'
      onClick={()=>{
        edit && Submit()
        setEdit((prevState)=>!prevState)
      }}

      >
        {edit?'apply change':'edit'}
        </span>
    </p>
    <p onClick={signOut} className='cursor-pointer text-blue-500'>Signout</p>
    </div>
    <Button type="button"click={true} title='Sigin' back=' bg-red-500'/>

   </div>
   </div>
   
   </>
  )
}
