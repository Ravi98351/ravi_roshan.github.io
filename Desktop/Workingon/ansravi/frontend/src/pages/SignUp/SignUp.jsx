import React from 'react'
import { Input, Select,Box, Heading, Button } from '@chakra-ui/react';
import { Checkbox, CheckboxGroup ,useToast} from '@chakra-ui/react'
import { useState } from 'react'
import "../../CSS/SignUp.css"
import {useDispatch, useSelector} from "react-redux"
import {SignupAction} from './signup.action';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const initialValue={
    name:"",
    password:"",
    email:"",
    maritalstatus:false,
    gender:""
  }

export default function SignUp() {
const dispatch = useDispatch()
const toast=useToast()
const store=useSelector((store)=>store.userSignup)
const {signup,loading,error,data}=store;
const [user,setUser]=useState(initialValue)
const {image,name,password,email,gender}=user;
const navigate=useNavigate()

useEffect(()=>{
  if(signup){
    console.log("sata",data)
   if(data=="user signup successfull"){
  toast({
    title: data,
    description:"user signup successfull",
    status: 'success',
    duration: 2000,
    isClosable: true,
  })
  setTimeout(() => {
    navigate("/login")
  }, 1500);
  
   }
else if(data=="User Already Exist"){
  toast({
    title: data,
    description: "user signup Unsuccessfull ",
    status: 'error',
    duration: 3000,
    isClosable: true,
  })
}


  }



},[signup])



let handleChange=(e)=>{
const {name,value,type,checked}=e.target;
let uservalue;
type=="checkbox"?uservalue=checked:uservalue=value

setUser({...user,[name]:uservalue})
}

let handleForm=(event)=>{
event.preventDefault();
if(image=="",name=="",password=="",email=="",gender=="")alert("fill all details")
else dispatch(SignupAction(user))


}


return (
    // loading?<CircularProgress isIndeterminate color='green.300' size={"40px"} />:
    error? toast({
      title: 'Signup Unsuccessfull.',
      description: "Somting Went Wrong from server ",
      status: 'error',
      duration: 3000,
      isClosable: true,
    }):
    <div>
       <Box className='form'>
      <Heading>Sign up</Heading>
      <form onSubmit={handleForm}>
      <label>Image</label>
      <Input type="text"  placeholder="Enter Image Address" name="image"  value={image} onChange={handleChange}/>
      <label>Name</label>
      <Input type="text" placeholder="Enter your Name" name="name"  value={name} onChange={handleChange} />
      <label>Email</label>
      <Input type="email" placeholder="Enter your Email" name="email" value={email} onChange={handleChange} />
      <label>Password</label>
      <Input type="password" placeholder="Enter your Password" name="password"  value={password}onChange={handleChange}/>
      <label>Merital Status</label>
      <br/>
      <Checkbox type="checkbox" name="maritalstatus"  onChange={handleChange}></Checkbox>
      <br/>
      <label>Gender</label>
      <Select name="gender" value={gender}onChange={handleChange}>
        <option hidden>Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </Select>
      <Button style={{backgroundColor:"green",color:"white"}}>
         {
           loading?<CircularProgress isIndeterminate color='green.300' size={"40px"} />:
           <Input type="submit" className='btn' />
      }
      </Button>
     
      
    </form>
    </Box>
    </div>
  )
}
//value={checked?true:false}