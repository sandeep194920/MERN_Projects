// const express = require('express')
// const app = express()
// const products = require('../data')
// const cors = require('cors')
// const helmet = require('helmet')
// const router = express.Router()

// // netlify deploy
// const serverless = require('serverless-http')

// // expose public folder. Now we can send /images in public folder which can be accessed publicly (see data.js where we specify this images path)
// app.use(express.static('./public'))

// // without cors, our front-end can't use this app.
// app.use(cors())
// app.use(helmet())

// router.get('/', async (req, res) => {
//   res.status(200).json({ products })
// })

// // netlify build
// app.use('/.netlify/functions/api', router) // so on netlify, this route is where we get our above route's response back

// /*

// local route ->  /
// netlify route -> baseURL given by netlify +/.netlify/functions/api

// */

// // const PORT = 5000

// // const start = () => {
// //   app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))
// // }

// // start()

// module.exports.handler = serverless(app)

const express = require('express')
const serverless = require('serverless-http')
const cors = require('cors')
// const helmet = require('helmet') // helmet throws error for some reason ,so commenting it out
const products = require('./data')
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

app.use(`/.netlify/functions/api`, router)

module.exports = app
module.exports.handler = serverless(app)
