import { Button, Container, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { useGlobalContext } from '../context'
import Header from './Header'
import ProductRow from './ProductRow'

const styles = {
  container: {
    margin: '0 auto',
    mt: '4rem',
    mb: '3rem',
  },
  heading: {
    mb: '3rem',
    textAlign: 'center',
  },
  paper: {
    background: 'transparent',
    padding: '2rem',
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
          Your bag
        </Typography>
        <Paper sx={styles.paper}>
          {products.map((product) => {
            return <ProductRow key={product.id} id={product.id} />
          })}
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
