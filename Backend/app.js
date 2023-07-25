const express = require('express');
const mainpageRoutes = require('./routes/mainpage');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the cors package

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

// Using routes
app.use('/api', mainpageRoutes);

const port = process.env.PORT || 5000;

// Start a server
app.listen(port, () => {
  console.log(`Listening at ${port}`);
});
