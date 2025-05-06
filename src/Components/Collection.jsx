import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import ProductCard from './ProductCard'
const Collection = () => {
  let Products=[{
    productName:'HAVIT HV-G92 Gamepad',
    newPrice:'120',
    prevPrice:'160',
    rating:3,
    ratingValue:88,
    percentage:-40,
    productImage:'./product/1.png'
  },
  {
    productName:'AK-900 Wired Keyboard',
    newPrice:'960',
    prevPrice:'1160',
    rating:4,
    ratingValue:75,
    percentage:35,
    productImage:'./product/2.png'
  },
  {
    productName:'IPS LCD Gaming Monitor',
    newPrice:'370',
    prevPrice:'400',
    rating:5,
    ratingValue:99,
    percentage:30,
    productImage:'./product/3.png'
  },
  {
    productName:'S-Series Comfort Chair ',
    newPrice:'375',
    prevPrice:'400',
    rating:5,
    ratingValue:99,
    percentage:25,
    productImage:'./product/4.png'
  }]
  return (
    <div className='w-[1170px] m-auto mb-[60px]'>
       
        <div className='flex items-center gap-4'>
            <div className='w-5 h-10 bg-[#DB4444] rounded'></div>
          <span className='text-[#DB4444] font-semibold'> Today's</span> 
        </div>

        <div className='font-inter flex justify-between items-center mt-6 mb-10'>
            <h1 className='font-semibold text-4xl'>Flash Sales</h1>
            <div className='flex gap-6'> 
                <FaArrowLeft size={20}/>
                <FaArrowRight size={20}/>
            </div>
        </div>

        <div className='flex'>
          {Products.map((product,index)=>(
             <ProductCard product={product} key={index}/>
            ))}
        </div>

        <div>
            
        </div>

    </div>
  )
}

export default Collection