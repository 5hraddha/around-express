/**
 * Data layer for a card
 * @module models/card
 */
const mongoose = require('mongoose');

// eslint-disable-next-line
const validateUrlRegex = /^(https?:\/\/)[w{3}]*\.?[a-z0-9\._\-~:\/\?%#\[\]@!$&'\(\)\*\+\,;=]+#?$/gmi;

/**
 * Card schema. Contains all the cards related fields: name, link, owner, likes and createdAt
 * @constructor card
 */
const cardSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Card name is required'],
    trim: true,
    minlength: 2,
    maxlength: 30,
  },
  link: {
    type: String,
    required: [true, 'A link to the card picture is required'],
    validate: {
      validator: (url) => validateUrlRegex.test(url),
      message: 'The entered link to the picture is badly formed or contains invalid characters',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: [true, 'The owner of the card is required'],
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      default: [],
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('card', cardSchema);
