const Article = require('../models/article');
const error = require('../errors/Errors');
const message = require('../errors/messages');


module.exports.getArticles = (req, res, next) => {
  Article.find({})
    .then((articles) => res.send({ data: articles }))
    .catch(next);
};

module.exports.createArticle = (req, res, next) => {
  const {
    keyword, title, text, date, source, link, image,
  } = req.body;
  Article.create({
    keyword, title, text, date, source, link, image, owner: req.user._id,
  })
    .then(() => res.status(201).send({
      keyword, title, text, date, source, link, image,
    }))
    .catch(next);
};

module.exports.delArticle = (req, res, next) => {
  Article.findOne({ _id: req.params.id })
    .orFail(() => { throw new error.NotFound(message.ITEM_NOT_FOUND); })
    .then(() => Article.deleteOne({ _id: req.params.id, owner: req.user._id })
      .orFail(() => { throw new error.Forbidden(message.FORBIDDEN); })
      .then(() => { res.send({ message: 'Статья успешно удалена' }); }))
    .catch(next);
};
