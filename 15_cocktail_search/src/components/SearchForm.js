import React, { useEffect, useRef } from 'react'
import { useGlobalContext } from '../context'

function SearchForm() {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = useRef('')

  const searchCocktail = (e) => {
    setSearchTerm(e.target.value)
  }

  // to foucs on input when the component loads
  useEffect(() => {
    searchValue.current.focus()
  }, [])

  // to prevent default - when user clicks enter the page reloads and we need to stop that
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favourite cocktail</label>
          <input
            type="text"
            id="name"
            // value={searchTerm} /* without useRef */
            ref={
              searchValue
            } /* with ref (commenting this and un-commenting above one still works. This is not controlled input as we use ref) . Using this here as we need to focus on input when component loads*/
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
