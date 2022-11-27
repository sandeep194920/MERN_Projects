import React, { useContext, useState } from 'react'
import links from '../data'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false)
  const [showSubmenu, setShowSubmenu] = useState(false)
  const [location, setLocation] = useState({})
  const [page, setPage] = useState({ page: '', links: [] })
  const openSidebar = () => {
    setShowSidebar(true)
  }

  const closeSidebar = () => {
    setShowSidebar(false)
  }

  const openSubmenu = (text, coordinates) => {
    const page = links.find((link) => link.page === text)
    setPage(page)
    setLocation(coordinates)
    setShowSubmenu(true)
  }

  const closeSubmenu = () => {
    setShowSubmenu(false)
  }

  return (
    <AppContext.Provider
      value={{
        showSidebar,
        openSidebar,
        closeSidebar,
        showSubmenu,
        openSubmenu,
        closeSubmenu,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useGlobalContext }
