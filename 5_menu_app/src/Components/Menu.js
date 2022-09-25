import React, { useEffect, useState } from 'react'
import { Grid, Typography, Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import menu from '../data'
import MenuItem from './MenuItem'
function Menu() {
  const theme = useTheme()

  // we have multiple of these like breakfast, lunch, shakes, shakes, lunch, breakfast and we need them only once
  const categoriesSet = new Set(menu.map((item) => item.category))

  // converting set back to array as we need to iterate it
  const categories = Array.from(categoriesSet)
  categories.unshift('All') // adding this as first element in categories

  const [selected, setSelected] = useState('All')
  const [currentMenu, setCurrentMenu] = useState(menu)

  const menuStyles = {
    container: {
      marginTop: 6,
    },
    menuItem: {
      borderBottom: `2px solid ${theme.palette.primary.main}`,
      padding: 1,
      cursor: 'pointer',
      textTransform: 'capitalize',

      '&:hover': {
        borderBottom: `2px solid ${theme.palette.primary.main}`,
        color: theme.palette.primary.main,
        borderRadius: '5px',
        transition: 'all 0.3s',
      },
      active: {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        borderRadius: '5px',
        border: 'none',
        '&:hover': {
          color: 'white',
        },
      },
    },
    imageContainer: {
      '& img': {
        border: `4px solid ${theme.palette.primary.main}`,
        width: '10rem',
        height: '8rem',
      },
    },
  }

  useEffect(() => {
    if (selected === 'All') {
      setCurrentMenu(menu)
    } else {
      const filteredItems = menu.filter((item) => item.category === selected)
      setCurrentMenu(filteredItems)
    }
  }, [selected])

  return (
    <Box>
      {/* Menu Item Tabs */}
      <Grid
        container
        sx={menuStyles.container}
        justifyContent="center"
        alignItems="center"
        columnSpacing={7} // refer README for more info on this
      >
        {categories.map((category) => (
          <Grid item key={category} onClick={() => setSelected(category)}>
            <Typography
              variant="h6"
              sx={
                category === selected
                  ? { ...menuStyles.menuItem, ...menuStyles.menuItem.active }
                  : menuStyles.menuItem
              }
            >
              {category}
            </Typography>
          </Grid>
        ))}
      </Grid>

      {/* Menu Items */}
      <Grid container sx={{ mt: 2 }} spacing={7} justifyContent="center">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </Grid>
    </Box>
  )
}

export default Menu
