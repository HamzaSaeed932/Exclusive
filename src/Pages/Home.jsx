import React from 'react'
import Sidebar from "../Components/Sidebar"
import Carousal from "../Components/Carousal"
import Collection from "../Components/Collection"
const Home = () => {
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