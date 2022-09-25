import React from 'react'
import { Grid, Typography, Box, Paper } from '@mui/material'

function MenuItem() {
  const menuItemStyles = {
    container: {
      //   backgroundColor: 'lightblue',
    },
    imageContainer: {
      width: 170,
      height: 150,
      '& img': {
        width: '100%',
        height: '100%',
      },
    },
  }

  return (
    <Grid
      item
      xs={12}
      sm={10}
      md={11}
      lg={5}
      //   sx={{ backgroundColor: 'lightblue' }}
    >
      {/* Paper adds nice shadow effect */}
      <Paper>
        {/* Card */}
        {/* added nowrap to keep image column and description column in same row. Refer to readme for mode details */}
        <Grid container wrap="nowrap">
          <Grid item>
            <Box sx={menuItemStyles.imageContainer}>
              <img src="./images/item-1.jpeg" alt="item1" />
            </Box>
          </Grid>
          <Grid item>
            <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              obcaecati excepturi nihil, quidem adipisci saepe atque eos qui
              dignissimos dolorem. quos
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default MenuItem
