import {
  Box,
  Button,
  Container,
  TextField,
  Grid,
  Typography,
} from '@mui/material'
import styles from './ShoppingAreaStyles'

function Header() {
  return (
    <Container>
      <Box sx={styles.container}>
        <Typography sx={styles.heading} variant="h4" component="h3">
          Grocery Store
        </Typography>
        <Typography sx={styles.errorText}>Please add an item</Typography>

        <form>
          <Grid container alignItems="center" justifyContent="space-evenly">
            <Grid item>
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 0, width: '35ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  size="small"
                  label="Enter a product"
                  variant="outlined"
                />
              </Box>
            </Grid>
            <Grid item>
              <Button variant="contained">Add Item</Button>
            </Grid>
          </Grid>
        </form>
        <Box>
          <Grid sx={styles.item} justifyContent="space-around" container>
            <Grid item xs={4} sx={{ background: 'lightgreen' }}>
              <Typography>Apples</Typography>
            </Grid>

            <Grid container item xs={4} justifyContent="space-around">
              <Grid item>Edit</Grid>
              <Grid item>Remove</Grid>
            </Grid>
          </Grid>

          <Grid justifyContent="space-around" container sx={styles.item}>
            <Grid item xs={4} sx={{ background: 'lightgreen' }}>
              <Typography>Eggs</Typography>
            </Grid>

            <Grid container item xs={4} justifyContent="space-around">
              <Grid item>Edit</Grid>
              <Grid item>Remove</Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}

export default Header
