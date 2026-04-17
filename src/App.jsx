import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products'; 
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Contact from './Pages/Contact';
import CartPage from './Pages/CartPage';
import CheckoutPage from './Pages/CheckoutPage';
import Profile from "./Pages/Profile";
import Wishlist from './Pages/Wishlist.jsx';
import Payment from './Pages/Payment.jsx';
import Myprofile from './Pages/Myprofile.jsx'
import Error from './Pages/Error.jsx'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='cart'  element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='/wishlist'element={<Wishlist />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/myprofile" element={<Myprofile />} />
        <Route path="/Error" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
