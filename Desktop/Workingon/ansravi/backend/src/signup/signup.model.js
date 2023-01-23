const mongoose=require('mongoose');
const signupSchema=new mongoose.Schema({

name:{
type:String,
required:true},

email:{
type:String,
unique:true,
required:true },

password:{
type:String,
required:true,
},
maritalstatus:{
    type:Boolean, 
    required:true,
},
gender:{
    type:String,
required:true,
},
role:{
    type:String,
    default:"user"
}
},
{
versionkey:false,
timestamps:true
})
const User=mongoose.model('alluser',signupSchema)
module.exports=User;