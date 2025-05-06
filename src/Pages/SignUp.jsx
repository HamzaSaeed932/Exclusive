import React from "react";

const SignUp = () => {
  return (
    <div className="pt-15 pb-[140px] flex items-center">
      <img src="./SignupImage.png" alt="signup image" className="h-[781px]" />

      <div className="font-poppins flex flex-col items-center w-full">
        <div className="w-fit ">
          <h1 className="text-4xl font-medium mb-6 font-inter">Create an account</h1>
          <p className="font-poppins mb-12">Enter your details below</p>
          <form action="" className="flex flex-col gap-10">
            <input
              type="text"
              placeholder="Name"
              className="border-b border-[rgba(0,0,0,0.2)] h-8 w-[370px]"
            />
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
            <input type="Submit" value='Create Account' className="bg-[#DB4444] text-white p-4 rounded font-medium"/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
