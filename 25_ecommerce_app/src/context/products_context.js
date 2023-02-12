import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/products_reducer'
import { products_url as url } from '../utils/constants'
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'

const initialState = {
  isSidebarOpen: false,
  products_loading: false, // loading for all products.
  products_error: false,
  products: [], // this is shown on the products page
  featured_products: [], // this is shown on the home page
  // for singleProduct
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
}

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN })
  }

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE })
  }

  // fetch products
  const fetchProducts = async (url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN }) // this is to set the loading to true
    try {
      const response = await axios.get(url)
      const products = response.data
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products }) // this is to set products array and also featured products and then loading to false
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR }) // this sets loading to false and error to true for products
    }
  }

  // fetch the products once and show the featured ones to HomePage. Show all products in /products page
  useEffect(() => {
    fetchProducts(url)
  }, [])

  // fetch single product
  const fetchSingleProduct = React.useCallback(async (url) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN }) // this is to set the loading to true for single product
    try {
      const response = await axios.get(url)
      const singleProduct = response.data
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct })
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR })
    }
  }, [])

  return (
    <ProductsContext.Provider
      value={{ ...state, openSidebar, closeSidebar, fetchSingleProduct }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}
