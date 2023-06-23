// require('dotenv').config();

const express = require ('express')
const app= express();

app.get('/',(req,res)=>{
res.json({message: 'Welcome to the Elimu app'})


})

app.listen(3003,()=>{
    console.log('listen to port 3003')
})







// // const mongoose = require('mongoose');



// // const connectDB = () => {
// //     mongoose.connect('mongodb+srv://vivyan3:burpee6@elimu.lhrbpeb.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

// //   mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
// // mongodb+srv://vivyan3:<password>@elimu.lhrbpeb.mongodb.net/<database-name>

//   // const productSchema = new mongoose.Schema({});
//   // const product = mongoose.model("products", productSchema);
// //   const db = mongoose.connection;
  
// //   db.on('error', console.error.bind(console, 'connection error:'));
// //   db.once('open', function () {
// //     console.log('Connected');
// //   });
// // }

// // console.log(process.env.MONGODB_URI);
// // connectDB();


// // app.use(express.urlencoded({extended:false}))
// // app.post("/register",async(req,res)=> {
// //   try {

// //   }catch{
    
// //   }
// // })
// //routes




