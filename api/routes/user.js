const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const contUser = require('../controller/user');

router.post('/signup', contUser.user_create);

router.post('/login', contUser.user_login)

router.delete('/:userId', checkAuth, contUser.user_delete);

module.exports = router;