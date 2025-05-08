import React,{useState,useEffect} from "react";
import {useNavigate } from "react-router-dom";
import { auth } from '../firebase/firebase';
import { signInWithEmailAndPassword,sendPasswordResetEmail } from 'firebase/auth';
const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.currentUser) {
      navigate('/', { replace: true });
    }
  }, [navigate]);

  //When click on sign in
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/', { replace: true }); // Replace history entry
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  };

  //When click on Forget Password Option
  const handleForgetPassword = async () => {
    if (!email) {
      alert('Please enter your email address.');
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      alert('Password reset email sent. Check your inbox.');
    } catch (error) {
      console.error('Error sending password reset email:', error.message);
      alert('Failed to send reset email. Make sure email is correct.');
    }
  };

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
          <form action="" className="flex flex-col gap-10" onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="border-b border-[rgba(0,0,0,0.2)] py-2 w-[370px] px-1"
              value={email}
        onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="Password"
              placeholder="Password"
              className="border-b border-[rgba(0,0,0,0.2)] py-2 w-[370px] px-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex gap-2">
              <button className="bg-[#DB4444] py-4 px-12 rounded text-white font-medium cursor-pointer" >Login</button>
              <span className="py-4 px-12 text-[#DB4444] cursor-pointer" onClick={handleForgetPassword}>Forget Password?</span>
            </div>
          </form>
       
        </div>
      </div>
    </div>
  );
};

export default Login;
