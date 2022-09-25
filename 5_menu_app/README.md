# Project details

<span style="color : lightgreen;">This project is about displaying Menu Items based on the selected category. When `All` is selected, all the items are shown, and when `Breakfast` or `Lunch` or `Dinner` is selected, only those items are shown.</span>
<br>

## What you will learn?

1. How to use clipPath CSS property?
2. How to use Gradient Colors?
3. How to use columnSpacing and rowSpacing in MUI Grid?
4. Hower + Active class changes the styling. How to stop that?
5. How to display images in react when we use image links?
6. `<Grid item>` vs `<Grid container>` vs `<Grid container item>`.
7. How to keep image column and description column in same row in Grid container of MenuItem?
8. How to use theme prop in sx?

---

<br>

### <span style="color:orange">1. How to use clipPath CSS property?</span>

<br>

In this project, the header has a shape that can be achieved using this clip path css prop. You can get it's CSS here and turn it into Javascript [Clip Path Website](https://bennettfeely.com/clippy/)

---

### <span style="color:orange">2. Gradient Colors</span>

<br>

You can generate beautiful gradients in these sites that can be applied for all the projects

[To generate 1-color, 2-color or 3-color gradients](https://mycolor.space/gradient)

[To get pre-built gradients](https://cssgradient.io/gradient-backgrounds/)

---

### <span style="color:orange">3. ColumnSpacing in Grid</span>

<br>

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

---

### <span style="color:orange">4. Hower + Active class changes the styling. How to stop that?</span>

<br>

- Let's explore the problem what I faced. I was showing active item (selected item) and other items differently

```js
<Typography
  variant="h6"
  sx={
    category === selected
      ? { ...menuStyles.menuItem, ...menuStyles.menuItem.active }
      : menuStyles.menuItem
  }
>
  {category}
</Typography>
```

- When `selected === catgory` I add an active class and if not I add just menuItem class and remove active class

```js
menuItem: {
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    padding: 1,
    cursor: 'pointer',
    textTransform: 'capitalize',
    // When hovered
    '&:hover': {
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
    borderRadius: '5px',
    transition: 'all 0.3s',
    },
    active: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    borderRadius: '5px',
    border: 'none',
    },
}
```

- The problem I faced here is, when I hover selected element (which also had active class), the text-color changed to primary. Since background also was same color, the text wasn't visible when active class is hovered(selected item)

- To solve this issue, I just changed the color on active hovered element like this

```js
active: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    borderRadius: '5px',
    border: 'none',
    // added this hover class on active which actually sets back the color to white which gets overridden by menuItem:hover
    '&:hover': {
        color: 'white',
    },
},
```

---

### <span style="color:orange">5. How to display images in react when we use image links?</span>

<br>

In this project, we are using `data.js` to get our data. In that, we have image link that's like this `./images/item-1.jpeg`

```js
const menu = [
  {
    id: 1,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 15.99,
    img: './images/item-1.jpeg',
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
]
```

So where are these images placed? Is this placed in the in one level above in the `images` folder? <strong>Actually NO!</strong>.

If you notice, the path starts with `./images` and in which ever folder you put the `data.js` file this path doesn't change. So what does it mean? It means that we have to put it in a folder such that it will be accessed as './' and one such folder is `public` folder. This folder is exposed to public and you would refer to this folder by saying './'

This need not be named images. You can name it anything. For example, let's say you have `public/assets/img/img-1.jpeg`. Then in your data.js (of course you can put this in any folder within src), you can give this image path and it will work.

#### Gotchas: You cannot import an image if it's in public folder, but directly use it in`<img src='./images/img-1'>`

One gotcha is that, like we did in [3-Tours-App](https://github.com/sandeep194920/MERN_projects/blob/master/3_tours_app/front-end/src/Components/Header/header.js) we can't import images if we place in public folder. In this Tours app, it was possible to import because we placed our images inside src folder and not in public folder(public is outside src folder).

So, we can import img only if it's inside src in any folder. If it's outside we can't import but use directly in JSX `<image src/>`

```js
import img from '../public/images/item-1.jpeg' // This is placed in public folder and will give us error as public folder will not be accessible for imports

//but the below will work. Not importing but using this. This is the technique we generally use when we place our images directly inside our react app and want to use the image link from data file to display, this is the way to go
;<img src="./images/item-1.jpeg" alt="this will work" />
```

---

### <span style="color:orange">6. `<Grid item>` vs `<Grid container>` vs `<Grid container item>`</span>

<br>

`<Grid container></Grid>` is used as a container and inside that, each item can be wrapped by `<Grid item>`

<strong>For example</strong>

```js
<Grid container>
  <Grid item>
    <Typography>Item 1</Typography>
  </Grid>
  <Grid item>
    <Typography>Item 2</Typography>
  </Grid>
  <Grid item>
    <Typography>Item 3</Typography>
  </Grid>
  <Grid item>
    <Typography>Item 4</Typography>
  </Grid>
<Grid>
```

Each Typography is wrapped under `<Grid item>` because, on Grid item, we can specify breakpoints like xs, md and say how much space it needs to consume.

```js
<Grid item xs={8} md={6}>
  <Typography>Item 1</Typography>
</Grid>
```

##### Now what is `<Grid container item></Grid>`

Some times you have a setup like this

```js
<Grid container>

  <Grid item> // This is an item and inside that we again have a container that holds items

    <Grid container direction='column'>
      <Grid item>
        <Typography>Item 1</Typography>
      </Grid>

    </Grid>

  </Grid>

<Grid>
```

In this case <strong>Sometimes</strong> we can combine item and container like this

```js
<Grid container>

  <Grid item> // This is an item and inside that we again have a container that holds items

    <Grid container item direction='column'> //combined
        <Typography>Item 1</Typography>
    </Grid>

  </Grid>

<Grid>
```

<strong>but keep in mind that this container item will be in the new line</strong>

---

### <span style="color:orange">7. How to keep image column and description column in same row in Grid container of MenuItem?</span>

<br>
We need to use `<Grid container wrap="nowrap">` to keep the items within the Grid container in same row without breaking each column into next line on shrinking the screen.

The same problem was solved in this way in [1-show-hide-people README](https://github.com/sandeep194920/MERN_projects/tree/master/1_show_hide_people#how-to-keep-elements-present-in-grid-items-grid-container-in-same-row)

### <span style="color:orange">8. How to use theme prop in sx?</span>

<br>

You can use it like this

```js
sx = {{
      background: (theme) => theme.palette.primary.main,
}},
```

By doing this, you don't have to import theme in your component.
