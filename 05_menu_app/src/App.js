import { createTheme, ThemeProvider } from '@mui/material/styles'
import Header from './Components/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import Menu from './Components/Menu/Menu'

const theme = createTheme({
  palette: {
    primary: {
      main: '#0099b0',
    },
    secondary: {
      main: '#12a0eb',
    },
    background: {
      default: '#fdfae9',
    },
  },
  typography: {
    h6: {
      fontSize: '1.1rem',
      letterSpacing: '0.4px',
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* In this case, used CssBaseline to apply background in an easy way. Ofcourse could have applied through css as well */}
      <CssBaseline />
      <Header />
      <Menu />
    </ThemeProvider>
  )
}

export default App
