import { useEffect, useRef, useState } from 'react'
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import links from './links'

function App() {
  const [showNav, setShowNav] = useState(false)
  const parentRef = useRef(null)
  const childRef = useRef(null)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const childUlHeight = childRef.current.getBoundingClientRect().height
    if (showNav) {
      parentRef.current.style.height = `${childUlHeight}px`
    } else {
      parentRef.current.style.height = `0px`
    }
  }, [showNav])

  // If showNav is true and user enlarges the screen, then we will have both small and large navbars which is bad. Let's get rid of small navbar when screen is enlarged
  // useEffect(() => {
  //   function handleResize() {
  //     // Set window width/height to state
  //     setWindowWidth({
  //       width: window.innerWidth,
  //     })
  //   }
  //   window.addEventListener('resize', handleResize)

  //   if (windowWidth.width > 776) {
  //     setShowNav(false)
  //   }

  //   // Remove event listener on cleanup
  //   return () => window.removeEventListener('resize', handleResize)
  // }, [windowWidth])

  // COMMENTED ABOVE CODE AS WE ARE HANDLING THIS FUNCTIONALITY IN CSS LIKE THIS
  /*
@media screen and (min-width: 776px) {
  .small-screen-nav-shown {
    display: none;
  }
}
*/
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
        ref={parentRef}
        className={
          showNav ? 'small-screen-nav-shown' : 'small-screen-nav-hidden'
        }
      >
        <ul ref={childRef}>
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
