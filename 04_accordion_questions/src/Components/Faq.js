import { Grid, Hidden, Typography, useTheme } from '@mui/material'
import Questions from './Questions'

function Faq() {
  const theme = useTheme()
  const faqStyles = {
    containerSection: {
      maxWidth: '80%',
      height: '50vh',
      margin: '6rem auto',
    },
    headerSection: {
      background: theme.palette.primary.main,
      // display: 'grid', // since this is already a grid, this line is not necessary
      padding: '1rem',
    },
  }
  return (
    <Grid container sx={faqStyles.containerSection}>
      <Hidden lgDown>
        <Grid
          container
          item
          xs={5}
          md={4}
          sx={faqStyles.headerSection}
          alignItems="center"
        >
          <Grid container justifyContent="center">
            <Grid item>
              <Typography variant="h3" color="white">
                FAQ Section
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" color="secondary.main">
                Question and Answers about Login
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <Grid container item sm={12} lg={7} sx={faqStyles.questionSection}>
        {/* Questions  container*/}
        <Questions />
      </Grid>
    </Grid>
  )
}

export default Faq
