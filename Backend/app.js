const express = require('express');
const app= express();
const mongoose = require ('mongoose');
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');
const cors =require('cors');
require("dotenv").config();


//DB Connection
mongoose.connect(process.env.DB_URI,{
useNewUrlParser:true,
useUnifiedTopology:true,
useCreateIndex:true

}).then(()=>{
    console.log("DB CONNECTED")
}).catch(()=>{
    console.log("UNABLE TO CONNECT TO DB")
})


//use parsing middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors)

//routes
app.get('/',(req,res)=>{
res.send('hello')
 
})







app.listen(5000,()=>{

    console.log('listening to port 5000')
})






