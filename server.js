require("dotenv").config();
const express = require("express");
const routes = require("./routes");

const PORT = process.env.PORT || 5000;
const app = express();

// Defines middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Routes
// app.use('/users', require('./routes/users'));
app.use(routes);
// console.log(process.env);
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
