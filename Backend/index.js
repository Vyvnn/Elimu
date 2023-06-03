require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();

const connectDB = () => {
    mongoose.connect('mongodb+srv://vivyan3:burpee6@elimu.lhrbpeb.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

//   mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
// mongodb+srv://vivyan3:<password>@elimu.lhrbpeb.mongodb.net/<database-name>

  const productSchema = new mongoose.Schema({});
  const product = mongoose.model("products", productSchema);
  const db = mongoose.connection;
  
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
    console.log('Connected');
  });
}

console.log(process.env.MONGODB_URI);
connectDB();

//routes
app.get('/', (req, res) => {
  res.render("index.ejs");
});

app.get('/register', (req, res) => {
  res.render("register.ejs");
});

app.get('/login', (req, res) => {
  res.render("login.ejs");
});

app.listen(3003);
