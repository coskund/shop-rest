const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.status(200).json({
        listProduct: [
            { id: 1, name: "Halı" },
            { id: 2, name: "Sehpa" }
        ]
    })
})

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    res.status(200).json({
        name: (id + "_random"),
        id: id
    })
})

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: "Product was listed"
    })
})


module.exports = router;