const path = require('path');
const readFile = require('../utils/readFile');

const usersFilePath = path.join(__dirname, '..', 'data', 'users.json');

const getUsers = (req, res) => {
  readFile(usersFilePath, res)
    .then((users) => res
      .status(200)
      .send(users))
    .catch(() => res
      .status(500)
      .send({ message: 'An error has occurred on the server' })
    );
};

const getUserProfile = (req, res) => {
  readFile(usersFilePath, res)
    .then((users) => users
      .find((user) => user._id === req.params.id))
    .then((user) => {
      if (!user) {
        res
          .status(404)
          .send({ message: 'User ID not found' });
        return;
      }
      res
        .status(200)
        .send(user);
    })
    .catch(() => res
      .status(500)
      .send({ message: 'An error has occurred on the server' })
    );
};

module.exports = {
  getUsers,
  getUserProfile,
};
