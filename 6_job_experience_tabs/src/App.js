import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Container, CssBaseline } from '@mui/material'
import Heading from './Components/Heading/Heading'
import Content from './Components/Content/Content'

const theme = createTheme({
  palette: {
    primary: {
      main: '#0B8484',
    },
    secondary: {
      main: '#9EB6CE',
    },
    background: {
      default: '#fff',
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Heading />
        <Content />
      </Container>
    </ThemeProvider>
  )
}

export default App
