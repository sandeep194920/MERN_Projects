import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext()

// we will wrap our whole app in AppProvider
export const AppProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false)
  const [showSidebar, setShowSidebar] = useState(true)

  // MODAL
  const openModal = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  // SIDEBAR
  const openSidebar = () => {
    setShowSidebar(true)
  }

  const closeSidebar = () => {
    setShowSidebar(false)
  }

  const values = {
    showModal,
    showSidebar,
    openModal,
    closeModal,
    openSidebar,
    closeSidebar,
  }

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { useGlobalContext }
