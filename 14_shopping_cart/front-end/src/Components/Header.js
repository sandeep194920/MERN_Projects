import React from 'react'
import { Grid, Paper } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useGlobalContext } from '../context'

const styles = {
  img: {
    height: '3rem',
  },
  headerContainer: {
    background: (theme) => theme.palette.primary.main,
    padding: '1rem',
  },
  cart: {
    position: 'relative',
  },
  ShoppingCartContent: {
    color: '#14213d',
    position: 'absolute',
    left: '18px',
    top: '20px',
    background: 'white',
    borderRadius: '20px',
    width: '1.8rem',
    height: '1.8rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '1.2rem',
  },
}

function Header() {
  const { numberOfCartItems } = useGlobalContext()
  return (
    <nav>
      <Paper>
        <Grid
          sx={styles.headerContainer}
          container
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid item>
            <img
              style={styles.img}
              src="./icons_svg/color_logo_with_bg.svg"
              alt="cart"
            />
          </Grid>
          <Grid item>
            <div style={styles.cart}>
              <div style={styles.ShoppingCartContent}>{numberOfCartItems}</div>
              <ShoppingCartIcon color="secondary" fontSize="large" />
            </div>
          </Grid>
        </Grid>
      </Paper>
    </nav>
  )
}

export default Header
