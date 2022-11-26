import React from 'react'
import links from './data'
import { AiOutlineClose } from 'react-icons/ai'

function Sidebar() {
  return (
    <article className="sidebar">
      <section className="sidebar-container">
        <div className="sidebar-header">
          <div className="sidebar-logo">stripe</div>
          <button className="close-btn">
            <AiOutlineClose />
          </button>
        </div>
        <article className="sidebar-links">
          {links.map((link, index) => {
            const { page, subLinks } = link
            return (
              <div key={index}>
                <h4>{page}</h4>
                <ul>
                  {subLinks.map((sublink, index) => {
                    const { label, icon, url } = sublink
                    return (
                      <li key={index}>
                        <span className="icon">{icon}</span>
                        <a href={url}>{label}</a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </article>
      </section>
    </article>
  )
}

export default Sidebar
