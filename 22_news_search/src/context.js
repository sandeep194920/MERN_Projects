import React, { useContext, useEffect, useReducer } from 'react'

import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'
import reducer from './reducer'

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?'

const initialState = {
  isLoading: true,
  hits: [],
  query: 'react',
  page: 0,
  nbPages: 0, // number of pages - we get from api
}

const AppContext = React.createContext()

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

  const removeStory = (id) => {
    // & You could either do the commented way below by using SET_STORIES
    /*
    const newStories = state.hits.filter((hit) => hit.objectID !== id)
    dispatch({ type: SET_STORIES, payload: { hits: newStories } })
    */

    // * OR You could do using a new reducer function REMOVE_STORY
    dispatch({ type: REMOVE_STORY, payload: id })
  }

  const handleSearch = (query) => {
    // everytime we change the query, the page also should start from 0
    dispatch({ type: HANDLE_SEARCH, payload: query, page: 0 })
  }

  const handlePage = (value) => {
    dispatch({ type: HANDLE_PAGE, payload: value })
  }

  return (
    <AppContext.Provider
      value={{ ...state, removeStory, handleSearch, handlePage }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
