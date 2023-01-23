import React from 'react';
import "../../CSS/Login.css";

import {
  Box,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Heading,
  
} from '@chakra-ui/react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const initialValue={
  email:"",
  password:""
}

const error={
  isError1:false,
  isError2:false
}
export default function Login() {
  const dispatch=useDispatch()
  const [input, setInput] = useState(initialValue)
  const [Error,setError]=useState(error)
  const {email,password}=input;
   
const {isError1,isError2}=Error;

  const handleInputChange = (e) => {

    const {name,value}=e.target;
    setInput({...input,[name]:value})

  }

  const handleSubmit=(event)=>{

  event.preventDefault();
   if(input.email === '' && input.password === ''){
    setError({...Error,isError1:true,isError2:true})
   }
  
  else if(input.email === ''){
      setError({...Error,isError1:true})
    }
 
  else if(input.password === ''){
      setError({...Error,isError2:true})
    }
    
  else if(input.email !== '' && input.password !== ''){
      setError({...Error,isError1:false,isError2:false})
    }

  }


return (
<Box className="loginform">
      <Heading>LOGIN</Heading>
    <form onSubmit={handleSubmit}>
      <FormControl isInvalid={isError1} >
      <FormLabel>Email</FormLabel>
      <Input type='email' name="email" value={email} onChange={handleInputChange} />
      {!isError1 ? (
        <FormHelperText>
          Enter the email.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
      </FormControl>
<br/>
      <FormControl isInvalid={isError2} >
      <FormLabel>Password</FormLabel>
      <Input type='text' name="password" value={password} placeholder="Enter Password" onChange={handleInputChange} />
      {!isError2 ? (
        <FormHelperText>
     
        </FormHelperText>
      ) : (
        <FormErrorMessage>password is required.</FormErrorMessage>
      )}
      </FormControl>

      <Input type="submit" className='submit'style={{backgroundColor:"green",color:"white"}}/>
    </form>
</Box>

  )
}
