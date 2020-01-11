require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;
const app = express();

// Defines middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Connects to Mongo DB
var mongoDB = 'mongodb://localhost/studyapp';
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Routes
// app.use('/users', require('./routes/users'));
app.use(routes);
// console.log(process.env);
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
