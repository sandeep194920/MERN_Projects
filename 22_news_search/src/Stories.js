import React from 'react'

import { useGlobalContext } from './context'

const Stories = () => {
  const { isLoading, hits } = useGlobalContext()

  if (isLoading) {
    return <div className="loading"></div>
  }
  return (
    <section className="stories">
      {hits.map((story) => {
        const { objectID: id, title, num_comments, points, url, author } = story
        return (
          <article key={id} className="story">
            <h4 className="title">{title}</h4>
            <p className="info">
              {points} points by <span>{author}</span> | {num_comments} comments
            </p>
            <div>
              <a
                href={url}
                className="read-link"
                target={'_blank'}
                rel="noreferrer"
              >
                read more
              </a>
              <button className="remove-btn">remove</button>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default Stories
