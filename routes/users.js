/**
 * Create all the routes related to cards on `/users` API endpoint.
 * @module routes/users
 */
const router = require('express').Router();
const { getUsers, getUserProfile } = require('../controllers/users');

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
 * GET /users/:id
 * @summary - Get a specific user profile with an ID.
 * @param {string} route - Route to serve.
 * @param {Function} routeHandler - A callback to handle the route.
 * @return {object} `200` - success response - application/json.
 * @return {object} `404` - The server can not find the requested resource.
 * @return {object} `500` - Internal server error response.
 */
router.get('/:id', getUserProfile);

module.exports = router;
