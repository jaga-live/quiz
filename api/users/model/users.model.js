const { model, Schema } = require('mongoose')


const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    jwtSession: String
})

module.exports = model('users', UserSchema)