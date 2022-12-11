import './App.css'
import { ThemeProvider } from '@mui/material/styles'
import theme from './GlobalStyles/theme'
import Cart from './Components/Cart'
import { CssBaseline } from '@mui/material'
import { useGlobalContext } from './context'
import LoadingSpinner from './Components/LoadingSpinner'
function App() {
  const { loading } = useGlobalContext()

  if (loading) {
    return (
      <ThemeProvider theme={theme}>
        <LoadingSpinner />
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Cart />
    </ThemeProvider>
  )
}

export default App
