import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div>
      <h3>Something went wrong.....</h3>
      <Link to="/" className="btn btn-primary">
        Back Home
      </Link>
    </div>
  )
}

export default Error
