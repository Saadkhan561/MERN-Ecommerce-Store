const mongoose = require('mongoose')

const Schema = mongoose.Schema

const orderSchema = mongoose.Schema({
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
      }],
      customer: {
        type: Schema.Types.ObjectId,
        ref: 'Customer'
      },
      totalAmount: { type: Number, required: true },
      
})

module.exports = mongoose.model('Order', orderSchema)