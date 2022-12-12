**Dependencies**
`npm install nanoid@3.3.4` - Installing this particular version as it complains with latest version [Reference](https://stackoverflow.com/a/74546363/10824697)

**How to create backend app with express**
Refer [README of Tours/backend!](https://github.com/sandeep194920/React_MUI_Express_Projects/tree/master/03_tours_app/back-end)

**How to deploy API to Netlify ?**
[Watch to know](https://www.youtube.com/watch?v=hQAu0YEIF0g)

- Install `netlify-lambda` package that will serve our functions locally and compile them for us in production. To know more about netlify functions, [refer this](https://www.netlify.com/blog/2018/09/13/how-to-run-express.js-apps-with-netlify-functions/)
- Install `serverless-http` that takes our express app and converts into lambda ready-to-go

`npm install netlify-lambda serverless-http`

- Create a folder called functions (same level as `package.json`) which netlify uses, and then add it in `gitignore` file
- Create `netlify.toml` file (same level as `package.json`) and add this code

```toml
[build]
  command = "npm install && npm run build"
  functions = "functions"

[dev]
  publish = "dist"
```

- Create a folder called `dist` (same level as `package.json`) and put a blank file `index.html`
- Add this to scripts block in package.json

```json
  "scripts": {
    "build": "netlify-lambda build src",
    "start": "./node_modules/.bin/netlify-lambda serve src",
    "dev": "./node_modules/.bin/netlify-lambda build src"
  },
```

- helemt package causes some errors so commented out here in this project
- `netlify-lambda` package watches for our local changes like `nodemon` so once we make changes and save the file, the changes will be reflected on local server without restarting it

**The `src/server.js` looks like this**

```js
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
```

On netlify, follow these steps:

- Go to [Netlify site](https://app.netlify.com/start) and choose Github
- Select the main repo and set [these values](https://app.netlify.com/sites/14-shopping-cart-products/settings/deploys)
  - Base Directory - `14_shopping_cart/back-end`
  - Build Command - `npm install && npm run build && node node_modules/pug-cli/index.js views/ --out ./`
- Once deployed, click the URL deployed and navigate to `DEPLOYED-URL/.netlify/functions/server` [like this](https://14-shopping-cart-products.netlify.app/.netlify/functions/server)
