import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Test Header Elements', () => {
  beforeEach(() => {
    render(<Header />)
  })
  test(`check app's heading text`, () => {
    const headingElement = screen.getByRole('heading', {
      name: /the world's best cusine/i,
    })
    expect(headingElement).toBeInTheDocument()
  })

  test(`check menu heading text`, () => {
    const menuHeading = screen.getByText(/our exotic menu/i)
    expect(menuHeading).toBeInTheDocument()
  })
})
