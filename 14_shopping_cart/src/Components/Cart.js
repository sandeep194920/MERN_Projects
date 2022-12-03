import { Button, Container, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { useGlobalContext } from '../context'
import Header from './Header'
import ProductRow from './ProductRow'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'

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
  const {
    initialState: { products },
  } = useGlobalContext()

  return (
    <>
      <Header />
      <Container sx={styles.container}>
        <Typography sx={styles.heading} variant="h4">
          <ShoppingBagOutlinedIcon sx={styles.shopIcon} fontSize="large" />
          Your bag
        </Typography>
        <Paper sx={styles.paper}>
          {products.map((product) => {
            return <ProductRow key={product.id} id={product.id} />
          })}

          <Grid container justifyContent="space-around" sx={styles.total}>
            <Grid item xs={5.5}>
              Total Amount
            </Grid>
            <Grid item>$1099.99</Grid>
          </Grid>

          <Grid container justifyContent="center">
            <Button variant="contained" color="error">
              Clear Cart
            </Button>
          </Grid>
        </Paper>
      </Container>
    </>
  )
}

export default Cart
