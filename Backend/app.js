const express = require('express');
const app= express();
const mongoose = require ('mongoose');
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');
const cors =require('cors')


//DB Connection
mongoose.connect()

//routes
app.get('/',(req,res)=>{
res.send('hello')
 
})







app.listen(5000,()=>{

    console.log('listening to port 5000')
})






