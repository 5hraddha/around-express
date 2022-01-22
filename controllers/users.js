/**
 * Define all the route handlers related to users on `/users` API endpoint.
 * @module controllers/users
 */
const User = require('./../models/user');
const getErrorMsg = require('./../utils/getErrorMsg');

/**
 * Router handler for GET request on `/users` API endpoint to get all the users.
 * @param {Object} req - The request object
 * @param {Object} res - The response object.
 * @return {object} `200` - success response with data - application/json.
 * @return {object} `500` - Internal server error response.
 */
const getUsers = (req, res) => {
  User.find({})
    .orFail()
    .then((users) => res
      .status(200)
      .send(users))
    .catch(() => res
      .status(500)
      .send({ message: `${err.name} - An error has occurred on the server` }));
};

/**
 * Router handler for GET request on `/users/:userId` API endpoint to get a specific user profile.
 * @param {Object} req - The request object
 * @param {Object} res - The response object.
 * @return {object} `200` - success response - application/json.
 * @return {object} `400` - Invalid User ID passed for searching a user.
 * @return {object} `404` - The server can not find the requested resource.
 * @return {object} `500` - Internal server error response.
 */
const getUserProfile = (req, res) => {
  const { userId } = req.params;

  User.findById(userId)
    .orFail()
    .then((user) => res
      .status(200)
      .send({ data: user }))
    .catch((err) => {
      if (err.name === 'DocumentNotFoundError') {
        res
          .status(404)
          .send({ message: `${err.name} - User ID not found` });
      } else if (err.name === 'CastError') {
        res
          .status(400)
          .send({ message: `${err.name} - Invalid User ID passed for searching a user` });
      } else {
        res
          .status(500)
          .send({ message: `${err.name} - An error has occurred on the server` });
      }
    });
}

/**
 * Router handler for POST request on `/users` API endpoint to create a specific user profile.
 * @param {Object} req - The request object
 * @param {Object} res - The response object.
 * @return {object} `200` - success response - application/json.
 * @return {object} `400` - Invalid User data passed for creating a user.
 * @return {object} `500` - Internal server error response.
 */
const createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res
      .status(200)
      .send({ data: user }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res
          .status(400)
          .send({ message: getErrorMsg(err) });
      } else {
        res
          .status(500)
          .send({ message: `${err.name} - An error has occurred on the server` });
      }
    });
}

module.exports = {
  getUsers,
  getUserProfile,
  createUser,
};
