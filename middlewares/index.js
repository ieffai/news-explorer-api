const {
  signIn, signUp, idValid, createValid,
} = require('./celebrateValidators');
const { errLogger, reqLogger } = require('./logger');
const errorMiddleware = require('./error');
const auth = require('./auth');
const { limiter } = require('./limiter');

module.exports = {
  errLogger,
  reqLogger,
  errorMiddleware,
  auth,
  signIn,
  signUp,
  idValid,
  createValid,
  limiter,
};
