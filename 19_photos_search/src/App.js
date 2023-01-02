import React, { useState, useEffect, useCallback } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`

function App() {
  const [loading, setLoading] = useState(false)
  const [photos, setPhotos] = useState([])
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('')

  const fetchImages = useCallback(async () => {
    setLoading(true)
    let url
    const urlPage = `&page=${page}`
    url = `${mainUrl}${clientID}${urlPage}`
    try {
      const response = await fetch(url)
      const data = await response.json()
      setPhotos((oldPhotos) => {
        // console.log('The old photos are', oldPhotos)
        console.log('Old photos', [...oldPhotos])
        console.log('data is', [...data])
        return [...oldPhotos, ...data]
      })
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }, [page])

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
    console.log('hello')
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
