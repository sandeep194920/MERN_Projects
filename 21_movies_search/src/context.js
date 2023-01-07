import React, { useContext, useEffect, useState, useCallback } from 'react'

const AppContext = React.createContext()

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState({ show: false, msg: '' })
  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState('batman')

  const fetchMovies = useCallback(
    async (url) => {
      setIsLoading(true)
      // fetch the data
      try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        if (data.Response === 'True') {
          setMovies(data.Search)
          setError({ ...error, show: false, msg: '' })
        } else {
          setError({ ...error, show: true, msg: data.Error })
        }
        setIsLoading(false)
      } catch (error) {
        console.log(error)
        setIsLoading(false)
      }
    },
    [error]
  )

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}&s=${query}`)
  }, [query, fetchMovies])

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
