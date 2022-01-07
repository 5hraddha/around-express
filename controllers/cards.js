const path = require('path');
const readFile = require('../utils/readFile');

const cardsFilePath = path.join(__dirname, '..', 'data', 'cards.json');

const getCards = (req, res) => {
  readFile(cardsFilePath, res)
    .then((cards) => res
      .status(200)
      .send(cards))
    .catch(() => res
      .status(500)
      .send({ message: 'An error has occurred on the server' })
    );
};

module.exports = {
  getCards
};
