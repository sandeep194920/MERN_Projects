import { Button, Container, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { useGlobalContext } from '../context'
import Header from './Header'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import CartItem from './CartItem'

const styles = {
  container: {
    margin: '0 auto',
    mt: '4rem',
    mb: '3rem',
  },
  heading: {
    mb: '3rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    background: 'transparent',
    padding: '2rem',
  },
  shopIcon: {
    mr: '0.5rem',
    mb: '0.3rem',
  },
  total: {
    fontWeight: 'bold',
    fontSize: '1.2rem',
    mb: '1rem',
  },
}

function Cart() {
  const { products, cartTotalAmount, clearCartHandler, fillCartHandler } =
    useGlobalContext()
  console.log('The products are', products)
  return (
    <>
      <Header />
      <Container sx={styles.container}>
        <Typography sx={styles.heading} variant="h4">
          <ShoppingBagOutlinedIcon sx={styles.shopIcon} fontSize="large" />
          Your bag
        </Typography>
        {products?.length === 0 && (
          <Typography
            color="error"
            variant="h5"
            sx={{ textAlign: 'center', mt: '-2rem' }}
          >
            is empty
          </Typography>
        )}
        <Paper sx={styles.paper}>
          {products &&
            products.map((product) => {
              return <CartItem key={product.id} {...product} />
            })}

          <Grid container justifyContent="space-around" sx={styles.total}>
            <Grid item xs={5.5}>
              Total Amount
            </Grid>
            <Grid item>${cartTotalAmount.toFixed(2)}</Grid>
          </Grid>

          <Grid container justifyContent="center">
            {products?.length > 0 ? (
              <Button
                variant="contained"
                color="error"
                onClick={clearCartHandler}
              >
                Clear Cart
              </Button>
            ) : (
              <Button
                variant="contained"
                color="success"
                onClick={fillCartHandler}
              >
                Fill Cart
              </Button>
            )}
          </Grid>
        </Paper>
      </Container>
    </>
  )
}

export default Cart
