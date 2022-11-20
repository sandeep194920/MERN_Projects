import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { links, social } from '../links'

function Sidebar() {
  return (
    <aside className="sidebar show-sidebar">
      {/* SIDEBAR HEADER */}
      <div className="sidebar-header">
        {/* enclosing image in div so that img doesn't move to a little right side which is strange*/}
        <div>
          <img src="./svg/Color logo - no background.svg" alt="Logo" />
        </div>
        <button className="close-btn">
          <FaTimes />
        </button>
      </div>
      {/* SIDEBAR LINKS */}
      {/* SIDEBAR SOCIAL LINKS */}
      <article className="links">
        <ul>
          {links.map((link) => {
            const { id, url, text, icon } = link
            return (
              <li key={id}>
                <a href={url}>
                  <div>
                    {icon}
                    {text}
                  </div>
                </a>
              </li>
            )
          })}
        </ul>
      </article>
      <ul className="social-links">
        {social.map((link) => {
          const { id, url, icon } = link
          return (
            <li key={id}>
              <a href={url}>
                <div>{icon}</div>
              </a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default Sidebar
