import React, { useEffect, useRef } from 'react'
import { useGlobalContext } from './Header/context'

function Submenu() {
  const {
    showSubmenu,
    location,
    page: { page, subLinks },
  } = useGlobalContext()

  const submenuRef = useRef(null)
  useEffect(() => {
    submenuRef.current.style.left = `${location}px`
  }, [location])

  return (
    <article
      ref={submenuRef}
      className={`${showSubmenu ? 'submenu show' : 'submenu'}`}
    >
      <h4>{page}</h4>

      <div className="sublink-container">
        {subLinks?.map((sublink) => {
          return (
            <div className="item" key={sublink.label}>
              <span>{sublink.icon}</span>
              <a href={sublink.url}>{sublink.label}</a>
            </div>
          )
        })}
      </div>
    </article>
  )
}

export default Submenu
