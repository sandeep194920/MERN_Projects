import { useState } from 'react'
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import links from './links'

function App() {
  const [showNav, setShowNav] = useState(false)

  return (
    <>
      <nav>
        <div className="nav-container">
          <div className="logo">
            <img src="./svg/Color logo - no background.svg" alt="logo" />
          </div>
          <ul className="nav-items">
            {links.map((link) => {
              const { id, text, url } = link
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })}
          </ul>
          <ul className="icon-container">
            <li>
              <FaLinkedin className="icon" />
            </li>
            <li>
              <FaFacebook className="icon" />
            </li>
            <li>
              <FaInstagram className="icon" />
            </li>
          </ul>
          <GiHamburgerMenu
            onClick={() => setShowNav((prev) => !prev)}
            className="icon menu-icon"
          />
        </div>
      </nav>
      <div
        className={
          showNav ? 'small-screen-nav-shown' : 'small-screen-nav-hidden'
        }
      >
        <ul>
          {links.map((link) => {
            const { id, text, url } = link
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default App
