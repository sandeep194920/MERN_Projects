import { render, screen } from '@testing-library/react'
import { within } from '@testing-library/dom'
import Reviews from './Reviews'
import data from '../../utils/data'

describe('Check if Review Card has all the details in it', () => {
  let reviewCard = null
  beforeEach(() => {
    render(<Reviews />)
    // since we have a single article in our project we can do this here. We are getting the first (and only one) article in DOM
    // If we had multiple aricles then we could assign that an id and referred here through getElementById
    reviewCard = document.getElementsByTagName('article')[0]
  })

  test(`'Random Review button' present using within method`, () => {
    // instead of screen.getByRole, we replace screen by within(reviewCard)
    const button = within(reviewCard).getByRole('button')
    expect(button).toBeInTheDocument()
  })

  test(`'Random Review button' present without using within method`, () => {
    // instead of screen we could have used within as well like previous test, but we are exploring difrerent ways to do it

    // since we are inside the Review article anyways, we don't need to specify within(reviewCard) here fyi
    const button = screen.getByRole('button', { name: 'Random Review' })
    expect(button).toBeInTheDocument()
  })

  test('image present in review card', () => {
    const img = screen.getByRole('img')
    expect(img).toBeInTheDocument()
  })

  test('name - heading4 is present in review card', () => {
    /* Both commented and uncommented lines for name would work. The level 4 indicates it h4. h1-h6 all have role heading and level indicates h1...h6 */
    // const name = screen.getByTestId('name')
    const name = screen.getByRole('heading', { level: 4 })

    // NOTE : const name = screen.getByRole('heading') will throw error as there are multiple heading elements (we have h4, h6 in our Review component)
    expect(name).toBeInTheDocument()
  })

  test('job - heading6 is present in review card', () => {
    const job = screen.getByRole('heading', { level: 6 })
    expect(job).toBeInTheDocument()
  })

  // No role for paragraph tag, so we need to test if paragraph matches actual test
  test('description - p tag is present in review card', () => {
    // screen.getByTestId('desc') gives html element. textContent gets actual text within this html
    const desc = screen.getByTestId('desc').textContent

    // now we will get desc for sure as we have described it ourself in the Reviews component. Sine no role for paragraph, let's test if rendered desc is actually one of the 'description's in data we are importing

    // https://jestjs.io/docs/expect#tocontainitem

    const descriptions = data.map((item) => item.description)

    console.log(desc)
    expect(descriptions).toContain(desc)
  })
})
