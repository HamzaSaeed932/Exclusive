import React from 'react'
import {FaChevronRight } from 'react-icons/fa'

const Sidebar = () => {
  return (
    <ul className='flex flex-col gap-4 w-[216px] font-poppins pr-4 pt-10 border-r-1'>
        <li className='flex items-center justify-between'>Woman’s Fashion <FaChevronRight size={12} /></li>
        <li className='flex items-center justify-between'>Men's Fashion <FaChevronRight size={12} /></li>
        <li>Electronics</li>
        <li>Home & Lifestyle</li>
        <li>Medicine</li>
        <li>Sports & Outdoor</li>
        <li>Baby’s & Toys</li>
        <li>Health & Beauty</li>
    </ul>
  )
}

export default Sidebar