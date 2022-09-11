import { ThemeProvider, createTheme } from '@mui/material/styles'
import Header from './Components/header'

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
    </ThemeProvider>
  )
}

export default App
