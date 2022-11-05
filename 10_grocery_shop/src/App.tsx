import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import theme from './GlobalStyles/theme'
import Header from './Components/ShoppingArea'
import { CssBaseline } from '@mui/material'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
    </ThemeProvider>
  )
}

export default App
