const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Product = require('../models/product');


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
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });
    
    product.save().then(result => {
        console.log(result);
    }).catch(err => console.log(err));

    res.status(200).json({
        message: "Product was listed",
        createdProduct: product
    })
})


module.exports = router;