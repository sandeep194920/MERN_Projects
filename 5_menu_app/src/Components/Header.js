import React from 'react'
import { Grid, Typography, Box } from '@mui/material'

function Header() {
  const headerStyles = {
    header: {
      backgroundImage:
        'linear-gradient(to right top, #148669, #00908c, #0099b0, #009ed2, #12a0eb)',
      height: '40vh',
      paddingTop: 10,
      clipPath: 'polygon(0 0, 100% 0, 100% 74%, 0 89%)',
      textAlign: 'center',
    },
    menuHeadingContainer: {
      margin: 'auto',
      marginTop: -4,
      heading: {
        paddingBottom: '1rem',
        borderBottom: (theme) => `3px solid ${theme.palette.primary.main}`,
      },
    },
  }

  return (
    <Box>
      <Grid container sx={headerStyles.header} justifyContent="center">
        {/* No need to wrap in the item as we have only one element and is taking full width and we are not controlling the width */}
        <Grid item>
          <Typography color="white" variant="h3">
            The World's Best Cusine
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        sx={headerStyles.menuHeadingContainer}
        justifyContent="center"
      >
        <Box sx={headerStyles.menuHeadingContainer.heading}>
          <Typography variant="h4">Our Exotic Menu</Typography>
        </Box>
      </Grid>
    </Box>
  )
}

export default Header
