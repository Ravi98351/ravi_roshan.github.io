const express = require('express')
 const connect=require('./DB/db.connect')// we write mongose connection here
const signupRouter=require("./signup/signup.router");
const loginRouter = require("./login/login.router")
require('dotenv').config()
const app=express()
const cors =require('cors')
const PORT=8080;
 

// app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.get('/',(req,res)=>res.send('hello'))
app.use("/user",signupRouter)
app.use("/user",loginRouter)


app.listen(PORT,async()=>{
 await connect()
console.log(`listening at http://localhost:${PORT}`)})