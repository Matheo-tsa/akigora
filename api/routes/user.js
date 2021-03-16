const express = require('express')
const UserRouter = express.Router()
const UserController = require('../Controllers/User')

UserRouter.post('/register', UserController.register)
UserRouter.post('/login', UserController.login)
UserRouter.put('/update/{id}', UserController.put)
UserRouter.delete('/delete/{id}', UserController.delete)

module.exports = UserRouter
