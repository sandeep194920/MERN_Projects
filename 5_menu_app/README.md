# Project details

- This project is about displaying Menu Items based on the selected category. When `All` is selected, all the items are shown, and when `Breakfast` or `Lunch` or `Dinner` is selected, only those items are shown.

## What you will learn?

1. How to use clipPath CSS property?
2. How to use Gradient Colors?
3. How to use columnSpacing and rowSpacing in MUI Grid?

#### ClipPath

In this project, the header has a shape that can be achieved using this clip path css prop. You can get it's CSS here and turn it into Javascript [Clip Path Website](https://bennettfeely.com/clippy/)

#### Gradient Colors

You can generate beautiful gradients in these sites that can be applied for all the projects

[To generate 1-color, 2-color or 3-color gradients](https://mycolor.space/gradient)

[To get pre-built gradients](https://cssgradient.io/gradient-backgrounds/)

#### ColumnSpacing in Grid

While I was working in this project, I added spacing prop on the Grid container and it applied space on both x and y axes. To counter this I had to wrap my Grid in another Grid and did some adjustments.

Later, I realised that we could control spacing veritically (using rowSpacing) and horizontally (using columnSpacing) on Grid container which comes in handy lot of times and you don't have to use nested Grid container hopefully.

Notice that, after discovering this columnSpacing, I could comment out the underlying Grid container

```js
<Grid
  container
  sx={{ background: 'lightblue' }}
  justifyContent="center"
  alignItems="center"
  columnSpacing={7}
>
  {/* <Grid
        container
        item
        justifyContent="space-between"
        alignItems="center"
        sx={{ background: 'lightgreen' }}
        sm={8}
        md={6}
        xs={9}

      > */}
  <Grid item>
    <Typography variant="h1">All</Typography>
  </Grid>
  <Grid item>
    <Typography>Breakfast</Typography>
  </Grid>
  <Grid item>
    <Typography>Lunch</Typography>
  </Grid>
  <Grid item>
    <Typography>Dinner</Typography>
  </Grid>
</Grid>
// </Grid>
```
