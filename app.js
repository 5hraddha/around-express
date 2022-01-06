const express = require('express');
const userRouter = require('./routes/users');

const { PORT = 3000 } = process.env;

const app = express();

app.use('/users', userRouter);

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
