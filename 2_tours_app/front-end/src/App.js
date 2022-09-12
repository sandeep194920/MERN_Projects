import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Container } from '@mui/system'
import Header from './Components/Header/header'

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#52796f',
      },
      secondary: {
        main: '#cad2c5',
      },
    },
  })
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container></Container>
    </ThemeProvider>
  )
}

export default App
