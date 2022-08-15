const express = require('express')
const cors = require('cors')
const mongoos = require('mongoose')

const app = express()
require('dotenv').config()

app.use(cors())
app.use(express.json())

mongoos
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => console.log(err))

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`)
})
