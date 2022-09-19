const User = require('../model/users.model')
const { hashSync } = require('bcrypt')


////Create User
 const create_user = async(req, res)=> {
    ///Check User already exists
     const userExists = await User.findOne({ email: req.body.email })
     if (userExists) return res.status(409).send({
         message: 'user already exists'
     }) 

     req.body.password = hashSync(req.body.password, 12)
     const createUser = new User(req.body)
     await createUser.save()
     return res.send(createUser)
}



module.exports = {
    create_user
}