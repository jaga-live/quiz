const express = require('express')
const cors = require('cors')
require('dotenv/config')

///Express App
const app = express()

//Server Config
app.use(express.json())
app.use(cors())

///MongDB
require('./database/mongoose')

///Controller
const UserController = require('./api/users/controller/users.controller')
const AuthController = require('./api/auth/controller/auth.controller')
app.use([UserController, AuthController])

app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`)
})