/**
 * Define all the route handlers related to cards on `/cards` API endpoint.
 * @module controllers/cards
 */
const Card = require('../models/card');
const getErrorMsg = require('../utils/getErrorMsg');

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

/**
 * Router handler for POST request on `/cards` API endpoint to create a new card.
 * @param {Object} req - The request object
 * @param {Object} res - The response object.
 * @return {object} `200` - success response - application/json.
 * @return {object} `400` - Invalid Card data passed for creating a card.
 * @return {object} `500` - Internal server error response.
 */
const createCard = (req, res) => {
  const { name, link } = req.body;
  const owner = req.user._id;
  Card.create({ name, link, owner })
    .then((card) => res
      .status(200)
      .send({ data: card }))
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
};

module.exports = {
  getCards,
  createCard,
};
