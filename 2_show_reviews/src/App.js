/** @jsxImportSource @emotion/react */
import { appStyles } from './AppStyles'
import Reviews from './components/Reviews/Reviews'

function App() {
  return (
    <main css={appStyles}>
      <h1>Our Reviews</h1>
      <Reviews />
    </main>
  )
}

export default App
