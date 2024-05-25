
const Order = require('../models/orderModel')

const placeOrder = async(req, res) => {
    try {
        const order=  Order.create(req.body)
        res.status(200).json(order)
    } catch(err) {
        res.status(500).json({error: err.message})
    }
}

module.exports = {placeOrder}