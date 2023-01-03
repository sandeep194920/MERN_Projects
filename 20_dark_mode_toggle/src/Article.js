import React from 'react'
import moment from 'moment'

function Article({ title, snippet, date, length }) {
  return (
    <article className="post">
      <h2>{title}</h2>
      <div className="post-info">
        <span>{moment(date).format('MMM Do YY')},</span>
        <span> {length} min read</span>
      </div>
      <p>{snippet}</p>
    </article>
  )
}

export default Article
