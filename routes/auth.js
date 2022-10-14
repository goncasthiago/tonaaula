const express = require('express')
const { login, register, google } = require('../controllers/auth')
const router = express.Router()

router.route('/login').post(login)
router.route('/google').post(google);
router.route('/register').post(register)

module.exports = router