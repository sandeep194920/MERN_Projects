import React from 'react'
import { Grid, Typography, Paper } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import styles from './header.module.css'
import { makeStyles } from '@mui/styles'

// I need my header to use theme and control marginTop for different breakpoints
const useStyles = makeStyles((theme) => ({
  header: {
    marginTop: '2rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
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
      <Grid container justifyContent={'center'} className={classes.header}>
        <Grid item xs={12} sm={8}>
          <Paper className={styles.heroContainer} elevation={8}>
            <Typography variant="h6">Wonders of the World</Typography>
            <Typography variant="h3" component="h1" mt="0.3rem" mb="1rem">
              Explore our Wondersome Adventures
            </Typography>
            <Typography variant="subtitle1" component="p">
              Save up to 50% - book your dream trip now!
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default Header
