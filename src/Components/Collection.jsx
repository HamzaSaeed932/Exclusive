import React, { useState,useEffect } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import ProductCard from './ProductCard'
import { collection, addDoc, getDocs } from "firebase/firestore";
import {db} from '../firebase/firebase';

const Collection = () => {

  const [fetchData,setFetchData]=useState([]);

  // Fetch products from Firestore
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Products"));
        const productsArray = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setFetchData(productsArray);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, []);

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
          {fetchData.map((Item,index)=>(
             <ProductCard item={Item} key={index}/>
            ))}
        </div>

        <div>
            
        </div>

    </div>
  )
}

export default Collection