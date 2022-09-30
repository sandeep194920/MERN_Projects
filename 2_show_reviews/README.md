# Project details

[Reviews App](https://2-reviews-app.netlify.app/)

- How to change state when a button is clicked
- How to use `Emotion CSS` for styling (https://emotion.sh/docs/introduction).
- We chose `Emotion CSS` this because MUI uses this as a key styling option. So in this project, we will learn how to use this emotion in isolation without MUI. This will help our future projects with MUI
- How to set linear colors for background by using backgroundImage prop
- How to write unit tests

### How to write unit tests

- We have learnt to use unit tests in our 1_show_hide_people project
- Here we learn how to use beforeEach, within method
- We also learn how to query heading elements. Let's say h3 and h4 both need to be queried and they both have the role of `heading`. [We can specicfy level to know which heading we are talking about. Click me to know more](https://testing-library.com/docs/queries/byrole/#level)

```js
// this indicate h4
const name = screen.getByRole('heading', { level: 4 })
expect(name).toBeInTheDocument()
```

Let's say we have multiple headings. h4 followed by h3 like this in our component (Reviews component shown below)

```js
<h4>{people[personIndex].name}</h4>
<h6>{people[personIndex].job}</h6>
```

and if we query like this below, we get error as there are multiple headings found

```js
const name = screen.getByRole('heading')
```

The error we get is

```
getMultipleElementsFoundError (node_modules/@testing-library/dom/dist/query-helpers.js:29:10)
```

- We also learn how to test paragraph. p tag is not a valid role [so we can't do get by role](https://stackoverflow.com/questions/65122974/getbyrole-query-for-paragraph-not-working-during-react-testing)

The problem here we have is, we display some random text from the `data.js` and we don't know which description from this `data.js` will be displayed

So we get all the description values from `data.js` in an array and check if our desc, got by `data-testid`, [exists in this array](https://jestjs.io/docs/expect#tocontainitem)

```js
test('description - p tag is present in review card', () => {
  // screen.getByTestId('desc') gives html element. textContent gets actual text within this html
  const desc = screen.getByTestId('desc').textContent

  // now we will get desc for sure as we have described it ourself in the Reviews component. Sine no role for paragraph, let's test if rendered desc is actually one of the 'description's in data we are importing

  // https://jestjs.io/docs/expect#tocontainitem

  const descriptions = data.map((item) => item.description)

  console.log(desc)
  expect(descriptions).toContain(desc)
})
```
