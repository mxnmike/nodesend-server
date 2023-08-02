const User = require('../models/User')
const bcrypt = require('bcrypt')

exports.authUser = async (req, res, next) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (!user) {
    res.status(401).json({ msg: "User doesn't exist" })
    return next()
  }

  if (bcrypt.compareSync(password, user.password)) {
  } else {
    res.status(401).json({ msg: 'Invalid Credentials' })
    return next()
  }
}

exports.authenticatedUser = async (req, res) => {}
