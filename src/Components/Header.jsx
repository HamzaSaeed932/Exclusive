import React,{useState} from 'react'
import { FiSearch,FiHeart,FiShoppingCart } from 'react-icons/fi';
import { FaUser, FaBoxOpen, FaTimesCircle, FaStar, FaSignOutAlt } from 'react-icons/fa';
import { Link,useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [openDropdown, setOpenDropdown] = useState(false);
    const navigate=useNavigate();
    const handleLogout = async () => {
      try {
        await signOut(auth);
        navigate('/login');
        setOpenDropdown(false)
            } catch (error) {
        console.error('Error logging out:', error.message);
      }
    };
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
            <div className="relative inline-block text-left">
      {/* User icon button */}
      <div
        className="bg-red-600 text-white p-2 rounded-full cursor-pointer"
        onClick={() => setOpenDropdown(!openDropdown)}
      >
        <FaUser size={20} />
      </div>

      {/* Dropdown menu */}
      {openDropdown && (
        <div className="absolute right-0 mt-2 w-64 rounded-xl shadow-lg z-50 bg-gradient-to-b from-gray-500 to-gray-950 text-white">
          <ul className="flex flex-col p-2 space-y-2">
            <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-white  hover:text-black hover:bg-opacity-10 cursor-pointer">
              <FaUser /> <span>Manage My Account</span>
            </li>
            <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-white hover:text-black hover:bg-opacity-10 cursor-pointer">
              <FaBoxOpen /> <span>My Order</span>
            </li>
            <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-white hover:text-black hover:bg-opacity-10 cursor-pointer">
              <FaTimesCircle /> <span>My Cancellations</span>
            </li>
            <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-white hover:text-black hover:bg-opacity-10 cursor-pointer">
              <FaStar /> <span>My Reviews</span>
            </li>
            <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-white hover:text-black hover:bg-opacity-10 cursor-pointer" onClick={handleLogout}>
              <FaSignOutAlt /> <span>Logout</span>
            </li>
          </ul>
        </div>
      )}
    </div>
            
        </div>

                    </div>
    </div>
  )
}

export default Header