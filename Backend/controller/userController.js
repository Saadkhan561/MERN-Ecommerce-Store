const mongoose = require('mongoose')
const User = require('../models/userModel')
const bcrypt = require('bcrypt')

const createUser = async(req, res) => {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    const {name, email, password} = req.body
    try {
        const user = await User.create({
            name: name,
            email: email,
            password: hashedPassword
        })
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}

module.exports = {createUser}