import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import Home from "../Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Shop from "../Pages/Shop/Shop";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import Checkout from "../Pages/Checkout/Checkout";
import Cart from "../Pages/Cart/Cart";
import { ParallaxProvider } from "react-scroll-parallax";
import { Toaster } from "sonner";
const Router = () => {
  return (
    <>
      <Toaster richColors position="top-right" visibleToasts={1} />
      <ParallaxProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/Contact" element={<Contact />} />
            <Route exact path="/About" element={<About />} />
            <Route exact path="/Shop" element={<Shop />} />
            <Route exact path="/LogIn" element={<LogIn />} />
            <Route exact path="/SignUp" element={<SignUp />} />
            <Route exact path="/Checkout" element={<Checkout />} />
            <Route exact path="/Cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </ParallaxProvider>
    </>
  );
};

export default Router;
