import React, { useState, useEffect, useCallback } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`

function App() {
  const [loading, setLoading] = useState(false)
  const [photos, setPhotos] = useState([])
  const [page, setPage] = useState(0)
  const [query, setQuery] = useState('')

  const fetchImages = useCallback(async () => {
    setLoading(true)
    let url
    const urlPage = `&page=${page}`
    const urlQuery = `&query=${query}`
    if (query) {
      url = `${searchUrl}${clientID}${urlPage}${urlQuery}`
    } else {
      url = `${mainUrl}${clientID}${urlPage}`
    }
    try {
      const response = await fetch(url)
      const data = await response.json()
      setPhotos((oldPhotos) => {
        if (page === 1 && query) {
          return data.results
        } else if (query) {
          return [...oldPhotos, ...data.results]
        } else {
          return [...oldPhotos, ...data]
        }
      })
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }, [query, page])

  useEffect(() => {
    fetchImages()
  }, [page, fetchImages])

  // scroll event
  useEffect(() => {
    const event = window.addEventListener('scroll', () => {
      const innerHeight = window.innerHeight
      const scrollY = window.scrollY
      const bodyHeight = document.body.scrollHeight

      if (!loading && innerHeight + scrollY >= bodyHeight - 5) {
        setPage((oldPage) => {
          return oldPage + 1
        })
      }
    })
    return () => window.removeEventListener('scroll', event)
  }, [loading])

  const handleSubmit = (e) => {
    e.preventDefault()
    //setPage(1) //~ comment this if setPhotos([]) and fetchImages() are called like below

    /* Initially, when page is set to 1 and  here when we set page to 1 again, the first 10 photos will not change as the state call for setPhotos would be same as before. Hence, either of two things can be done*/

    //! This is not my favourite way
    /*1. Initially set the page to 0, and setPage(1) as done in above line. In this case, everytime, the enter button is clicked, page is set from 0 to 1 and the data would be pulled.  */

    //* This is my favourite way
    /*2. Instead of setting the page to 0, when the enter button is clicked, we will wipe out the data by setting setPhotos([]) and then call fetchImages() which would call the images again with the query. To achieve this, comment above setPage(1) and uncomment below setPhotos([]) and fetchImages() */

    setPhotos([])
    fetchImages()
  }

  return (
    <main>
      <section className="search">
        <form className="search-form">
          <input
            type="text"
            placeholder="search"
            className="form-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            <FaSearch />
          </button>
        </form>
      </section>
      <section className="photos">
        <div className="photos-center">
          {photos.map((photo, index) => {
            return <Photo key={index} {...photo} />
          })}
        </div>
        {loading && <h2 className="loading">Loading...</h2>}
      </section>
    </main>
  )
}

export default App
