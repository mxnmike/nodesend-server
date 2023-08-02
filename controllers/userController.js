const User = require('../models/User')
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')

exports.newUser = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  const { email, password } = req.body

  let user = await User.findOne({ email })

  if (user) {
    return res.status(400).json({ msg: 'User already Registered' })
  }

  user = await new User(req.body)

  const salt = await bcrypt.genSalt(10)
  user.password = await bcrypt.hash(password, salt)
  try {
    await user.save()

    res.json({ msg: 'User Created Successfully' })
  } catch (error) {
    console.log(error)
  }
}
