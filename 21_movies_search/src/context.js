import React, { useContext, useEffect, useState, useCallback } from 'react'
import useFetch from './useFetch'

const AppContext = React.createContext()

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`

const AppProvider = ({ children }) => {
  /*
  const [isLoading, setIsLoading] = useState(false)
  // const [error, setError] = useState(false)
  const [error, setError] = useState({ show: false, msg: '' })
  const [movies, setMovies] = useState([])
  */

  const [query, setQuery] = useState('superman')

  const {
    isLoading,
    data: { Search: movies },
    error,
  } = useFetch(`${API_ENDPOINT}&s=${query}`)
  console.log('The data', movies)

  //^ Implemented the below logic in useFetch custom hook
  /*
  const fetchMovies = useCallback(async (url) => {
    setIsLoading(true)
    // fetch the data
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
        // setError({...error, show: true, msg: data.Error }) //! This line needs error in dependency array of useCallback (leads to infinite loop)
        setError((prevError) => ({ ...prevError, show: true, msg: data.Error })) //* This line DOESN'T need error in dependency array of useCallback as we are relying on prevError  (doesn't lead to infinite loop - and is recommended way)
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

  */

  return (
    <AppContext.Provider
      value={{
        movies,
        error,
        isLoading,
        query,
        setQuery,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider }
