const mongoose = require('mongoose');

// eslint-disable-next-line
const validateUrlRegex = /^(https?:\/\/)[w{3}]*\.?[a-z0-9\._\-~:\/\?%#\[\]@!$&'\(\)\*\+\,;=]+#?$/gmi;

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Username is required'],
    trim: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: [true, 'User information is required'],
    trim: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: [true, 'A link to the user avatar is required'],
    validate: {
      validator: (url) => validateUrlRegex.test(url),
      message: 'The entered link to the avatar is badly formed or contains invalid characters',
    },
  },
});

module.exports = mongoose.model('user', userSchema);
