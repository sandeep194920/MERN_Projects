import { Typography, Box, Paper, Grid, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@mui/styles'
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
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [tours, setTours] = useState([])

  const URL = `https://tours-app-2.herokuapp.com/`
  const getTours = async () => {
    try {
      const data = await fetch(URL)
      const { tours } = await data.json()
      setTours(tours)
    } catch (error) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getTours()
  }, [])

  const removeCard = (removableID) => {
    const updatedTours = tours.filter((tour) => tour.id !== removableID)
    setTours(updatedTours)
  }

  if (loading) {
    return <h4>Loading........</h4>
  }

  if (error) {
    return <h4>Something went wrong.....</h4>
  }

  return tours.length > 0 ? (
    <Box className={classes.toursContainer}>
      <Box className={classes.headingContainer}>
        <Typography color="primary" variant="h4" component="h4">
          Popular Tours
        </Typography>
      </Box>

      {/* Tours */}
      <Grid container direction="column">
        <Grid item>
          <Grid
            direction="row"
            container
            spacing={10}
            justifyContent={tours.length < 2 ? 'center' : 'left'}
          >
            {/* image card */}
            {tours.length > 0 &&
              tours.map((tour) => (
                <Tour
                  key={tour.id}
                  {...{ ...tour, image: `${URL}${tour.image}` }}
                  remove={removeCard}
                />
              ))}
            {/*  */}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  ) : (
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
  )
}

export default Tours
