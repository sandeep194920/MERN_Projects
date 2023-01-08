# Project details

[Movies search]()

## Details

This app is similar to photos search but in addition to searching movies we also use react router to display details of clicked movie in the next page. We use omdbapi for this project.

## Things we can learn

- Things to remember and recap when we are setting context
- **Gotcha** - `useEffect + useCallback` infinite loop
- How to display different image when image from API is not available
- Implement custom hook `useFetch`

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
          // setError({ ...error, show: true, msg: data.Error }) // REFERENCE LINE 1 (FOR BELOW EXPLANATION)
          // setError({ show: true, msg: data.Error }) // REFERENCE LINE 2 (FOR BELOW EXPLANATION)
        }
      } catch (error) {
        console.log(error)
      }
      setIsLoading(false)
    },
    [error] // [] this could be an empty array if setError is REFERENCE LINEE 2 (which is the right way - explained below)
  )
  ```

---

### **Gotcha** - `useEffect + useCallback` infinite loop

I noticed one thing while working with `useCallback and useEffect`. In the above question, see `REFEENCE LINE 1` and `REFEENCE LINE 2`. If you use `REFEENCE LINE 1` then we are making use of `error`, hence we need to set that `error` in dependency array, and this leads to infinite loop.

**Why does it lead to infinite loop?**

- `fetchImage` function is recreated always when dependecy of `useCallback` changes.
- If we include `error` in that dependency, since `REFEENCE LINE 1` or `REFEENCE LINE 2` is about `setError`, this sets error which leads to re-render component. Because of this component re-render, `useEffect` is run again. This useEffect contains `fetchImages` as dependency and because of this, react does see if `fetchImages` function need to be re-run. `fetchImages` even though enclosed in callback, it would re-run again as it has `error` dependency which means that, when error changes, re-run callback function. This happend due to setError in `REFEENCE LINE 1` or `REFEENCE LINE 2`.
- So one rule of thumb in `useCallback` is, never have any dependency in useCallback that will have state change inside useCallback. Example,

```js
useCallback(function x() {
  setSomething('newValue')
}),
  [something] // this would lead to infinite loop. So try removing it from dependency array
```

**So based on the above discussion, what is the resolution here?**

Replace

```js
setError({ ...error, show: true, msg: data.Error })
```

with

```js
setError((prevError) => ({ ...prevError, show: true, msg: data.Error }))
```

and because of this, we can skip error in callback dependency

```js
const fetchMovies = useCallback(async (url) => {
  setIsLoading(true)
  // fetch the data
  try {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    if (data.Response === 'True') {
      setMovies(data.Search)
      setError((prevError) => {
        return {
          ...prevError,
          show: false,
          msg: '',
        }
      })
    } else {
      // setError({...error, show: true, msg: data.Error }) //! This line needs error in dependency array of useCallback (leads to infinite loop)
      setError((prevError) => ({ ...prevError, show: true, msg: data.Error })) //* This line DOESN'T need error in dependency array of useCallback as we are relying on prevError  (doesn't lead to infinite loop - and is recommended way)
    }
    setIsLoading(false)
  } catch (error) {
    console.log(error)
    setIsLoading(false)
  }
}, [])
```

so the takeaway is, always use prevState to set new state so you can skip adding that state value in `useCallback dependency`.

---

### How to display different image when image from API is not available?

```jsx
const url = `no image available image`
return{
    //.....
    <img src={poster === 'N/A' ? url : poster} alt={title} />
}
```

---

### Implement custom hook `useFetch`

We have data fetching from API and set the states for `isLoading`, `error` and `data`(`movies` - for movies and `movie` for `SingleMovie`). We are fetching the data in two places, so instead of repeating the process of data fetching in two places, we can use custom hook concept and implement `useFetch` hook which fetches the data and we can use this logic in those two places.

Currently we fetch data in two places

- `SingleMovie.js` - to fetch single movie
- `context.js` - to feetch searched movies list

**`SingleMovie fetch`**

```js
const [isLoading, setIsLoading] = useState(true)
const [error, setError] = useState({ show: false, msg: '' })
const [movie, setMovie] = useState({})
const fetchMovie = async (url) => {
  const response = await fetch(url)
  const data = await response.json()
  if (data.Response === 'False') {
    setError({ show: true, msg: data.Error })
  } else {
    setMovie(data)
  }
  setIsLoading(false)
}
useEffect(() => {
  fetchMovie(`${API_ENDPOINT}&i=${id}`)
}, [id])
```

**`context.js fetch - all movies`**

```js
const [isLoading, setIsLoading] = useState(false)
// const [error, setError] = useState(false)
const [error, setError] = useState({ show: false, msg: '' })
const [movies, setMovies] = useState([])
const fetchMovies = useCallback(async (url) => {
  setIsLoading(true)
  try {
    const response = await fetch(url)
    const data = await response.json()
    if (data.Response === 'True') {
      setMovies(data.Search)
      setError((prevError) => {
        return {
          ...prevError,
          show: false,
          msg: '',
        }
      })
    } else {
      setError((prevError) => ({ ...prevError, show: true, msg: data.Error }))
    }
    setIsLoading(false)
  } catch (error) {
    console.log(error)
    setIsLoading(false)
  }
}, [])

useEffect(() => {
  fetchMovies(`${API_ENDPOINT}&s=${query}`)
}, [query, fetchMovies])
```

**Let's combine above two implementations in `useFetch` hook**

```js
import { useEffect, useState } from 'react'

function useFetch(url) {
  const [error, setError] = useState({ show: false, msg: '' })
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async (url) => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      if (data.Response === 'True') {
        setData(data)
        setError((prevError) => {
          return {
            ...prevError,
            show: false,
            msg: '',
          }
        })
      } else {
        setError({ show: true, msg: data.Error })
      }
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }
  useEffect(() => {
    fetchData(url)
  }, [url])
  return { data, error, isLoading }
}

export default useFetch
```

---
