import React from 'react'
import { Grid, Typography, Box } from '@mui/material'

function MenuItem(props) {
  const { title, img, price, desc } = props
  const menuItemStyles = {
    imageContainer: {
      width: 170,
      height: 150,
      '& img': {
        width: '100%',
        height: '100%',
      },
    },
    itemHeading: {
      mr: 2,
      pb: 1,
      borderBottom: (theme) => `1px solid ${theme.palette.primary.main}`,
      height: 'fit-content',
    },
  }

  return (
    // <Grid item xs={12} sm={10} md={11} lg={5}>
    <Grid item sm={12} md={6}>
      {/* Card */}
      {/* added nowrap to keep image column and description column in same row. Refer to readme for mode details */}
      <Grid container wrap="nowrap" columnSpacing={1}>
        <Grid item>
          <Box sx={menuItemStyles.imageContainer}>
            <img src={img} alt="item1" />
          </Box>
        </Grid>
        <Grid item>
          <Grid
            container
            item
            justifyContent="space-between"
            alignItems="center"
            sx={menuItemStyles.itemHeading}
          >
            <Grid item>{title}</Grid>
            <Grid item>${price}</Grid>
          </Grid>
          <Grid item sx={{ pt: 1 }}>
            <Typography>{desc}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default MenuItem
