import { Typography, Box, Paper, Grid, Button } from '@mui/material'
import React from 'react'
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
  console.log(classes)

  return (
    <Box className={classes.toursContainer}>
      <Box className={classes.headingContainer}>
        <Typography color="primary" variant="h4" component="h4">
          Popular Tours
        </Typography>
      </Box>

      {/* Tours */}
      <Grid container direction="column">
        {/* each row is a grid item */}
        <Grid item>
          <Grid direction="row" container spacing={10} justifyContent="center">
            {/* image card */}
            <Tour />
            {/* image card */}
            <Grid item xs={11} md={6}>
              <Paper className={classes.tourCard} elevation="4">
                <img src={niagaraImg} alt="1" />
                <Typography
                  textAlign={'center'}
                  ml="1rem"
                  mt="1rem"
                  variant="h4"
                >
                  Niagara Falls
                </Typography>
                <Typography sx={{ padding: '1rem 0.4rem 0.5rem 0.7rem' }}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione, repellendus incidunt? Pariatur illo, officiis
                  suscipit natus optio tenetur debitis earum. At doloribus
                  sequi, excepturi iusto reprehenderit facilis, sed sint nemo
                  atque quas reiciendis aut maiores quo ipsam? Odit vitae
                  sapiente fugiat deleniti exercitationem?
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '1rem',
                    paddingBottom: '1rem',
                  }}
                >
                  <Button variant="contained" color="danger">
                    Not Interested
                  </Button>
                </Box>
              </Paper>
            </Grid>

            {/* image card */}
            <Grid item xs={11} md={6}>
              <Paper className={classes.tourCard} elevation="4">
                <img src={alappiImg} alt="1" />
                <Typography
                  textAlign={'center'}
                  ml="1rem"
                  mt="1rem"
                  variant="h4"
                >
                  Alappi Falls
                </Typography>
                <Typography sx={{ padding: '1rem 0.4rem 0.5rem 0.7rem' }}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione, repellendus incidunt? Pariatur illo, officiis
                  suscipit natus optio tenetur debitis earum. At doloribus
                  sequi, excepturi iusto reprehenderit facilis, sed sint nemo
                  atque quas reiciendis aut maiores quo ipsam? Odit vitae
                  sapiente fugiat deleniti exercitationem?
                </Typography>
              </Paper>
            </Grid>

            {/* image card */}
            <Grid item xs={11} md={6}>
              <Paper className={classes.tourCard} elevation="4">
                <img src={backwaterImg} alt="1" />
                <Typography
                  textAlign={'center'}
                  ml="1rem"
                  mt="1rem"
                  variant="h4"
                >
                  Alappi Falls
                </Typography>
                <Typography sx={{ padding: '1rem 0.4rem 0.5rem 0.7rem' }}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione, repellendus incidunt? Pariatur illo, officiis
                  suscipit natus optio tenetur debitis earum. At doloribus
                  sequi, excepturi iusto reprehenderit facilis, sed sint nemo
                  atque quas reiciendis aut maiores quo ipsam? Odit vitae
                  sapiente fugiat deleniti exercitationem?
                </Typography>
              </Paper>
            </Grid>

            {/* image card */}
            <Grid item xs={11} md={6}>
              <Paper className={classes.tourCard} elevation="4">
                <img src={alappiImg} alt="1" />
                <Typography
                  textAlign={'center'}
                  ml="1rem"
                  mt="1rem"
                  variant="h4"
                >
                  Alappi Falls
                </Typography>
                <Typography sx={{ padding: '1rem 0.4rem 0.5rem 0.7rem' }}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione, repellendus incidunt? Pariatur illo, officiis
                  suscipit natus optio tenetur debitis earum. At doloribus
                  sequi, excepturi iusto reprehenderit facilis, sed sint nemo
                  atque quas reiciendis aut maiores quo ipsam? Odit vitae
                  sapiente fugiat deleniti exercitationem?
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '1rem',
                    paddingBottom: '1rem',
                  }}
                >
                  <Button variant="contained" color="danger">
                    Not Interested
                  </Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Tours
