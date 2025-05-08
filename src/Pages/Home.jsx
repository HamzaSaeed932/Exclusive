import React,{useEffect} from 'react'
import Sidebar from "../Components/Sidebar"
import Carousal from "../Components/Carousal"
import Collection from "../Components/Collection"
import { auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';
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
    </>
    )
}

export default Home