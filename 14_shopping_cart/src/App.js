import './App.css'
import { ThemeProvider } from '@mui/material/styles'
import theme from './GlobalStyles/theme'
import Cart from './Components/Cart'
import { CssBaseline } from '@mui/material'
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Cart />
    </ThemeProvider>
  )
}

export default App
