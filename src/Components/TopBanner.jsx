import React from 'react'
import { FaChevronDown } from 'react-icons/fa'

const Banner = () => {
  return (
    <div className='bg-black py-3 flex justify-center items-center text-[14px] text-white font-poppins '>
    <div className='flex mx-50'>
        <p className='mx-2'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
        <a className='font-semibold underline'>ShopNow</a>
    </div>
    <div className='flex justify-center items-center'>
        <p className='mx-1'>English</p>
        <FaChevronDown/>
    </div>
    </div>
  )
}

export default Banner