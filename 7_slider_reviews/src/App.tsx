import React from 'react'
import styles from './App.module.css'
import Reviews from './Components/Reviews/Reviews'

function App() {
  return (
    <div className={styles.appContainer}>
      <nav className={styles.nav}>
        <h1>Slider Review</h1>
      </nav>
      <section>
        <Reviews />
      </section>
    </div>
  )
}

export default App
