import React,{useEffect} from 'react'
import Sidebar from "../Components/Sidebar"
import Carousal from "../Components/Carousal"
import Collection from "../Components/Collection"
import { auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import Button from '../Components/Button';
import Categories from '../Components/Categories';
const Home = () => {
const navigate=useNavigate()
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!auth.currentUser) {
      navigate('/login', { replace: true });
    }
  }, [navigate]);
  return (
    <>
    <div className="max-w-[1170px] m-auto flex mb-[100px]">
      <Sidebar/>
      <Carousal/>
    </div>
    <Collection/>  
    <div className='text-center mb-15'>
      <Button text='View all Products'/>
    </div>
    <Categories/>
    </>
    )
}

export default Home