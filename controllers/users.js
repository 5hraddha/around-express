/**
 * Define all the route handlers related to users on `/users` API endpoint.
 * @module controllers/users
 */
const path = require('path');
const readFile = require('../utils/readFile');

const usersFilePath = path.join(__dirname, '..', 'data', 'users.json');

/**
 * Router handler for GET request on `/users` API endpoint to get all the users.
 * @param {Object} req - The request object
 * @param {Object} res - The response object.
 * @return {object} `200` - success response with data - application/json.
 * @return {object} `500` - Internal server error response.
 */
const getUsers = (req, res) => {
  readFile(usersFilePath, res)
    .then((users) => res
      .status(200)
      .send(users))
    .catch(() => res
      .status(500)
      .send({ message: 'An error has occurred on the server' }));
};

/**
 * Router handler for GET request on `/users/:id` API endpoint to get a specific user profile.
 * @param {Object} req - The request object
 * @param {Object} res - The response object.
 * @return {object} `200` - success response - application/json.
 * @return {object} `404` - The server can not find the requested resource.
 * @return {object} `500` - Internal server error response.
 */
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
      .send({ message: 'An error has occurred on the server' }));
};

module.exports = {
  getUsers,
  getUserProfile,
};
