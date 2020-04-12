const { celebrate, Joi } = require('celebrate');

const stringValidator = /([А-ЯЁ][а-яё]+-?)+/;
const urlValidator = /http(s?):\/\/(www\.)?((\w|[a-яё]|-)+((\.(\w|[a-яё]|-)+){1,4})?\.(\w|[a-яё]|-)+)(:(\d{2,5}))?(\w|\/|\\)+#?/;
const passValidator = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/;

const Errors = require('../errors/Errors');
const {
  BAD_ID, BAD_EMAIL, BAD_NAME, BAD_PASS, SHORT_PASS, BAD_URL,
} = require('../errors/messages');

const signIn = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email().error(new Errors.BadRequest(BAD_EMAIL)),
    password: Joi.string().required().min(6).error(new Errors.BadRequest(SHORT_PASS)),
  }),
});

const signUp = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email()
      .error(new Errors.BadRequest(BAD_EMAIL)),
    password: Joi.string()
      .pattern(new RegExp(passValidator))
      .required()
      .min(6)
      .error(new Errors.BadRequest(BAD_PASS)),
    name: Joi.string().pattern(new RegExp(stringValidator)).required().min(2)
      .max(30)
      .error(new Errors.BadRequest(BAD_NAME)),
  }),
});

const createValid = celebrate({
  body: Joi.object().keys({
    keyword: Joi.string().required(),
    title: Joi.string().required(),
    text: Joi.string().required(),
    date: Joi.string().required(),
    source: Joi.string().required(),
    link: Joi.string()
      .pattern(new RegExp(urlValidator))
      .required()
      .error(new Errors.BadRequest(BAD_URL)),
    image: Joi.string()
      .pattern(new RegExp(urlValidator))
      .required()
      .error(new Errors.BadRequest(BAD_URL)),
  }),
});

const idValid = celebrate({
  params: Joi.object().keys({
    id: Joi.string().alphanum().length(24)
      .error(new Errors.BadRequest(BAD_ID)),
  }),
});

module.exports = {
  signIn,
  signUp,
  idValid,
  createValid,
};
