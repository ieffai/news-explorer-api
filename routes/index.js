const router = require('express').Router();
const { auth } = require('../middlewares');
const usersRouter = require('./users');
const articlesRouter = require('./articles');
const errorRouter = require('./error');
const signInRouter = require('./signin');
const signUpRouter = require('./signup');

router.use('/signup', signUpRouter);
router.use('/signin', signInRouter);

router.use(auth);
router.use('/users', usersRouter);
router.use('/articles', articlesRouter);
router.use('/', errorRouter);

module.exports = router;
