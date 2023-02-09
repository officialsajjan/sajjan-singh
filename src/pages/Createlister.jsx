import React from 'react'
import { useState } from 'react'
import Button from '../components/Button'

export default function Createlister() {
  const [formData,setFormData]=useState({
    name:'',
    type:'rent',
    beds:3,
    bathroom:2,
    parking:'No',
    furnished:'No',
    address:'',
    description:'',
    offer:'No',
    price:500,
    discount:0,
    images:[]
  })
  function onChange(e){
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]:e.target.value
    }))
      console.log(formData)
  }
  const{name,type,bathroom,beds,parking,furnished,address,description,offer,price,discount,images}=formData
  return (
    <section className='max-w-md mb-6 mx-auto px-3'>
        <h1 className='text-center text-3xl font-bold mt-6'>CreaterListing</h1>
        <p className='mt-6 text-lg font-semibold'>sell/rent</p>
        <div className='flex space-x-4 '>
             <Button   title='Sell' id='type' value='sell' back={type==='sell'?'bg-gray-600'
             :'bg-white'} text={type==='sell'?'':'text-black'} onClick={onChange}/>
             <Button  type="button" title='Rent' id='type' value='rent' back={type==='rent'?'bg-gray-600': 
             'bg-white'} text={type==='rent'? '':'text-black'} onClick={onChange} />
        </div>

        <div className='mb-4'>
          <p className='font-semibold text-lg'>Name</p>
            <input value={name} type="text" id="name" placeholder='Name'className='w-full rounded text-lg px-4 py-2 border-gray-400 focus:border-gray-400 outline-none' onChange={onChange}></input>
          
        </div>
        
         
        
    
        <div className=' flex mb-4'>
          <div>
        <p className=' font-semibold text-lg'>Beds</p>
         <input type='number' placeholder='Number' value={beds} id="beds"className='text-center w-2/3 rounded text-lg px-4 py-2 border-gray-400 focus:border-gray-400 outline-none' onChange={onChange}></input>
         </div>


         <div>
         <p className=' font-semibold text-lg'>Bathroom</p>
           <input type='number' placeholder='Number' value={bathroom} id="bathroom" className='text-center w-2/3 rounded text-lg px-4 py-2 border-gray-400 focus:border-gray-400 outline-none'onChange={onChange}></input>
          </div>
        </div>


        <div className='mb-4'>
         <p className=' font-semibold text-lg'>Parking Slot</p>
           <div className='flex space-x-4'>
      
             <Button id="parking" title='Yes' value="Yes" back={parking==="Yes"?'bg-slate-600':'bg-white'} text={parking==="Yes"?'':'text-black'} onClick={onChange}/>

          
             <Button id="parking" title='No' value="No" back={parking==="No"?'bg-slate-600':'bg-white'} text={parking==="No"?'':'text-black'} onClick={onChange}/>
          </div>
        </div>


        <div className='mb-4'>
        <p className=' font-semibold text-lg'>furnished</p>
         <div className='flex space-x-4'>
      
           <Button id="furnished" title='Yes' value="Yes" back={furnished==="Yes"?'bg-slate-600':'bg-white'} text={furnished==="Yes"?'':'text-black'} onClick={onChange}/>

          
          <Button id="furnished" title='No' value="No" back={furnished==="No"?'bg-slate-600':'bg-white'} text={furnished==="No"?'':'text-black'} onClick={onChange}/>
         </div>
        </div>


        <div className='mb-4'>
          <p className='font-semibold text-lg'>Address</p>
            <textarea 
              type='text' value={address} placeholder='Address' className='text-center w-2/3 rounded text-lg px-4 py-2 border-gray-400 focus:border-gray-400 outline-none' onChange={onChange}>
            </textarea>
        </div>


        <div className='mb-4'>
        <p className='font-semibold text-lg'>Description</p>
        <textarea 
            type='text' placeholder='description' value={description} className='text-center w-2/3 rounded text-lg px-4 py-2 border-gray-400 focus:border-gray-400 outline-none' onChange={onChange} >
        </textarea>
        </div>


        <div className='mb-4'>
         <p className=' font-semibold text-lg'>Offers</p>
             <div className='flex space-x-4'>

               <Button id="offer" title='Yes' value="Yes" back={offer==="Yes"?'bg-slate-600':'bg-white'} text={offer==="Yes"?'':'text-black'} onClick={onChange}/>

          
                <Button id="offer" title='No' value="No" back={offer==="No"?'bg-slate-600':'bg-white'} text={offer==="No"?'':'text-black'} onClick={onChange}/>

             </div>
        </div>

        <div>
            <p className=' font-semibold text-lg'>Regular Price</p>
               <div className='flex space-x-4 items-center'>

                  <input type='number' value={price} id="price" className={`text-center ${type==='rent'?'w-full':'w-[50%]'} rounded text-lg px-4 py-2 border-gray-400 focus:border-gray-400 outline-none`} 
          
                 />
                    {type==='rent' && (  <p className='w-full'>$ / Months</p>)}
              </div>
        </div>
       
       {offer==='Yes' && (
           <div className='mb-4'>
           <p className=' font-semibold text-lg'>Discount</p>
        
           <input value={discount} id="discount" className='text-center w-[50%] rounded text-lg px-4 py-2 border-gray-400 focus:border-gray-400 outline-none' onChange={onChange}></input>
         </div>
       )}

         
        <div className='mb-4'>
          <p className='text-lg font-semibold'>Images</p>
          <p className='text-gray-600 text-sm'>the first image will we the</p>
          <input 
          type="file"
          className='w-full bg-white font-semibold px-3 py-2 text-gray-600 border-gray-400 border rounded
          focus:border-gray-400 active:border-gray-400'
          accept='.jpg,.png,.jpeg'
          multiple
          
          />


        </div>
        <div className="font-semibold mb-4 py-3">
        <Button title='create lister' back="bg-blue-600"></Button>

        </div>
        


         
         
         


      

      
    </section>
  )
}
