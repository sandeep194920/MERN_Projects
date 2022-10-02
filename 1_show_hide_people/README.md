# Project details

[Show Hide People](https://1-show-hide-people-app.netlify.app/)

- A very simple responsive project to show and hide Friends.
- This project shows the use of useState hook. We are switching boolean value on button click and based on the value, we show/hide data.

### What you will learn?

1. How to use useState.
2. Material UI Container, Box, Grid usage
3. How to keep elements present in (Grid items) Grid container in same row?
4. How to write unit tests?

- What is src/setupTests.js file?

5. How to deploy to Netlify?

#### MUI Concepts

##### MUI Grid

When you can't get the content in the grid to span the proper width, which happend in this project, just remember to wrap each grid item under <Grid Item> and then define container prop on parent grid. Once each item is named as item inside the grid, then define xs or md and give the number of columns it should span. I did this in

```js
<Grid item xs={8} sx={{ marginY: 2 }}>
  <Typography>{description}</Typography>
</Grid>
```

##### MUI Container

- Used to center the content on the page. Mostly used to center the entire content of the app to center

##### MUI Box

- Used like a div and on that we can use css props on sx prop

##### MUI Paper

- Similar to card, but gives a nice elevation and can be used as an alternative to card where ever possible

##### How to keep elements present in (Grid items) Grid container in same row?

If we have a requirement where image (on left) and content (on right) must be in the same row in a card, then we can use `wrap="nowrap"` inside Grid container like this.

```js
// we are using wrap='nowrap' here to keep img avatar and typography on same row in all screen sizes
<Grid container alignItems="center" wrap="nowrap">
  <Grid item>
    <Avatar />
  </Grid>
  <Grid item>
    <Typography>{description}</Typography>
  </Grid>
</Grid>
```

#### Unit Tests

We are writing unit tests here for to test

- If heading is rendered to the UI
- If correct number of friend cards are being displayed or not initially
- When the Show Friends button is clicked, the cards are hidden and also the button text changes
- When this button is clicked again the friend cards are displayed again or not

You can run `npm test` and press `a` to run all the tests

##### What is `src/setupTests.js` file?

This is a file that helps when we are writing tests. This file contains one single line of code

```js
import '@testing-library/jest-dom'
```

Techincally we don't need this file and we can import this line in all our test files, but if it exists at `src/setupTests.js` then we don't need to import in each test file.

- Why do we need this `import '@testing-library/jest-dom'` line in the first place?

It allows you to do things like:
`expect(element).toHaveTextContent(/react/i)`

`toHaveTextContent` method is actully provided by `@testing-library/jest-dom` and without this import it doesn't work.

[Learn more about other methods provided by `@testing-library/jest-dom`](https://github.com/testing-library/jest-dom)

##### How to deploy to Netlify

- Each folder in this repo is a react app that we have deployed in this page
- `cd project_folder`. Example, `cd 1_show_hide_people`
- `npm run build`
- Make sure /build is removed in .gitignore. Otherwise this cannot be pushed to git
- git add, commit and push this build
- Go to [Netlify site](https://app.netlify.com/start) and choose Github
- Select MERN_Projects
- Base directory - project/build. Example, `1_show_hide_people/build` or `2_tours_app/front-end/build`
- Build command - `npm install`
- Click on Deploy Site
