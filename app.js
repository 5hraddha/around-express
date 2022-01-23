// All the imports
const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');
const userRouter = require('./routes/users');
const cardRouter = require('./routes/cards');

const { PORT = 3000 } = process.env;

const app = express();

// Secure the HTTP header
app.use(helmet());

// Connect to the MongoDB server
mongoose.connect('mongodb://127.0.0.1:27017/aroundb');

app.use(express.json());

// All the routes
app.use('/users', userRouter);
app.use('/cards', cardRouter);
app.use((req, res) => res
  .status(404)
  .send({ message: 'Requested resource not found' }));

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
