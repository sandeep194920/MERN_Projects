### Checkout this project

[Tours API](https://tours-app-2.herokuapp.com/)

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
- Since `node_modules` are created, we will ignore that in gitignore, so
  - Create a `.gitignore` file in same level as `node_modules` (not inside `node_modules`)
  - Add `/node_modules` inside `.gitignore` file and save it

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

### To deploy to heroku follow the steps below

- Add this to `Package.json`

```json
"scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
}

"engines": {
    "node": "14.x"
  }
```

- Create file called `Procfile` without extension in the root folder (backend folder) and add this text

```
web: node app.js
```

- Remove existing git `rm -rf .git` and add do this

```
git init
git add -A
git commit -m "initial commit"
heroku login
heroku create your_app_name
git push heroku master
```

- If any env variables need to be set, then do it in heroku UI before `git push heroku master`. I didn't do it in this project.
