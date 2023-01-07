# Project details

[Movies search]()

## Details

This app is similar to photos search but in addition to searching movies we also use react router to display details of clicked movie in the next page. We use omdbapi for this project.

## Things we can learn

- Things to remember and recap when we are setting context

---

### Things to remember and recap when we are setting context

When we are working on some medium to big size app, we generally use context. This question can be a reference for you to recall quickly what we can set up.

- Once you have the context boiler plate, then setup **state** values for

  - isLoading
  - error - object state - as we would generally have different error messages for different conditions - [similar to 10-grocery-store project](https://github.com/sandeep194920/React_MUI_Express_Projects/tree/master/10_grocery_shop#how-to-set-alert-programmatically-based-on-different-conditions-on-crud)

  ```js
  const [error, setError] = useState({ show: false, msg: '' })
  ```

  - any values that initially you would like to fetch from an API and display on the home page. For example Movies in this case
  - and then a state for search query if it applies - for subsequent requests

- Once you have state values, then define async function to fetch the data from API and call it inside useEffect
- Inside the async function, first set isLoading to true and then once the data is fetched, set it to false

```js
const fetchMovies = async (url) => {
  setIsLoading(true)
  try {
    // fetch the data
  } catch (e) {
    console.log(e)
  }
  setIsLoading(false)
}
useEffect(() => {
  fetchMovies(`${API_ENDPOINT}`)
}, [])
```

- Set the errors now
  - Modify the inputs and see what response you are getting. Sometimes, the response will be false for an invalid input(in this project) so you might want to handle such things and set the error accordingly
  - Also refer to their docs for any additional error details that the API could throw
- Once you set the above use effect, then we might have to pass query like this in `useEffect` and then we would get the warning saying we need to add `fetchMovies` to `useEffect` dependency array.

```js
useEffect(() => {
  fetchMovies(`${API_ENDPOINT}&s=${query}`)
}, [query]) // here it complains about not having fetchMovies
```

- To solve this complain/warning, we have two options

  - add a comment `// eslint-disable-next-line` like this so the warning goes away (**not recommended**)

  ```js
  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}&s=${query}`)
    // eslint-disable-next-line
  }, [query])
  ```

  - enclose fetchMovies call inside useCallback hook (**remommended**)

  ```js
  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}&s=${query}`)
  }, [query, fetchMovies])
  ```

  ```js
  const fetchMovies = useCallback(
    async (url) => {
      setIsLoading(true)
      // fetch the data
      try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        if (data.Response === false) {
          setError({ ...error, show: true, msg: data.Error })
        }
      } catch (error) {
        console.log(error)
      }
      setIsLoading(false)
    },
    [error]
  )
  ```
