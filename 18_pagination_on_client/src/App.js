import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
function App() {
  const { data, loading } = useFetch()
  const [page, setPage] = useState(0)
  const [followers, setFollowers] = useState([])

  useEffect(() => {
    if (!loading) {
      setFollowers(data[page])
    }
  }, [page, data, loading])

  const handlePage = (index) => {
    setPage(index)
  }

  const prevPage = () => {
    setPage((oldPage) => {
      if (oldPage === 0) {
        return data.length - 1
      }
      return oldPage - 1
    })
  }

  const nextPage = () => {
    setPage((oldPage) => {
      if (oldPage === data.length - 1) {
        return 0
      }
      return oldPage + 1
    })
  }

  return (
    <main>
      <div className="section-title">
        <h1> {loading ? 'loading...' : 'pagination'} </h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {followers &&
            followers.map((follower, index) => {
              return <Follower key={follower.id} {...follower} />
            })}
        </div>
        {!loading && (
          <div className="btn-container">
            <button className="prev-btn" onClick={prevPage}>
              prev
            </button>
            {data.map((_, index) => {
              return (
                <button
                  key={index}
                  onClick={() => handlePage(index)}
                  // className={
                  //   index === page ? 'page-btn active-btn' : 'page-btn'
                  // }
                  /* OR */
                  className={`page-btn ${index === page && 'active-btn'}`}
                >
                  {index + 1}
                </button>
              )
            })}
            <button className="next-btn" onClick={nextPage}>
              next
            </button>
          </div>
        )}
      </section>
    </main>
  )
}

export default App
