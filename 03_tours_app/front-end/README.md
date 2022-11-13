# Project details

[Tours App](https://3-tours-app.netlify.app/)

- This project shows the use of useEffect hook
- We learn how to use fetch api where we get tours from our backend (heroku url)
- We also conditionally show the error or loading screen when applicable
- MUI has system/core/material and so on. makeStyles got deprecated in version 5 but we still used in this project to explore different options. We will not use this in future projects

## What you will learn?

1. How to create header component and images stacked in a row below it.
2. Show and hide those stacked images when screen is shrinked.
3. How contrast prop works in theming.
4. How to add inline text using MUI typography.
5. How to center button both veritically and horizontally.
6. How to add images in React? (<em>From the future. This is added after doing 5_menu_app</em>)

### 1. How to create header component

- In `src/Components/header.js` we are using `makeStyles from @mui/styles`. NOTE THAT THIS IS DEPRECATED IN MUI5 (but still we are exploring here how to use it. We will not be using this in next projects). Since it's deprecated in MUI5, see that we are importing it from `@mui/styles` and not `@mui/material` Using this, we can write CSS directly in our JS file and we will be able to access theme from MUI/styles, using which we are defining breakpoints to control header margin top

We could otherwise have done this in CSS file `src/Components/header.module.css` but we then should've used css media query and couldn't have accessed MUI theme prop

- We have used responsive font-size (typography) using theme prop.

- Just like our 1_show_hide_people project, we have used Grid container and Grid item inside it. Using Grid item, we can control how much space our header should take for different screen-sizes

- So we are actually using both css and css in JS here in this project to see what all styling options we can use

### 2. Show and hide those stacked images when screen is shrinked.

##### Images Container

- Created a Grid (container + item) inside main Grid container (as second grid item) in `src/Components/header.js`

- Inside the above container + item Grid, create image card. Each image card is a grid item (we have this grid item because we can adjust xs, md, lg and so on sizes). Inside this, create Box that contains img and typography

##### Hide images when screen is shrinked

- We have added subImageContainer class. This class will have breakpoints for each size like xl, md, sm and here, we set `display:none`

### 3. How contrastProp works in theming

Let's say you want to change a delete button color to red or your choice. Then you probably might want to change the text color of that button as well. You can do it like this

```js
    const theme = createTheme({
    palette: {
        primary: {
        main: '#210b2c',
        },
        danger: {
        // this can be any name. You can use this in your button
        main: '#230c33',
        contrastText: 'white', // This text color would be used where ever you use danger color
        },
    },
    })

    // Using danger color in the button. The Delete text in the button would be white (contrastText)
    <Button variant="contained" color="danger">Delete</Button>
```

### 4. How to add inline text (like we do using span tag in html) in typography?

We can use `component="subtitle1"` in typography which then makes it inline

```js
<Typography>
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, quo ipsam?
  Odit vitae sapiente fugiat deleniti exercitationem?{' '}
  {/* Component ="subtitle1 will make typography inline" */}
  <Typography variant="subtitle1" component="subtitle1">
    Read More...
  </Typography>
</Typography>
```

### 5a. How to center a button horizontally?

Wrap the Button into a Box (it's a div) and define it as flex

```js
<Box
  sx={{
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1rem',
    paddingBottom: '1rem',
  }}
>
  <Button variant="contained" color="danger" onClick={() => remove(id)}>
    Not Interested
  </Button>
</Box>
```

### 5b. How to center a button vertically and horizontally?

Wrap the Button in the Box and display grid. Place items center should do it.

```js
<Box
  sx={{
    height: '40vh',
    display: 'grid',
    placeItems: 'center',
  }}
>
  <Button variant="contained" onClick={getTours}>
    Show all tours
  </Button>
</Box>
```

### 6. How to add images in React? (<em>From the future. This is added after doing 5_menu_app</em>)

In this project, we are using images (below header) and these images are not from backend. These are present in `src/assets`. Notice, in this project we are importing images from `src/assets/near_hero` in `src/Components/Header/header.js`. We can import this way as we have put our images inside src folder.
If we are using some kind of json file where each image is a value of a key that needs to be displayed while iterating, then please refer to [5-Menu-App](https://github.com/sandeep194920/React_MUI_Express_Projects/tree/master/05_menu_app#5-how-to-display-images-in-react-when-we-use-image-links)

#### Inspiration

I got the idea for this project from [Tour Radar](https://www.tourradar.com/)
