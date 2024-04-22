const mongoose = require('mongoose')

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
      status: { type: String, enum: ['Pending', 'Shipped', 'Delivered'], default: 'Pending' },
      
})

const Order = mongoose.model('Order', orderSchema)