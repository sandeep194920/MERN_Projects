# Project details

[News search]()

## Details

In this app, we have a search functionality without enter button that brings the results instantly. We use [hacker news algolia api](https://hn.algolia.com/api) which doesn't need an API key. We do have server-side-pagination which means that this API will provide specific page we request for in the query param. We make use of `search` and `page` query params of the API. We will also use `delete functionality` of each news item, and this project involves combination of `useReducer` and `useContext` hooks.

## Things we can learn

- How to implement `useReducer` hook?

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
  dispatch({ type: SET_LOADING, payload: true })
}

useEffect(() => {
  fetchStories()
}, [])
```
