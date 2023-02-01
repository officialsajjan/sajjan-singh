import React from 'react'
import {FcGoogle} from  'react-icons/fc'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { async } from '@firebase/util';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { serverTimestamp } from 'firebase/firestore';
import { getDoc,setDoc,doc } from 'firebase/firestore';
import { db } from '../Firebase';

export default function Button({title,back,pic,type,click}) {
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
  return (
    <div>
            <button type={type} onClick={click?Auth:null} className={`uppercase flex items-center justify-center ${back} bg-blue-500 text-white w-full my-5 py-2`}
            >{pic?<FcGoogle className='bg-white mx-3'/>:''}{title}</button>
    </div> 
  )
}
