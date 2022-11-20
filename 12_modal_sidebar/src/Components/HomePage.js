import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import Modal from './Modal'
import Sidebar from './Sidebar'

function HomePage() {
  return (
    <main>
      <button className="sidebar-toggle">
        <FaBars />
      </button>
      <button className="btn">show modal</button>
    </main>
  )
}

export default HomePage
