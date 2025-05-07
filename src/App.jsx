import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import TopBanner from "./Components/TopBanner";
import Header from "./Components/Header";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <TopBanner />
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<About />} path="/about" />
        <Route element={<SignUp />} path="/signup" />
        <Route element={<Login />} path="/login" />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
