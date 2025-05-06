import React from 'react'
import Rating from './Rating'
import { FiHeart, FiEye } from 'react-icons/fi';

const ProductCard = ({product}) => {
    console.log(product)
  return (
    <div className='w-[270px] h-[350px]  font-poppins relative mr-[30px]'>

        <div className='w-[270px] h-[250px]  flex justify-center items-center bg-gray-100 rounded relative parent-div'>
            <button className='absolute top-3 left-3 px-3 py-1 bg-[#DB4444] rounded text-xs  text-[#FAFAFA]'>{product.percentage}%</button>
            <img src={product.productImage} alt="" />
            <h1 className='absolute bottom-0 border w-full text-center py-2 bg-black text-white rounded-b font-medium add-to-cart opacity-0 transition-opacity duration-500 ease-in-out hover:cursor-pointer'>Add to Cart</h1>
        </div>

        <div className='absolute top-3 right-3 flex flex-col gap-2'>
            <div className='p-2 rounded-full bg-white'>
                <FiHeart size={20}/>
            </div>
            <div className='p-2 rounded-full bg-white'>
                 <FiEye size={20}/>
            </div>
        </div>

        <div className='pt-4 flex flex-col gap-2'>
          
            <h1 className='font-medium'>{product.productName}</h1>
           
            <p className='text-[#DB4444]'>${product.newPrice} <span className='text-[rgba(0,0,0,0.5)] line-through pl-3'>${product.prevPrice}</span></p>
            
            <Rating rating={product.rating} value={product.ratingValue}/>
        </div>


    </div>
  )
}

export default ProductCard