// package require 
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const { app } = require('./src/app.js')

// env configuration 
dotenv.config();

// mongodb connection 
// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });
// server listening
app.listen(8000, () => {
    console.log("Server running on url: http://localhost:" + 8000);
})
