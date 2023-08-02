const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const { check } = require('express-validator')

router.post(
  '/',
  [
    check('email', 'Email is Invalid').isEmail(),
    check('name', 'Name is Mandatory').not().isEmpty(),
    check('password', 'Password must be at least 6 characters').isLength({
      min: 6,
    }),
  ],
  userController.newUser
)

module.exports = router
