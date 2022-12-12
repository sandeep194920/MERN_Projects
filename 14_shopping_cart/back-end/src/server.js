const express = require('express')
const serverless = require('serverless-http')
const cors = require('cors')
// const helmet = require('helmet') // helmet throws error for some reason ,so commenting it out
const products = require('./data')
const path = require('path')
const app = express()
const router = express.Router()

// expose public folder. Now we can send /images in public folder which can be accessed publicly (see data.js where we specify this images path)
app.use(express.static('./public'))

// without cors, our front-end can't use this app.
app.use(cors())
// app.use(helmet())

router.get('/', (req, res) => {
  res.status(200).json({ products })
})

app.use('/.netlify/functions/server', router) // path must route to lambda
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')))

module.exports = app
module.exports.handler = serverless(app)
