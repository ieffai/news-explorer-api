const router = require('express').Router();

const usersRouter = require('./users');
const articlesRouter = require('./articles');
const errorRouter = require('./error');


router.use('/users', usersRouter);
router.use('/articles', articlesRouter);
router.use('/', errorRouter);

module.exports = router;
