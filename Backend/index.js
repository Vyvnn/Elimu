const express= require ('express');
const mongoose =require('mongoose');

const app = express();
const connectDB=()=>{
        mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

        const productSchema=new mongoose.Schema({});
        const product =mongoose.model("products",productSchema);
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function() {
            console.log('Connected');
        });
}

connectdb()
app.listen(3003);
