/**
 * Create all the routes related to cards on `/cards` API endpoint.
 * @module routes/cards
 */
const router = require('express').Router();
const {
  getCards,
  createCard,
  deleteCard,
  likeCard,
} = require('../controllers/cards');

/**
 * GET /cards
 * @summary - Get JSON list of all the cards.
 * @param {string} route - Route to serve.
 * @param {Function} routeHandler - A callback to handle the route.
 * @return {object} `200` - success response - application/json.
 * @return {object} `500` - Internal server error response.
 */
router.get('/', getCards);

/**
 * POST /cards
 * @summary - Create a new card.
 * @param {string} route - Route to serve.
 * @param {Function} routeHandler - A callback to handle the route.
 * @return {object} `200` - success response - application/json.
 * @return {object} `400` - Invalid Card data passed for creating a card.
 * @return {object} `500` - Internal server error response.
 */
router.post('/', createCard);

/**
 * DELETE /cards/:cardId
 * @summary - Delete a card by the given ID.
 * @param {string} route - Route to serve.
 * @param {Function} routeHandler - A callback to handle the route.
 * @return {object} `200` - success response - application/json.
 * @return {object} `400` - Invalid Card ID passed for deleting a card.
 * @return {object} `404` - The server can not find the requested resource.
 * @return {object} `500` - Internal server error response.
 */
router.delete('/:cardId', deleteCard);

/**
 * PUT /cards/:cardId/likes
 * @summary - Update a card by liking it.
 * @param {string} route - Route to serve.
 * @param {Function} routeHandler - A callback to handle the route.
 * @return {object} `200` - success response - application/json.
 * @return {object} `400` - Invalid Card ID passed for liking a card.
 * @return {object} `404` - The server can not find the requested resource.
 * @return {object} `500` - Internal server error response.
 */
router.put('/:cardId/likes', likeCard);

module.exports = router;
