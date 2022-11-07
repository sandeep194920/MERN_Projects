import { render, screen } from '@testing-library/react'
import App from './App'

test('App heading is present', () => {
  render(<App />)
  const heading = screen.getByText('Our Reviews')
  expect(heading).toBeInTheDocument()
})
