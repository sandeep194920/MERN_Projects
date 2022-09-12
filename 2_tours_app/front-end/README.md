# Project details

### What you will learn?

##### How to create header component

- In `src/Components/header.js` we are using `makeStyles from @mui/styles`. Using this, we can write CSS directly in our JS file. Using this we will be able to access theme from MUI, using which we are defining breakpoints to control header margin top

We could otherwise have done this in CSS file `src/Components/header.module.css` but we then should've used css media query and couldn't have accessed MUI theme prop

- We have used responsive font-size (typography) using theme prop.

- Just like our 1_show_hide_people project, we have used Grid container and Grid item inside it. Using Grid item, we can control how much space our header should take for different screen-sizes

- So we are actually using both css and css in JS here in this project to see what all styling options we can use

##### How to create images component below header

###### Images Container

- Created a Grid (container + item) inside main Grid container (as second grid item) in `src/Components/header.js`.

- Inside the above container + item Grid, create image card. Each image card is a grid item (we have this grid item because we can adjust xs, md, lg and so on sizes). Inside this, create Box that contains img and typography

###### Hide images when screen is shrinked

- We have added subImageContainer class. This class will have breakpoints for each size like xl, md, sm and here, we set `display:none`.

##### Inspiration

I got the idea for this project from [Tour Radar](https://www.tourradar.com/)
