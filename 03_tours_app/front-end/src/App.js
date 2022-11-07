import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Container } from '@mui/system'
import Header from './Components/Header/header'
import Tours from './Components/Tours/tours'

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#210b2c',
      },
      secondary: {
        main: '#cad2c5',
      },
      danger: {
        main: '#230c33',
        contrastText: 'white',
      },
    },
  })
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container>
        <Tours />
      </Container>
    </ThemeProvider>
  )
}

export default App
