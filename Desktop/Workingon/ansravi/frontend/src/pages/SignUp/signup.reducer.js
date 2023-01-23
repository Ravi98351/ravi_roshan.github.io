import React from 'react'
import {signup_success,signup_error,signup_loading} from "./signup.type"

const initialState={
  signup:false,
  loading:false,
  error:false,
  data:""
}


export default function SignupReducer(state=initialState,{type,payload}) {
const arr=JSON.parse(localStorage.getItem("userData")) || []
  switch(type){
    case signup_success:
   
 
      return {
        ...state,
        signup:true,
        loading:false,
        error:false,
        data:payload
      }
  
  case signup_loading:
    return {
      ...state,
      signup:false,
      loading:true,
      error:""
    }

case signup_error:
  return {
    ...state,
    signup:false,
    loading:false,
    error:true
  }

  default :
  return initialState
}

}
