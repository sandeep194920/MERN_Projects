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
  functions = "functions"

[dev]
  publish = "dist"
```

- Create a folder called `dist` (same level as `package.json`) and put a blank file `index.html`
- Add this to scripts block in package.json

```json
  "scripts": {
    "start": "./node_modules/.bin/netlify-lambda serve src",
    "dev": "./node_modules/.bin/netlify-lambda build src"
  },
```

- helemt package causes some errors so commented out here in this project
- `netlify-lambda` package watches for our local changes like `nodemon` so once we make changes and save the file, the changes will be reflected on local server without restarting it
