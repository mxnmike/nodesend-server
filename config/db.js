const mongoose = require('mongoose')
require('dotenv').config({ path: 'variables.env' })

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('DB Connected')
  } catch (error) {
    console.log('Error Occurred')
    console.log(error)
    process.exit(1)
  }
}
module.exports = connectDB
