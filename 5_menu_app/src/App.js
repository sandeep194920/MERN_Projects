import { createTheme, ThemeProvider } from '@mui/material/styles'
import Header from './Components/Header'
import CssBaseline from '@mui/material/CssBaseline'

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
})

function App() {
  // EFEBCE,FAF0CA, e09f3e,fad643,fdd85d

  return (
    <ThemeProvider theme={theme}>
      {/* In this case, used CssBaseline to apply background in an easy way. Ofcourse could have applied through css as well */}
      <CssBaseline />
      <Header />
    </ThemeProvider>
  )
}

export default App
