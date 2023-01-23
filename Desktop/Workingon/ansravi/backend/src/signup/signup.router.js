const express = require('express')
const UserModel = require('./signup.model')
const jwt = require("jsonwebtoken");
const app=express.Router()
const argon2 = require('argon2');




app.get("/",(req,res)=>{
    res.send("wellcome to sign up")
})


app.post("/signup",async(req,res)=>{ 
    
    const {name,email,password,maritalstatus,gender}=req.body;
    const hashPassword = await argon2.hash(password);


try{
    const existingUser=await UserModel.findOne({email})
if(existingUser){
    res.send("User Already Exist")
}
else{
   let newUser= await UserModel.create({name,email,password:hashPassword,maritalstatus,gender})
    res.send("user signup successfull")
}


}catch(e){
    res.send(e.message)
}

}) 

module.exports=app