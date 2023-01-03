import * as React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Typography,
} from '@mui/material'
import data from './data'
import Article from './ArticleMUI'
import styles from './styles'

const colors = {
  light: {
    primary: '#d23669',
    text: '#282c35',
    bg: '#fff',
  },
  dark: {
    primary: '#ffa7c4',
    text: '#fff',
    bg: '#282c35',
  },
}
const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: colors[mode].primary,
    },
    background: {
      default: colors[mode].bg,
      paper: colors[mode].bg,
    },
    text: {
      primary: colors[mode].text,
    },
  },
})

const getSavedTheme = () => {
  let savedTheme = 'light'
  if (localStorage.getItem('savedTheme')) {
    savedTheme = localStorage.getItem('savedTheme')
  }

  return savedTheme
}

function ToggleWithMUI() {
  const [theme, setTheme] = React.useState(getSavedTheme())
  const muiTheme = createTheme(getDesignTokens(theme))

  const handleToggle = () => {
    setTheme((oldTheme) => {
      let newTheme
      if (oldTheme === 'light') {
        newTheme = 'dark'
      } else {
        newTheme = 'light'
      }
      localStorage.setItem('savedTheme', newTheme)
      return newTheme
    })
  }

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Container>
        <nav>
          <Grid
            sx={styles.navCenter}
            container
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h1">Dark Mode Toggle</Typography>
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={handleToggle}>
                Toggle
              </Button>
            </Grid>
          </Grid>
        </nav>
        <Box sx={styles.postContainer}>
          {data.map((item) => {
            return <Article key={item.id} {...item} />
          })}
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default ToggleWithMUI
