require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const path = require('path');

const PORT = process.env.PORT || 5000;
const app = express();

// Defines middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// app.use('/users', require('./routes/users'));
app.use(routes);

// Static assets
if (
  process.env.NODE_ENV === 'production' ||
  process.env.NODE_ENV === 'staging'
) {
  app.use(express.static(__dirname + '/client/build'));
  // If Express doesn't recognize route serve index.html
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
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

console.log(process.env.MONGODB_URI);

// console.log(process.env);
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
