import { Typography, Box, Paper, Grid, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@mui/styles'
import niagaraImg from '../../assets/backend/niagara_falls.jpg'
import alappiImg from '../../assets/backend/alappi_falls.jpg'
import backwaterImg from '../../assets/backend/backwaters.jpg'
import Tour from '../Tour/tour'

// for make styles, the key is camel case and the value is like css value (not camel case)
const useStyles = makeStyles((theme) => ({
  // Remember some styles like background for paper need to be made !important for makeStyles to work because of specificity

  toursContainer: {
    marginBottom: '5rem',
    marginTop: '4rem',
  },
  headingContainer: {
    borderBottom: `4px solid ${theme.palette.primary.main}`,
    margin: '0 auto',
    width: 'fit-content',
    paddingBottom: '1rem',
    lineHeight: '3rem',
    textTransform: 'uppercase',
  },

  tourCard: {
    marginTop: '4rem',
    maxWidth: '105rem',
    minWidth: '5rem',
    '& img': {
      width: '100%',
      height: '19rem',
      borderTopRightRadius: '10px',
      borderTopLeftRadius: '10px',
    },
  },
}))

function Tours() {
  const classes = useStyles()
  const [tours, setTours] = useState([])

  const URL = `http://localhost:5000`
  const getTours = async () => {
    const data = await fetch(URL)
    const { tours } = await data.json()
    setTours(tours)
  }

  useEffect(() => {
    getTours()
  }, [])

  return (
    <Box className={classes.toursContainer}>
      <Box className={classes.headingContainer}>
        <Typography color="primary" variant="h4" component="h4">
          Popular Tours
        </Typography>
      </Box>

      {/* Tours */}
      <Grid container direction="column">
        <Grid item>
          <Grid direction="row" container spacing={10} justifyContent="center">
            {/* image card */}
            {!tours.length > 0 ? (
              <h1>Loading</h1>
            ) : (
              tours.map((tour) => {
                console.log('The tour is', tour)
                // image  needs to be modified so we destructure everything and then modify image like this
                return <Tour {...{ ...tour, image: `${URL}${tour.image}` }} />
              })
            )}
            {/*  */}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Tours
