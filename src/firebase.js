// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoA9cXiYvirvlxXN2e4dCtg2of0931zwY",
  authDomain: "exclusive-4c513.firebaseapp.com",
  projectId: "exclusive-4c513",
  storageBucket: "exclusive-4c513.firebasestorage.app",
  messagingSenderId: "472048293605",
  appId: "1:472048293605:web:92831486ebfe8e13eee60c",
  measurementId: "G-LQ3THX0610"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default  auth;