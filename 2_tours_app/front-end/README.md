# Project details

### What you will learn?

##### How to create header component

- In `src/Components/header.js` we are using `makeStyles from @mui/styles`. Using this, we can write CSS directly in our JS file. Using this we will be able to access theme from MUI, using which we are defining breakpoints to control header margin top

We could otherwise have done this in CSS file `src/Components/header.module.css` but we then should've used css media query and couldn't have accessed MUI theme prop

- We have used responsive font-size (typography) using theme prop.

- Just like our 1_show_hide_people project, we have used Grid container and Grid item inside it. Using Grid item, we can control how much space our header should take for different screen-sizes

- So we are actually using both css and css in JS here in this project to see what all styling options we can use

##### Inspiration

I got the idea for this project from [Tour Radar](https://www.tourradar.com/)
