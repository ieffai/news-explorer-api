const router = require('express').Router();

const { getUser, getUsers } = require('../controllers/users');
const { idValid } = require('../middlewares');

router.get('/me/:id', idValid, getUser);
router.get('/', getUsers);

module.exports = router;
