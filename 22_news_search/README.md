# Project details

[News search]()

## Details

In this app, we have a search functionality without enter button that brings the results instantly. We use [hacker news algolia api](https://hn.algolia.com/api) which doesn't need an API key. We do have server-side-pagination which means that this API will provide specific page we request for in the query param. We make use of `search` and `page` query params of the API. We will also use `delete functionality` of each news item, and this project involves combination of `useReducer` and `useContext` hooks.

## Things we can learn

- How to implement `useReducer` hook?
- How to Open link in new tag when clicked on `<a href/>` tag
- `prev` and `next` buttons will change the page, and while doing so, disable the buttons
- Two flavours of implementing next and prev buttons in reducer

---

### How to implement basic useReducer hook?

This is already explained in [14-Shopping-cart project](https://github.com/sandeep194920/React_MUI_Express_Projects/tree/master/14_shopping_cart/front-end#how-to-use-usereducer-hook-will-be-helpful-for-redux-section-as-well) but let's add some explanation to it as far as what steps must be taken to make use of `useReducer`

- Define useReducer like this

```js
const initialState = {}

const [state, dispatch] = useReducer(reducer, initialState)
```

- Whatever you define with `useState` (like isLoading, error and so on), all those will go into initialState. Define it as you go. I mean, let's now say you want to fetch the data from API. For that you define an async function, and the first thing you do is to set `isLoading to true`. So define `isLoading` in `initialState`. Hence, it now looks like this

```js
const initialState = {
  isLoading: true, // I defined this here as I will be using it in dispatch
}

const [state, dispatch] = useReducer(reducer, initialState)

const fetchStories = async () => {
  dispatch({ type: SET_LOADING }) // we don't need any payload to set to true. By this dispatch we set setIsLoading it to true, and then in other dispatch calls, we set the isLoading to false with other data
}

useEffect(() => {
  fetchStories()
}, [])
```

- `reducer` (first parameter of `useReducer`) looks like this initially

```js
import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions' // actions file holds all the string mapping. Eg. SET_LOADING = 'SET_LOADING' to avoid typos

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true } // we don't need any payload to set to true. By this dispatch we set setIsLoading it to true, and then in other dispatch calls, we set the isLoading to false with other data
    default:
      throw new Error(`no matching "${action.type} action type"`)
  }
}
export default reducer
```

**So the fetch function looks like this now**

```js
const initialState = {
  isLoading: true,
  hits: [],
  query: 'react',
  page: 0,
  nbPages: 0, // number of pages - we get from api
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchStories = async (url) => {
    dispatch({ type: SET_LOADING, payload: true })
    try {
      const response = await fetch(url)
      const data = await response.json()
      dispatch({
        type: SET_STORIES,
        payload: { hits: data.hits, nbPages: data.nbPages },
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchStories(`${API_ENDPOINT}query=${state.query}&page=${state.page}`)
  }, [state.page, state.query])
}
```

**and reducer looks like this**

```js
const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING: // this is to set loading to true. In other requests where we get the data, we set loading to false
      return { ...state, isLoading: true }
    case SET_STORIES:
      const { hits, nbPages } = action.payload
      return { ...state, isLoading: false, hits, nbPages } // setting loading to false
    default:
      throw new Error(`no matching "${action.type} action type"`)
  }
}
export default reducer
```

**_At this point you could see the state change in react developer tools_**

---

### How to Open link in new tag when clicked on `<a href/>` tag?

we add `target={'_blank'}` and `rel="noreferrer"`

```js
<a href={url} target={'_blank'} rel="noreferrer">
  read more
</a>
```

---

### `prev` and `next` buttons will change the page, and while doing so, disable the buttons

When you change the page (prev or next), you load new data, and at that time, we don't want user to keep clicking the next or prev buttons as they won't see the data. Instead they just see loading page which is not a good user experience. So while loading, disable the button clicks.

```js
<div className="btn-container">
  <button disabled={isLoading} onClick={() => handlePage('dec')}>
    prev
  </button>
  <p>
    {page + 1} of {nbPages}
  </p>
  <button disabled={isLoading} onClick={() => handlePage('inc')}>
    next
  </button>
</div>
```

---

### Two flavours of implementing next and prev buttons in reducer

I first implemented `HANDLE_PAGE` this way

```js
case HANDLE_PAGE:
    let page
    if (action.payload === 'dec') {
    if (state.page === 0) {
        page = state.nbPages - 1
    } else {
        page = state.page - 1
    }
    } else if (action.payload === 'inc') {
    if (state.page === state.nbPages - 1) {
        page = 0
    } else {
        page = state.page + 1
    }
    }
    return {
    ...state,
    page,
    }
```

You see there are a lot of `else` code that is not actually required. I then learnt from John and this is the improved way of doing the above

```js
case HANDLE_PAGE:
    if (action.payload === 'dec') {
        let prevPage = state.page - 1 // desired functionality
        if (prevPage < 0) {
            prevPage = state.nbPages - 1 // edge case
        }
        return {
            ...state,
            page: prevPage,
        }
    }
    if (action.payload === 'inc') {
        let nextPage = state.page + 1 // desired functionality
        if (nextPage > state.nbPages - 1) {
            nextPage = 0
        }
        return {
            ...state,
            page: nextPage,
        }
    }
    // this line is never hit techically as we either will have inc or dec
    return {
    ...state,
    }
```

---
