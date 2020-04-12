const helmet = require('helmet');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

const { PORT, DB_LINK } = require('./config');
const { createUser, login } = require('./controllers/users');
const {
  errorMiddleware, auth, limiter,
  errLogger, reqLogger,
  signIn, signUp,
} = require('./middlewares');
const { usersRouter, articlesRouter, errorRouter } = require('./routes');

mongoose.connect(DB_LINK, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(reqLogger);
app.use(limiter);

app.post('/signup', signUp, createUser);
app.post('/signin', signIn, login);

app.use(auth);
app.use('/users', usersRouter);
app.use('/articles', articlesRouter);

app.use(errLogger);
app.use('/', errorRouter);
app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
