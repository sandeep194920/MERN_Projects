import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import theme from './GlobalStyles/theme'
import ShoppingArea from './Components/ShoppingArea'
import { CssBaseline } from '@mui/material'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ShoppingArea />
    </ThemeProvider>
  )
}

export default App
