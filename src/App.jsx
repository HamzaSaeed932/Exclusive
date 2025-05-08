import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import TopBanner from "./Components/TopBanner";
import Header from "./Components/Header";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Footer from "./Components/Footer";
import ProtectedRoute from './Components/ProtectedRoute';
function App() {
  return (
    <>
      <TopBanner />
      <Header />
      <Routes>
        <Route element={
          <ProtectedRoute><Home /></ProtectedRoute>} path="/" />
        <Route element={
           <ProtectedRoute><Contact /></ProtectedRoute>} path="/contact" />
        <Route element={
          <ProtectedRoute><About /></ProtectedRoute>} path="/about" />
        <Route element={<SignUp />} path="/signup" />
        <Route element={<Login />} path="/login" />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
