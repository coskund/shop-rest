const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const contOrder = require('../controller/order');

router.get('/', checkAuth, contOrder.order_get_all);

router.get('/:orderId', checkAuth, contOrder.order_get_one);

router.post('/', checkAuth, contOrder.order_create)

router.delete('/:orderId', checkAuth, contOrder.order_delete);

module.exports = router;