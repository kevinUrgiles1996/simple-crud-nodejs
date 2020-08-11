const express = require('express');
const app = express();

const mongoose = require('mongoose');
const bookRoutes = require('./routes/book.route');

app.use(express.json())
app.use(bookRoutes);

const options = {

};
mongoose.connect('mongodb://localhost:27017/booksDB', options)
  .then(() => {
    console.log('DB RUNNING');
    app.listen(3000, () => console.log('Server running on port 3000'));
  })
  .catch((err) => console.log(err))

