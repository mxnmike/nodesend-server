const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')
const { check } = require('express-validator')

router.post('/', authController.authUser)

router.get('/', authController.authenticatedUser)

module.exports = router
