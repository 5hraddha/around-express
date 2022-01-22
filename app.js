// All the imports
const express = require('express');
const helmet = require('helmet');
const userRouter = require('./routes/users');
const cardRouter = require('./routes/cards');

const { PORT = 3000 } = process.env;

const app = express();

// Securing the HTTP header
app.use(helmet());

// All the routes
app.use('/users', userRouter);
app.use('/cards', cardRouter);
app.use((req, res) => res
  .status(404)
  .send({ message: 'Requested resource not found' }));

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
