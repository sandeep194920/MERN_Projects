const express = require('express')
const app = express()
const products = require('./data')
const cors = require('cors')
const helmet = require('helmet')

// expose public folder. Now we can send /images in public folder which can be accessed publicly (see data.js where we specify this images path)
app.use(express.static('./public'))

// without cors, our front-end can't use this app.
app.use(cors())
app.use(helmet())

app.use('/', async (req, res) => {
  res.status(200).json({ products })
})

const PORT = 5000

const start = () => {
  app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))
}

start()
