import React, { useContext, createContext } from 'react'

const AppContext = createContext(null)
const AppProvider = ({ children }) => {
  const initialState = {
    products: [
      {
        id: '1',
        name: 'Samsung Galaxy S8',
        price: 399.99,
        quantity: 1,
        img: './products/phone1.png',
      },
      {
        id: '2',
        name: 'Google Pixel',
        price: 499.99,
        quantity: 1,
        img: './products/phone2.png',
      },
      {
        id: '3',
        name: 'Xiaomi Redmi Note 2',
        price: 599.99,
        quantity: 1,
        img: './products/phone3.png',
      },
      {
        id: '4',
        name: 'Samsung Galaxy S7',
        price: 699.99,
        quantity: 1,
        img: './products/phone4.png',
      },
    ],
  }
  return (
    <AppContext.Provider value={{ initialState }}>
      {children}
    </AppContext.Provider>
  )
}

// custom hook - to avoid using useContext + AppContext in other files. Instead we can directly use useGlobalContext
const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useGlobalContext }
