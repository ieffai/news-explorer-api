const router = require('express').Router();
const error = require('../errors/Errors');
const message = require('../errors/messages');

router.all('*', (req, res, next) => next(new error.NotFound(message.ITEM_NOT_FOUND)));

module.exports = router;
