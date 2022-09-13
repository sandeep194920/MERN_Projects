import React, { useState } from 'react'
import { Typography, Box, Paper, Grid, Button } from '@mui/material'
import niagaraImg from '../../assets/backend/niagara_falls.jpg'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  // Remember some styles like background for paper need to be made !important for makeStyles to work because of specificity
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

function Tour(props) {
  const { name, image, description } = props
  console.log('The props are', description)
  console.log('The desc is', description)
  const classes = useStyles()
  const propText = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione,
  repellendus incidunt? Pariatur illo, officiis suscipit natus optio
  tenetur debitis earum. At doloribus sequi, excepturi iusto
  reprehenderit facilis, sed sint nemo atque quas reiciendis aut maiores
  quo ipsam? Odit vitae sapiente fugiat deleniti exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, dolorum at ipsam quibusdam ea repellendus reprehenderit qui nobis sapiente consequatur commodi est quidem eveniet maxime, iste quasi inventore eos, architecto unde? Excepturi, quod cum accusantium quas vitae, enim a modi exercitationem accusamus tenetur dolores commodi necessitatibus ipsum ipsam itaque labore asperiores? Ab unde doloribus rem?`

  const [moreText, setMoreText] = useState(false)

  const expandText = () => {
    // if more text, then makes it less and vice-versa
    setMoreText((moreText) => !moreText)
  }

  return (
    <Grid item xs={11} md={6}>
      <Paper className={classes.tourCard} elevation="4">
        <img src={image} alt="1" />
        <Typography textAlign={'center'} ml="1rem" mt="1rem" variant="h4">
          {name}
        </Typography>
        <Typography sx={{ padding: '1rem 0.4rem 0.5rem 0.7rem' }}>
          {moreText ? description : description.slice(0, 300)}{' '}
          {/* Component ="subtitle1 will make typography inline" */}
          <Box
            sx={{ cursor: 'pointer', display: 'inline' }}
            onClick={expandText}
          >
            <Typography variant="subtitle1" component="subtitle1" color="blue">
              {!moreText ? `Read More...` : 'Read Less'}
            </Typography>
          </Box>
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
  )
}

export default Tour
