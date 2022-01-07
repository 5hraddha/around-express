/**
 * Define all the route handlers related to cards on `/cards` API endpoint.
 * @module controllers/cards
 */
const path = require('path');
const readFile = require('../utils/readFile');

const cardsFilePath = path.join(__dirname, '..', 'data', 'cards.json');

/**
 * Router handler for GET request on `/cards` API endpoint to get all the cards.
 * @param {Object} req - The request object
 * @param {Object} res - The response object.
 * @return {object} `200` - success response with data - application/json.
 * @return {object} `500` - Internal server error response.
 */
const getCards = (req, res) => {
  readFile(cardsFilePath, res)
    .then((cards) => res
      .status(200)
      .send(cards))
    .catch(() => res
      .status(500)
      .send({ message: 'An error has occurred on the server' }));
};

module.exports = {
  getCards,
};
