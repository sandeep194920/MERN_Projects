import React from 'react'
import { Grid, Typography, Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'

function Header() {
  const theme = useTheme()
  const headerStyles = {
    // backgroundColor: '#148669',
    // backgroundImage:
    //   'linear-gradient(to right top, #148669, #00908c, #0099b0, #009ed2, #12a0eb)',
    header: {
      backgroundImage:
        'linear-gradient(to right top, #148669, #00908c, #0099b0, #009ed2, #12a0eb)',
      height: '50vh',
      paddingTop: '6rem',
      clipPath: 'polygon(0 0, 100% 0, 100% 54%, 0 89%)',
    },
    menuHeadingContainer: {
      marginTop: '-4rem',
      heading: {
        paddingBottom: '1rem',
        borderBottom: `3px solid ${theme.palette.primary.main}`,
      },
    },
  }

  return (
    <Box>
      <Grid container sx={headerStyles.header} justifyContent="center">
        {/* No need to wrap in the item as we have only one element and is taking full width and we are not controlling the width */}
        {/* <Grid item> */}
        <Typography color="white" variant="h3">
          The World's Best Cusine
        </Typography>
        {/* </Grid> */}
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
