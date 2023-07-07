const express = require('express');
const app= express();
const mongoose = require ('mongoose');
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');
const cors =require('cors');
require("dotenv").config();


//DB Connection
mongoose.connect('mongodb+srv://vivyan3:burpee6@e-limu.pdudq6m.mongodb.net/',{
useNewUrlParser:true,
useUnifiedTopology:true,

}).then(()=>{
    console.log("DB CONNECTED")
}).catch(()=>{
    console.log("UNABLE TO CONNECT TO DB")
})


//use parsing middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors)


const port=process.env.PORT|| 5000;


//routes
app.get('/',(req,res)=>{
res.send('hello')
 
})






//start a server
app.listen(5000,()=>{

    console.log('listening at ${port}')
})






