const { isCelebrate } = require('celebrate');

const errorMiddleware = (err, req, res, next) => {
  if (isCelebrate(err)) {
    return res
      .status(400)
      .send({
        message: err.message,
      });
  }
  if (res.headersSent) {
    return next(err);
  }
  const { statusCode = 500, message } = err;
  return res
    .status(statusCode)
    .send({
      message: statusCode === 500
        ? 'На сервере произошла ошибка'
        : message,
    });
};

module.exports = errorMiddleware;
