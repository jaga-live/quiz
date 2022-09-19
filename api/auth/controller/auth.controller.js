const router = require("express").Router();

const { login } = require("../service/auth.service");

router.post("/login", login);

module.exports = router;
