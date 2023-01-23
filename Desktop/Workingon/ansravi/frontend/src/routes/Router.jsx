import React from 'react'
import { Routes,Route } from "react-router-dom"
import Home from '../pages/Home'
import Login from '../pages/login/Login'
import SignUp from '../pages/SignUp/SignUp'
import Cart from '../pages/cart/Cart'
import Product from '../pages/product/Product';

export default function Router() {
  return (
    
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signUp" element={<SignUp/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
       </Routes>
   
  )
}


// note plz do not put routes under a div
