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
  addRemoveIcon: {
    cursor: 'pointer',
  },
}

function CartItem({ name, img, price, quantity, id }) {
  const {
    // increaseQtyHandler,
    // decreaseQtyHandler,
    removeHandler,
    changeQtyHandler,
  } = useGlobalContext()
  console.log(
    `name: ${name}, img:${img}, price:${price}, quantity:${quantity}, id:${id} `
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
                <Button
                  color="error"
                  sx={styles.removeBtn}
                  onClick={() => removeHandler(id)}
                >
                  Remove
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item justifyContent="space-around" container xs={2}>
            <AddBoxIcon
              sx={styles.addRemoveIcon}
              // onClick={() => increaseQtyHandler(id)}
              onClick={() => changeQtyHandler(id, 'increase')}
            />
            <Typography sx={styles.productName}>{quantity}</Typography>
            <IndeterminateCheckBoxIcon
              sx={styles.addRemoveIcon}
              // onClick={() => decreaseQtyHandler(id)}
              onClick={() => changeQtyHandler(id, 'decrease')}
            />
          </Grid>
        </Grid>
      </Grid>
      <Divider sx={styles.divider} variant="inset" />
    </Box>
  )
}

export default CartItem
