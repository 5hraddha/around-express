/**
 * Create all the routes related to cards on `/users` API endpoint.
 * @module routes/users
 */
const router = require('express').Router();
const {
  getUsers,
  getUserProfile,
  createUser,
  updateUserProfile,
} = require('../controllers/users');

/**
 * GET /users
 * @summary - Get JSON list of all the users.
 * @param {string} route - Route to serve.
 * @param {Function} routeHandler - A callback to handle the route.
 * @return {object} `200` - success response - application/json.
 * @return {object} `500` - Internal server error response.
 */
router.get('/', getUsers);

/**
 * GET /users/:userId
 * @summary - Get a specific user profile with an ID.
 * @param {string} route - Route to serve.
 * @param {Function} routeHandler - A callback to handle the route.
 * @return {object} `200` - success response - application/json.
 * @return {object} `400` - Invalid User ID passed for searching a user.
 * @return {object} `404` - The server can not find the requested resource.
 * @return {object} `500` - Internal server error response.
 */
router.get('/:userId', getUserProfile);

/**
 * POST /users
 * @summary - Create a specific user profile.
 * @param {string} route - Route to serve.
 * @param {Function} routeHandler - A callback to handle the route.
 * @return {object} `200` - success response - application/json.
 * @return {object} `400` - Invalid User ID passed for creating a user.
 * @return {object} `500` - Internal server error response.
 */
router.post('/', createUser);

/**
 * PATCH /users/me
 * @summary - Update the current user profile.
 * @param {string} route - Route to serve.
 * @param {Function} routeHandler - A callback to handle the route.
 * @return {object} `200` - success response - application/json.
 * @return {object} `400` - Invalid User data passed for updating the user profile.
 * @return {object} `404` - The server can not find the requested resource.
 * @return {object} `500` - Internal server error response.
 */
router.patch('/me', updateUserProfile);

module.exports = router;
