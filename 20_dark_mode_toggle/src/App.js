import './App.css'
import data from './data'
import Article from './Article'
import { useEffect, useState } from 'react'

function App() {
  const [theme, setTheme] = useState('light-theme')

  useEffect(() => {
    document.documentElement.className = theme
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

export default App
