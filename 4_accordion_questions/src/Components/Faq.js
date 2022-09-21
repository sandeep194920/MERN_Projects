import { Grid, Typography, useTheme } from '@mui/material'
import Questions from './Questions'

function Faq() {
  const theme = useTheme()
  const faqStyles = {
    containerSection: {
      maxWidth: '80%',
      height: '50vh',
      margin: '2rem auto',
    },
    headerSection: {
      background: theme.palette.primary.main,
      // display: 'grid', // since this is already a grid, this line is not necessary
      placeItems: 'center',
      padding: '1rem',
    },
  }
  return (
    <Grid container sx={faqStyles.containerSection}>
      <Grid container item xs={5} md={4} sx={faqStyles.headerSection}>
        <Typography variant="h3" color="white">
          FAQ Section
          <Typography variant="h6" color="secondary.main">
            Question and Answers about Login
          </Typography>
        </Typography>
      </Grid>
      <Grid container item xs={7} sx={faqStyles.questionSection}>
        {/* Questions  container*/}
        <Questions />
      </Grid>
    </Grid>
  )
}

export default Faq
