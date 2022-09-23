import React from 'react'
import { Grid, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import menu from '../data'
function Menu() {
  const theme = useTheme()
  const menuStyles = {
    container: {
      //   background: 'lightblue',
      marginTop: 6,
    },
    menuItem: {
      borderBottom: `2px solid ${theme.palette.primary.main}`,
      padding: 1,
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: theme.palette.secondary.main,
        color: 'white',
        borderRadius: '5px',
        border: 'none',
      },
      active: {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        borderRadius: '5px',
        border: 'none',
      },
    },
  }

  const categoriesSet = new Set(menu.map((item) => item.category))

  const categories = Array.from(categoriesSet)

  return (
    <Grid
      container
      sx={menuStyles.container}
      justifyContent="center"
      alignItems="center"
      columnSpacing={7} // refer README for more info on this
    >
      <Grid item>
        <Typography variant="h6" sx={menuStyles.menuItem}>
          All
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          variant="h6"
          sx={{ ...menuStyles.menuItem, ...menuStyles.menuItem.active }}
        >
          Breakfast
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6" sx={menuStyles.menuItem}>
          Lunch
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6" sx={menuStyles.menuItem}>
          Dinner
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Menu
