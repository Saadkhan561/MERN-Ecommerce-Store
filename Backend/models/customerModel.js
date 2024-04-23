const mongoose = require('mongoose')

const customerSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
  password: {type: String, required: true}  
})

module.exports = mongoose.model('Customer', customerSchema)