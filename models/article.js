const mongoose = require('mongoose');
const validator = require('validator');

const articleSchema = new mongoose.Schema({
  keyword: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    validate: {
      validator: (v) => validator.isURL(v),
      message: 'Здесь должна быть ссылка',
    },
    required: true,
  },
  image: {
    type: String,
    validate: {
      validator: (v) => validator.isURL(v),
      message: 'Здесь должна быть ссылка',
    },
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    select: false,
  },
});

module.exports = mongoose.model('article', articleSchema);
