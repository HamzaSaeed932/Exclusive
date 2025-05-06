import React from 'react'
import { FiSearch,FiHeart,FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='border-b-1' >
        <div className='flex justify-between items-center pt-10 pb-4 font-poppins max-w-[1170px] m-auto'>

        <h1 className='text-2xl font-bold font-inter'>Exclusive</h1>

        <ul className='flex gap-12'>
            <Link className='hover:underline cursor-pointer' to='/'>Home</Link>
            <Link className='hover:underline cursor-pointer' to='/contact'>Contact</Link>
            <Link className='hover:underline cursor-pointer' to='/about'>About</Link>
            <Link className='hover:underline cursor-pointer' to='/signup'>Sign Up</Link>
        </ul>
        
        <div className='flex items-center gap-6'>
            <div className="relative w-full max-w-sm">
                <input
                    type="text"
                    placeholder="What are you looking for?"
                    className="w-full bg-gray-100 rounded py-2 pl-4 pr-10 text-[12px] "
                    />
                <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <div className='flex items-center gap-4'>
                <FiHeart size={24}/>
                <FiShoppingCart size={24}/>
            </div>
            
        </div>

                    </div>
    </div>
  )
}

export default Header