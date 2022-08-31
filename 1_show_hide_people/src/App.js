import {
  Container,
  Typography,
  Grid,
  CssBaseline,
  Button,
  Box,
} from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { useState } from 'react'
import { Friend } from './Components/Friend'
import data from './data.json'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#fcbf49', // yellow
    },
  },
})
function App() {
  const [showFriends, setShowFriends] = useState(true)

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container sx={{ marginTop: '4rem' }}>
        <Typography variant="h5" mb={4}>
          Friends and their details
        </Typography>
        <Grid container spacing={3}>
          {showFriends &&
            data.map((person) => <Friend id={person.id} {...person} />)}
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginY: 5 }}>
          <Button
            variant="contained"
            onClick={() => setShowFriends((current) => !current)}
          >
            {showFriends ? 'Hide friends' : 'Show friends'}
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default App
