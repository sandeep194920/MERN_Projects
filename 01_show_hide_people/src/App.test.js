import { render, screen } from '@testing-library/react'
import App from './App'
import userEvent from '@testing-library/user-event'

describe('show elements on the page', () => {
  test('renders heading', () => {
    render(<App />)
    const headingElement = screen.getByText(/friends and their details/i)
    expect(headingElement).toBeInTheDocument()
  })

  test(`should render correct number of friend's card`, () => {
    render(<App />)
    const friends = screen.getAllByTestId('friend-card')
    expect(friends.length).toBe(7)
  })
})

// Integration tests - as we are checking if friends component hides if button component is clicked
// There are two different components involved here changing the behaviour of one another, hence this
// is an integration test
describe('elements changing on UI on button click', () => {
  test('hides all friend cards when Hide button is clicked', async () => {
    render(<App />)
    // initially there should be 7 friend-card
    expect(screen.queryAllByTestId('friend-card').length).toBe(7)

    // clicking the hide friends button
    userEvent.click(screen.getByRole('button', { name: /hide friends/i }))

    // here we are using query all because, friends-card will not be present on dom once the above button is
    // clicked, so getAll throws an error where as queryAll says 0 elements present
    expect(screen.queryAllByTestId('friend-card').length).toBe(0)

    // when hide friends clicked, button text should also change to show friends
    expect(
      screen.getByRole('button', { name: /show friends/i })
    ).toBeInTheDocument()

    // The hidefriends button text will not be on the screen, so getBy will throw error, so using queryBy
    expect(
      screen.queryByRole('button', { name: /hide friends/i })
    ).not.toBeInTheDocument()
  })

  test(`show all friends again when 'Show Friends' is clicked`, () => {
    render(<App />)
    // clicking the hide friends button
    userEvent.click(screen.getByRole('button', { name: /hide friends/i }))
    expect(screen.queryAllByTestId('friend-card').length).toBe(0)

    // show friends is clicked
    userEvent.click(screen.getByRole('button', { name: /show friends/i }))
    expect(screen.queryAllByTestId('friend-card').length).toBe(7)
  })
})
