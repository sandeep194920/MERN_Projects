const express = require('express')
const app = express()
const path = require('path')
const data = require('./data')

// expose public folder. Now we can send /images in public folder which can be accessed publicly (see data.js where we specify this images path)
app.use(express.static('./public'))

app.use('/', async (req, res) => {
  res.status(200).json({ tours: data })
})

const PORT = process.env.PORT || 5000

const start = () => {
  app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))
}

start()
