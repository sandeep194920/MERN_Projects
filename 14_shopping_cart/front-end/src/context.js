import React, { useContext, createContext, useEffect, useReducer } from 'react'
import { actions, initialState, reducer } from './reducer'
// import _ from 'lodash'

const url = 'http://localhost:9000/.netlify/functions/api'

const AppContext = createContext(null)
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // fetch data

  const fetchData = async () => {
    const response = await fetch(url)
    const { products } = await response.json()
    console.log(products)
    dispatch({ type: 'LOAD_PRODUCTS', payload: products })
  }

  useEffect(() => {
    fetchData()
  }, [])

  // whenever cart items update, we need to calculate total cart items which will be used in header
  useEffect(() => {
    const numberOfCartItems = state.products.reduce((acc, sumObj) => {
      // accObj points to first obj in array (since we initialized it with 0, it is 0 in this case and not first obj of array) while sumObj points to second object (in this case first object as the initial value is assigned) to start with

      /*
      With No initial value
      acc -> points to first object in products array
      sumObj -> points to second object in products array

      With initial value (in our case here)
      acc -> points to initial value
      sumObj -> points to first object in products array
      */

      return acc + sumObj.quantity
    }, 0)
    dispatch({ type: actions.CART_QUANTITY, payload: numberOfCartItems })
  }, [state.products])

  // calculates cart total
  useEffect(() => {
    const cartTotal = state.products.reduce((acc, product) => {
      return acc + product.quantity * product.price
    }, 0)
    dispatch({ type: actions.CART_TOTAL, payload: cartTotal })
  }, [state.products])

  const increaseQtyHandler = (productId) => {
    dispatch({ type: actions.INCREASE_QUANTITY, payload: productId })
  }

  const decreaseQtyHandler = (productId) => {
    dispatch({ type: actions.DECREASE_QUANTITY, payload: productId })
  }

  // increaseQtyHandler and decreaseQtyHandler can be combined into changeQtyHandler
  const changeQtyHandler = (productId, type) => {
    dispatch({ type: actions.CHANGE_QUANTITY, payload: { productId, type } })
  }

  const removeHandler = (productId) => {
    dispatch({ type: actions.REMOVE_ITEM, payload: productId })
  }

  const fillCartHandler = () => {
    dispatch({ type: actions.FILL_CART })
  }

  const clearCartHandler = () => {
    dispatch({ type: actions.CLEAR_CART })
  }

  const stopLoading = () => {
    dispatch({ type: actions.STOP_LOADING })
  }

  const startLoading = () => {
    dispatch({ type: actions.START_LOADING })
  }

  return (
    <AppContext.Provider
      value={{
        initialState,
        increaseQtyHandler,
        decreaseQtyHandler,
        changeQtyHandler,
        removeHandler,
        fillCartHandler,
        clearCartHandler,
        startLoading,
        stopLoading,
        ...state, // spreading this out so I can destructure them all and not do something like - state.loading
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

// custom hook - to avoid using useContext + AppContext in other files. Instead we can directly use useGlobalContext
const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useGlobalContext }
