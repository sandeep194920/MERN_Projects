# Project details

A very simple responsive project to show and hide Friends. This project shows the use of useState hook. We are switching boolean value on button click and based on the value, we show/hide data.

### What you will learn?

1. How to use useState
2. Material UI Container, Box, Grid usage

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
