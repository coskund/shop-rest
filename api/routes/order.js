const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.status(200).json({
        listProduct: [
            { id: 1, name: "list_1" },
            { id: 2, name: "list_2" }
        ]
    })
})

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: "Your order created"
    })
})


module.exports = router;