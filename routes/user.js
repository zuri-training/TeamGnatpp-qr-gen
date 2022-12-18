const express = require("express")
const { signup, signin, signout } = require("../controllers/user")
// const {check} = require('express-validator')
const router = express.Router()

router.post('/signup', signup)

router.post('/signin')

router.get("/signout");

module.exports = router