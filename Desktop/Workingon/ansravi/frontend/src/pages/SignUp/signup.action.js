import React from 'react';
import axios from 'axios';
import {signup_success,signup_error,signup_loading} from "./signup.type"






export const SignupAction=(user)=>async(dispatch)=> {
 dispatch({type:signup_loading})
  
try{

  let res=await axios.post("http://localhost:8080/user/signup",user)


  dispatch({type:signup_success,payload:res.data}) 
 
  

}catch(e){
 dispatch({type:signup_error}) 
}


}

