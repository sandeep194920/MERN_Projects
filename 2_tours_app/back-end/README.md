### Development Notes

- Create the project with `npm init` and accept defaults
- `npm install express nodemon`
- Replae Scripts in package.json with

```json
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  },
```

- Create app.js file and add this boiler plate code

```js
const express = require('express')
const app = express()

app.use('/', async (req, res) => {
  res.send('My first server')
})

const PORT = 5000
const start = () => {
  app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))
}

start()
```
