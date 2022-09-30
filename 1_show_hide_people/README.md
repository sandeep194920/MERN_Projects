# Project details

[Show Hide People](https://1-show-hide-people-app.netlify.app/)

- A very simple responsive project to show and hide Friends.
- This project shows the use of useState hook. We are switching boolean value on button click and based on the value, we show/hide data.

### What you will learn?

1. How to use useState.
2. Material UI Container, Box, Grid usage
3. How to keep elements present in (Grid items) Grid container in same row?
4. How to write unit tests?

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

##### Unit Tests

We are writing unit tests here for to test

- If heading is rendered to the UI
- If correct number of friend cards are being displayed or not initially
- When the Show Friends button is clicked, the cards are hidden and also the button text changes
- When this button is clicked again the friend cards are displayed again or not
