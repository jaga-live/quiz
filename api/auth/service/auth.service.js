const User = require('../../users/model/users.model')
const { compareSync } = require('bcrypt')
const { v4 } = require('uuid')
const jwt = require('jsonwebtoken')

const login = async(req, res) => {
    const { email, password } = req.body
    
    ////Check email
    const isUserValid = await User.findOne({ email })
    if (!isUserValid) return res.status(401).send('Invalid Email or Password')
    
    if (!compareSync(password, isUserValid.password)) return res.status(401).send("Invalid Email or Password");

    ///Sign JWT token
    const sessionId = v4()
    const token = jwt.sign({
        userId: isUserValid._id,
        email: isUserValid.email,
        sessionId
    }, process.env.JWT_SECRET)

    ////Update Session in DB
    await User.updateOne({ _id: isUserValid._id }, {
        $push: {
            jwtSession: sessionId
        }
    })

    return res.send({
        name: isUserValid.name,
        email: isUserValid.email,
        token
    })
}

module.exports = {
    login
}