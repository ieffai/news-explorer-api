const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const error = require('../errors/Errors');
const message = require('../errors/messages');

module.exports.createUser = (req, res, next) => {
  const { email, name } = req.body;
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => User.create({ email, password: hash, name }))
    .then(() => { res.status(201).send({ name, email }); })
    .catch(() => next(new error.DBconflict(message.DB_CONFLICT)));
};

module.exports.getUser = (req, res, next) => {
  User.findById(req.user._id)
    .orFail(() => { throw new error.NotFound(message.ITEM_NOT_FOUND); })
    .then((user) => res.send({ user }))
    .catch(next);
};

const { JWT_SECRET } = require('../config');

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;
  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign(
        { _id: user._id },
        JWT_SECRET,
        { expiresIn: '7d' },
      );
      res
        .cookie('jwt', token, {
          maxAge: 3600000 * 24 * 7,
          httpOnly: true,
          sameSite: true,
        })
        .send({ message: `Привет ${user.name}!` });
    })
    .catch(() => next(new error.Unauthorized(message.BAD_LOGIN)));
};
