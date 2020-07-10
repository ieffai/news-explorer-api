const helmet = require('helmet');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

const { PORT, DB_LINK } = require('./config');
const {
  errorMiddleware, limiter,
  errLogger, reqLogger,
} = require('./middlewares');
const router = require('./routes');
const corsOptions = {
  origin: [
    "http://localhost:8080",
    "https://ieffai.github.io/news-explorer-frontend/",
    "https://olehadash.xyz/",
    "http://olehadash.xyz/",
  ],
  credentials: true,
};

app.use(cors(corsOptions));
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
app.use(router);

app.use(errLogger);
app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
