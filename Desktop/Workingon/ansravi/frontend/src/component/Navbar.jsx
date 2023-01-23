import React from 'react'
import { Link } from 'react-router-dom';
import {Text,Flex} from "@chakra-ui/react"
import "../CSS/Navbar.css"
export default function Navbar() {
  return (
    <div className='Navbar'>
    <div>
     <Text fontSize="xxl">AnsRavi</Text>
    </div>
    <Flex className='flex'>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/signUp">SignUp</Link>
       <Link to="/product">Product</Link>
       <Link to="/cart">cart</Link>
    </Flex>
</div>


  )
}
