const router = require('express').Router();
const { getUsers, getUserProfile } = require('../controllers/users');

// Get JSON list of all users
router.get('/', getUsers);

// Get a user with an ID passed after /users
router.get('/:id', getUserProfile);

module.exports = router;