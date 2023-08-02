const express = require('express')
const connectDB = require('./config/db')

//create server
const app = express()

//Connect DB
connectDB()
console.log('Starting Node Send')

//App Port
const port = process.env.PORT || 4000

//Enable reed body values
app.use(express.json())

//App Routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is working in ${port}`)
})
