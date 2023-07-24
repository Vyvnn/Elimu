const express = require('express');
const mainpageRoutes = require('./routes/mainpage');
const mongoose = require('mongoose');

const app = express();


//DB Connection
mongoose.connect('mongodb+srv://vivyan3:burpee6@e-limu.pdudq6m.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => {
    console.log("DB CONNECTED")
}).catch(() => {
    console.log("UNABLE TO CONNECT TO DB")
})

let DB = mongoose.connection





//use parsing middleware
app.use(express.json());

//using routes
app.use('/api', mainpageRoutes);


const port = process.env.PORT || 5000;



//start a server
app.listen(5000, () => {

    console.log(`listening at ${port}`)
})






