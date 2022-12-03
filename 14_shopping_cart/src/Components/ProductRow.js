import { Box, Button, Grid, Typography, Divider } from '@mui/material'
import React from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox'
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox'
import { useGlobalContext } from '../context'

const styles = {
  container: {
    margin: '0 auto',
    mt: '4rem',
    mb: '3rem',
  },
  divider: {
    mb: '2rem',
  },
  productContainer: {
    mb: '2rem',
  },
  product: {
    height: '5rem',
    width: '5rem',
  },
  heading: {
    mb: '3rem',
    textAlign: 'center',
  },
  paper: {
    background: 'transparent',
    padding: '2rem',
  },
  productName: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
  },
  removeBtn: {
    marginLeft: '-0.5rem',
    mb: '-0.3rem',
  },
}

function ProductRow({ id: productID }) {
  const {
    initialState: { products },
  } = useGlobalContext()
  const { name, img, price, quantity } = products.find(
    (product) => product.id === productID
  )
  return (
    <Box>
      <Grid
        container
        justifyContent="space-around"
        alignItems="center"
        sx={styles.productContainer}
      >
        <Grid
          container
          item
          xs={10}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item container xs={9} alignItems="center">
            <Grid item xs={2} container justifyContent="center">
              <img style={styles.product} src={img} alt="phone" />
            </Grid>
            <Grid item xs={4} direction="column" container>
              <Grid item>
                <Typography color="primary" sx={styles.productName}>
                  {name}
                </Typography>
              </Grid>
              <Grid item>
                <Typography>${price}</Typography>
              </Grid>
              <Grid item>
                <Button color="error" sx={styles.removeBtn}>
                  Remove
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item justifyContent="space-around" container xs={2}>
            <AddBoxIcon sx={styles.addRemoveIcon} />
            <Typography sx={styles.productName}>{quantity}</Typography>
            <IndeterminateCheckBoxIcon sx={styles.addRemoveIcon} />
          </Grid>
        </Grid>
      </Grid>
      <Divider sx={styles.divider} variant="inset" />
    </Box>
  )
}

export default ProductRow
