const express = require('express')
const UserModel = require('../signup/signup.model')
const jwt = require("jsonwebtoken");
const app=express.Router()

app.get("/",(req,res)=>{
    res.send("wellcome to sign in")
})
  

app.post("/login",async(req,res)=>{ 

const {password,email}=req.body;
try{
    const existingUser=await UserModel.findOne({email,password})
          existingUser?res.send("User login successfull"):res.send("Wrong Credentials ")

}catch(e){
    res.send(e.message)
}

})

module.exports=app;