import React, { useState } from 'react'
import { Typography, Box, Paper, Grid, Button } from '@mui/material'
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
  const { id, name, image, description, remove } = props
  const classes = useStyles()
  const [moreText, setMoreText] = useState(false)

  const expandText = () => {
    // if more text, then makes it less and vice-versa
    setMoreText((moreText) => !moreText)
  }

  return (
    <Grid item xs={11} md={6}>
      <Paper className={classes.tourCard} elevation={4}>
        <img src={image} alt="1" />
        <Typography textAlign={'center'} ml="1rem" mt="1rem" variant="h4">
          {name}
        </Typography>
        <Typography sx={{ padding: '1rem 0.4rem 0.5rem 0.7rem' }}>
          {moreText ? description : description.slice(0, 300)}{' '}
          {/* Component = span will make typography inline" */}
          {/* component should be a valid HTML element. You can't use subtitle1 or body2. span is a valid one */}
          <Typography
            sx={{ cursor: 'pointer', display: 'inline' }}
            onClick={expandText}
            component={'span'}
            color="blue"
          >
            {!moreText ? `Read More...` : 'Read Less'}
          </Typography>
        </Typography>
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
      </Paper>
    </Grid>
  )
}

export default Tour
