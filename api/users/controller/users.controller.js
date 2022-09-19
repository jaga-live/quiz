const router = require('express').Router()

const {create_user} = require('../service/users.service')


router.post('/user', create_user)

module.exports = router