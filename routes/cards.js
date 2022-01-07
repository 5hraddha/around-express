/**
 * Create all the routes related to cards on `/cards` API endpoint.
 * @module routes/cards
 */
const router = require('express').Router();
const { getCards } = require('../controllers/cards');

/**
 * GET /cards
 * @summary - Get JSON list of all the cards.
 * @param {string} route - Route to serve.
 * @param {Function} routeHandler - A callback to handle the route.
 * @return {object} `200` - success response - application/json.
 * @return {object} `500` - Internal server error response.
 */
router.get('/', getCards);

module.exports = router;
