import './App.css'
import data from './data'
import Article from './Article'
import { useEffect, useState } from 'react'

/* We can retrieve saved theme using a function or without a function, just through a variable as shown below*/

// without a function
// const savedTheme = localStorage.getItem('savedTheme') || 'light-theme'

// with function
const getSavedTheme = () => {
  let savedTheme = 'light-theme'
  if (localStorage.getItem('savedTheme')) {
    savedTheme = localStorage.getItem('savedTheme')
  }
  return savedTheme
}

function ToggleWithCSS() {
  // const [theme, setTheme] = useState(savedTheme) //^ without function
  const [theme, setTheme] = useState(getSavedTheme()) //* with a function

  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem('savedTheme', theme)
  }, [theme])

  const handleToggle = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme')
    } else {
      setTheme('light-theme')
    }
  }

  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>Dark Mode Toggle</h1>
          <button onClick={handleToggle} className="btn">
            toggle
          </button>
        </div>
      </nav>
      <section className="articles">
        {data.map((item) => {
          return <Article key={item.id} {...item} />
        })}
      </section>
    </main>
  )
}

export default ToggleWithCSS
