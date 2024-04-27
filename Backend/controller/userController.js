const mongoose = require('mongoose')
const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const createUser = async(req, res) => {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    const {name, email} = req.body
    try {
        const user = await User.create({
            name: name,
            email: email,
            password: hashedPassword,
        })
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}

const loginUser= async(req, res) => {
    const {name, password} = req.body
    const token = jwt.sign(name, process.env.ACCESS_TOKEN_SECRET)
    const user = await User.findOne({name: name})
    if (user === null) {
        res.status(404).json({error: "User does not exist"})
    }
    const userData = {token: token, user: user, message: "Logged In"}
    try {
        if ( await bcrypt.compare(password, user.password)) {
            res.status(200).json(userData)
        } else {
            res.status(500).json({error: "Incorrect Password"})
        }
    } catch(err) {
        res.status(500).json({error: err.message})
    }
}

module.exports = {createUser, loginUser}