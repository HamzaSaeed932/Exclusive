import React,{useState,useEffect} from "react";
import { Link,useNavigate } from "react-router-dom";
import { auth } from '../firebase/firebase';
import { createUserWithEmailAndPassword,GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate= useNavigate();

   // Redirect if already logged in
   useEffect(() => {
    if (auth.currentUser) {
      navigate('/', { replace: true });
    }
  }, [navigate]);

  //Sign up with Email & Password
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
        navigate('/login')
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
  };

  //Sign up with google
 const provider = new GoogleAuthProvider();
 const handleGoogleSignUp = async () => {
  try {
    await signInWithPopup(auth, provider);
    navigate('/');
  } catch (error) {
    console.error('Google sign-in error:', error.message);
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
            Create an account
          </h1>
          <p className="font-poppins mb-12">Enter your details below</p>
          <form action="" className="flex flex-col gap-10" onSubmit={handleSignUp}>
            <input
              type="text"
              placeholder="Name"
              className="border-b border-[rgba(0,0,0,0.2)] py-2 w-[370px] px-1"
            />
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
            <input
              type="Submit"
              value="Create Account"
              className="bg-[#DB4444] text-white p-4 rounded font-medium cursor-pointer"
            />
          </form>
          <div>
            <div className="border border-[rgba(0,0,0,0.4)] rounded flex justify-center p-4 gap-4 items-center mt-4 mb-6 cursor-pointer"  onClick={handleGoogleSignUp}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
              <p>Sign up with Google</p>
            </div>
            <p className="text-center">
              Already have account? <Link to="/login" className="border-b ml-4">Log in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
