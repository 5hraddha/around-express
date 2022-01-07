const router = require('express').Router();
const { getCards } = require('../controllers/cards');

// Get JSON list of all cards
router.get('/', getCards);

module.exports = router;
