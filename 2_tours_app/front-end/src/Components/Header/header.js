import React from 'react'
import { Grid, Typography, Paper, Box } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import styles from './header.module.css'
import { makeStyles } from '@mui/styles'
import images from '../../assets/near_hero'

// I need my header to use theme and control marginTop for different breakpoints
const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '2rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '-0.5rem',
    },
  },

  subImageContainer: {
    minWidth: '15rem',
    [theme.breakpoints.down('xl')]: {
      '&:nth-child(5)': {
        display: 'none',
      },
    },
    [theme.breakpoints.down('lg')]: {
      '&:nth-child(4)': {
        display: 'none',
      },
    },
    [theme.breakpoints.down('md')]: {
      '&:nth-child(3)': {
        display: 'none',
      },
    },
    [theme.breakpoints.down('sm')]: {
      '&:nth-child(2)': {
        display: 'none',
      },
    },
    [theme.breakpoints.down('xs')]: {
      '&:nth-child(1)': {
        display: 'none',
      },
    },
  },
}))

// Note that this makeStyles above should always outside our component (Header in this case)

function Header() {
  const theme = createTheme({
    typography: {
      h3: {
        color: 'white',
      },
      h6: {
        color: 'white',
      },
      subtitle1: {
        color: 'white',
      },
    },
  })

  theme.typography.h3 = {
    ...theme.typography.h3,
    [theme.breakpoints.down('md')]: {
      fontSize: '1.9rem',
    },
  }
  theme.typography.h6 = {
    ...theme.typography.h6,
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem',
    },
  }

  theme.typography.subtitle1 = {
    ...theme.typography.subtitle1,
    [theme.breakpoints.down('md')]: {
      fontSize: '0.8rem',
    },
  }

  // this is to use css in JS instead of actual css. .header is useed from useStyles above.
  // Alternatively, we could
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.container}>
        <Grid container item justifyContent="center">
          <Grid item xs={12} sm={10}>
            <Paper className={styles.heroContainer} elevation={8}>
              <Typography variant="h6">Wonders of the World</Typography>
              <Typography
                variant="h3"
                component="h1"
                mt="0.3rem"
                mb="1rem"
                className={styles.headerText}
              >
                Explore our Wondersome Adventures
              </Typography>
              <Typography variant="subtitle1" component="p">
                Save up to 50% - book your dream trip now!
              </Typography>
            </Paper>
          </Grid>

          {/* Images */}
          <Grid container item sx={{ marginTop: '-4rem' }} xs={10}>
            {/* image cards container*/}
            <Grid container justifyContent="space-evenly" spacing={2}>
              {/* image card */}
              <Grid
                item
                xs={10}
                sm={5}
                md={3}
                lg={2}
                className={classes.subImageContainer}
              >
                <Box className={styles.image_box}>
                  <img
                    className={styles.hero_sub_img}
                    src={images.img1}
                    alt="1"
                  />
                  <Typography ml="1rem" mb="0.5rem" variant="subtitle2">
                    Jordan Deals
                  </Typography>
                </Box>
              </Grid>

              {/* image card */}
              <Grid
                item
                xs={10}
                sm={5}
                md={3}
                lg={2}
                className={classes.subImageContainer}
              >
                <Box className={styles.image_box}>
                  <img
                    className={styles.hero_sub_img}
                    src={images.img2}
                    alt="1"
                  />
                  <Typography ml="1rem" mb="0.5rem" variant="subtitle2">
                    Jordan Deals
                  </Typography>
                </Box>
              </Grid>

              {/* image card */}
              <Grid
                item
                xs={10}
                sm={5}
                md={3}
                lg={2}
                className={classes.subImageContainer}
              >
                <Box className={styles.image_box}>
                  <img
                    className={styles.hero_sub_img}
                    src={images.img3}
                    alt="1"
                  />
                  <Typography ml="1rem" mb="0.5rem" variant="subtitle2">
                    Jordan Deals
                  </Typography>
                </Box>
              </Grid>

              {/* image card */}
              <Grid
                item
                xs={10}
                sm={5}
                md={3}
                lg={2}
                className={classes.subImageContainer}
              >
                <Box className={styles.image_box}>
                  <img
                    className={styles.hero_sub_img}
                    src={images.img4}
                    alt="1"
                  />
                  <Typography ml="1rem" mb="0.5rem" variant="subtitle2">
                    Jordan Deals
                  </Typography>
                </Box>
              </Grid>

              {/* image card */}
              <Grid
                item
                xs={10}
                sm={5}
                md={3}
                lg={2}
                className={classes.subImageContainer}
              >
                <Box className={styles.image_box}>
                  <img
                    className={styles.hero_sub_img}
                    src={images.img5}
                    alt="1"
                  />
                  <Typography ml="1rem" mb="0.5rem" variant="subtitle2">
                    Jordan Deals
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  )
}

export default Header
