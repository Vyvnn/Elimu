const path = require("path");
const express = require('express');
const mainpageRoutes = require('./routes/mainpage');
const mongoose = require('mongoose');
const cors = require('cors'); 

const app = express();

// DB Connection
mongoose.connect('mongodb+srv://vivyan3:burpee6@e-limu.pdudq6m.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch(() => {
    console.log("UNABLE TO CONNECT TO DB");
  });

let DB = mongoose.connection;

// Use parsing middleware
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// Serve static files from the frontend build folder
app.use(express.static(path.join(__dirname, "../frontend/build")));

// Route all GET requests to the index.html file
app.get("*", (req, res) => {

  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));

});


// Using routes
app.use('/api', mainpageRoutes);

const port = process.env.PORT || 5000;

// Start a server
app.listen(port, () => {
  console.log(`Listening at ${port}`);
});
