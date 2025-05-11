import React from 'react'
import {FaArrowLeft,FaArrowRight} from "react-icons/fa"
import CategoryCard from './CategoryCard'
const Categories = () => {
  let Items= [
    {
    Icon :'./Category-Camera.png',
    ItemName:'Camera'
  },
    {
    Icon :'./Category-CellPhone.png',
    ItemName:'CellPhone'
  },
    {
    Icon :'./Category-Computer.png',
    ItemName:'Computer'
  },
    {
    Icon :'./Category-Gamepad.png',
    ItemName:'Gamepad'
  },
    {
    Icon :'./Category-Headphone.png',
    ItemName:'Headphone'
  },
    {
    Icon :'./Category-SmartWatch.png',
    ItemName:'SmartWatch'
  },

]
  return (
    <div className='w-[1170px] m-auto mb-[60px]'>
         <div className='flex items-center gap-4'>
                    <div className='w-5 h-10 bg-[#DB4444] rounded'></div>
                  <span className='text-[#DB4444] font-semibold'>Categories</span> 
                </div>
        
                <div className='font-inter flex justify-between items-center mt-6 mb-10'>
                    <h1 className='font-semibold text-4xl'>Browse By Category</h1>
                    <div className='flex gap-6'> 
                        <FaArrowLeft size={20}/>
                        <FaArrowRight size={20}/>
                    </div>
                </div>

                <div className='flex space-x-[30px]'>
                  {Items.map((item,index)=>(
                    <CategoryCard image={item.Icon} IconName={item.ItemName} key={index}/>
                  ))}
                </div>
        
    </div>
  )
}

export default Categories