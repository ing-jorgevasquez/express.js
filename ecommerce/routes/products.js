const express = require('express');
const router = express.Router();

const products = [{
        name: "Sombrero vueltiao",
        price: 80
    },
    {
        name: "Flauta de millo",
        price: 100
    }
];

router.get('/', function (req, res, next) {
    res.render('products', {
        products
    });
})

module.exports = router;