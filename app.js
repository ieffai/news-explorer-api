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

const allowedCors = [
  'localhost:8080'
];

const corsProps = {
  origin: (origin, callback) => {
    if (allowedCors.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};
app.use(cors(corsProps));
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
