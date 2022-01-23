/**
 * Define all the route handlers related to cards on `/cards` API endpoint.
 * @module controllers/cards
 */
const Card = require('../models/card');

/**
 * Router handler for GET request on `/cards` API endpoint to get all the cards.
 * @param {Object} req - The request object
 * @param {Object} res - The response object.
 * @return {object} `200` - success response with data - application/json.
 * @return {object} `404` - The server can not find the requested resource.
 * @return {object} `500` - Internal server error response.
 */
const getCards = (req, res) => {
  Card.find({})
    .orFail()
    .then((cards) => res
      .status(200)
      .send(cards))
    .catch((err) => {
      if (err.name === 'DocumentNotFoundError') {
        res
          .status(404)
          .send({ message: `${err.name} - Cards not found` });
      } else {
        res
          .status(500)
          .send({ message: `${err.name} - An error has occurred on the server` });
      }
    });
};

module.exports = {
  getCards,
};
