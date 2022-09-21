import { Box, Typography } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import phoneImg from './images/phone.jpg'
import Faq from './Components/Faq'

let theme = createTheme({
  palette: {
    primary: {
      main: '#541653',
    },

    secondary: {
      main: '#ECB22E',
    },

    background: {
      default: '#F4EDE4',
      paper: '#FDE2FF',
      light: '#f6f1e9',
      dark: '#f0e7db',
    },
  },
  typography: {
    h4: {
      fontWeight: 'bold',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 'bold',
    },
  },
})

const styles = {
  backgroundColor: 'primary.main',
  padding: '5rem',
  position: 'relative',
  headingWrapper: {
    maxWidth: '50%',
    [theme.breakpoints.down('md')]: {
      maxWidth: '100%',
    },
  },
  imgContainer: {
    position: 'absolute',
    top: '7.2%',
    right: '15%',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    '& img': {
      width: '15rem',
      height: '100%',
    },
  },
  heading: {
    lineHeight: '3.2rem',
  },
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline should be within ThemeProvider  */}
      {/* CssBaseline helps to change the background color specified in palette  */}
      <CssBaseline />
      {/* variant is what changes the look of the text */}
      {/* component is what renders on the DOM. This helps SEO */}
      <Box sx={styles}>
        <Box sx={styles.headingWrapper}>
          <Typography variant="h4" color="white" sx={styles.heading}>
            Great people always have prominent questions.{' '}
            <Typography variant="h4" color="secondary.main" component="span">
              Explore our QA section,
            </Typography>
            <Typography
              variant="h4"
              component="span"
              color="white"
              sx={styles.heading}
            >
              {' '}
              to know more
            </Typography>
          </Typography>
        </Box>
      </Box>
      <Box sx={styles.imgContainer}>
        <img src={phoneImg} alt="Think" />
      </Box>

      {/* FAQ */}
      <Faq />
    </ThemeProvider>
  )
}

export default App
