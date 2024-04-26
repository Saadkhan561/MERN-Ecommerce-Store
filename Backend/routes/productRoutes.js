const express = require('express')
const { getAllProducts, getProductById } = require('../controller/productController')

const router = express.Router()

router.get('/', (req, res) => {res.status(200).json("Welcome to home page")})
router.get('/getAllProducts', getAllProducts)
router.get('/getProductById/:id', getProductById)

module.exports = router