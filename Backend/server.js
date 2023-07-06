const express = require('express');
const app= express();


//routes
app.get('/',(req,res)=>{
res.send('hello')

})







app.listen(5000,()=>{

    console.log('listening to port 5000')
})






