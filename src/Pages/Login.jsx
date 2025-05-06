import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
const Login = () => {
  return (
    <div className="pt-15 pb-[140px] flex items-center">
      <img
        src="./SignupImage.png"
        alt="signup image"
        className="max-w-[700px]"
      />

      <div className="font-poppins flex flex-col items-center w-full">
        <div className="w-fit ">
          <h1 className="text-4xl font-medium mb-6 font-inter">
          Log in to Exclusive
          </h1>
          <p className="font-poppins mb-12">Enter your details below</p>
          <form action="" className="flex flex-col gap-10">
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="border-b border-[rgba(0,0,0,0.2)] h-8 w-[370px]"
            />
            <input
              type="Password"
              placeholder="Password"
              className="border-b border-[rgba(0,0,0,0.2)] h-8 w-[370px]"
            />
            <div className="flex gap-2">
              <button className="bg-[#DB4444] py-4 px-12 rounded text-white font-medium" >Login</button>
              <span className="py-4 px-12 text-[#DB4444] cursor-pointer">Forget Password?</span>
            </div>
          </form>
       
        </div>
      </div>
    </div>
  );
};

export default Login;
