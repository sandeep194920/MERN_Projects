import { render, screen } from '@testing-library/react'
import Menu from './Menu'
import { within } from '@testing-library/dom'
import data from '../../data'
import userEvent from '@testing-library/user-event'

test(`check 4 categories are present`, () => {
  render(<Menu />)
  const categories = screen.getByTestId('categories')
  // getAllByRole gives array of html elements which are h6. We get back html containing - All,Breakfast,Lunch, Shakes
  const menuTabs = within(categories).getAllByRole('heading', { level: 6 })
  expect(menuTabs).toHaveLength(4)

  //the above menuTabs are the array of html nodes. If we need to go further to test if we are getting the right content, then we can do this
  const actualMenuItems = menuTabs.map((item) =>
    item.textContent.toLocaleLowerCase()
  )
  // console.log(actualMenuItems) // [ 'all', 'breakfast', 'lunch', 'shakes' ]
  // Let's get expected menu items by parsing the data
  const expectedMenuItems = [
    'all',
    ...new Set(data.map((item) => item.category)),
  ]
  // console.log(expectedMenuItems) // [ 'all', 'breakfast', 'lunch', 'shakes' ]
  expect(actualMenuItems).toEqual(expectedMenuItems)
})

describe('integration test - correct menu items are displayed when each category is selected', () => {
  const expectedData = {}
  data.forEach((item) => {
    if (!expectedData[item.category]) {
      expectedData[item.category] = [item.title]
    } else {
      expectedData[item.category].push(item.title)
    }
  })
  expectedData['all'] = [...Object.values(expectedData)].flat()
  beforeEach(() => {
    // this will also render child components of Menu which is <MenuItem/> 9 times (9 items). Hence we can test how many items it renders
    render(<Menu />)
  })
  test(`'All' category selected`, () => {
    // By default 'all' categories are selected
    const allItems = screen.getAllByTestId('menu-item')
    expect(allItems.length).toEqual(expectedData['all'].length) // you could also do .toEqual(data.length)
  })
  test(`'Breakfast' category selected`, () => {
    const categories = screen.getByTestId('categories')
    const breakfast = within(categories).getByText(/breakfast/i)
    userEvent.click(breakfast)
    // Should show only items that have breakfast
    const breakfastMenu = screen.getAllByTestId('menu-item')
    expect(breakfastMenu.length).toEqual(expectedData['breakfast'].length) // you could also do .toEqual(data.length)
  })
  test(`'Lunch' category selected`, () => {
    const categories = screen.getByTestId('categories')
    const lunch = within(categories).getByText(/lunch/i)
    userEvent.click(lunch)
    // Should show only items that have breakfast
    const lunchMenu = screen.getAllByTestId('menu-item')
    expect(lunchMenu.length).toEqual(expectedData['lunch'].length) // you could also do .toEqual(data.length)
  })
  // In all the above tests for 'all', 'breakfast', and 'lunch' we are testing number of items match each category. If lunch and shakes both have same number of items, then we might be tricked as we are testing the wrong data. What if lunch is getting shakes and so on. So it would be better to not only test number of items like above 3 tests but also test for exact items. Let's do that for 'shakes' below.

  // I could have done this for above 3 as well, but just doing for below one to show the level of detail, and different approaches. In my real projects, I would prefer in depth tests like below one (not only testing number but also testing for actual value)
  test(`'Shakes' category selected`, () => {
    const categories = screen.getByTestId('categories')
    const shakes = within(categories).getByText(/shakes/i)
    userEvent.click(shakes)
    // Should show only items that have breakfast
    const shakesMenu = screen.getAllByTestId('menu-item')
    expect(shakesMenu.length).toEqual(expectedData['shakes'].length) // you could also do .toEqual(data.length)

    // let's also now test for actual data (not only number of items like done above)
    const actualShakes = shakesMenu.map(
      (item) => item.textContent.split('$')[0] // we have item names initally and $ amount. So splitting that will give us array and the very first element will be the name. We can check that against our expected values
    )
    expect(actualShakes.sort()).toEqual(expectedData['shakes'].sort()) // in case the order is changed, we sort both expected and actual to have them same
  })
})
