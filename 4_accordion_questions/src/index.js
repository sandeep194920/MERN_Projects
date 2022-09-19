import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    {/* Since we are using CSSBaseline, we can comment default css in index.css */}
    <App />
  </React.StrictMode>
)
