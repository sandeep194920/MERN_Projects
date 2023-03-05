import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/filter_reducer'
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'
import { useProductsContext } from './products_context'

const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  sort: 'price-lowest',
  filters: {
    text: '',
    category: 'all',
    company: 'all',
    color: 'all',
    min_price: 0,
    max_price: 0, // this is price of the highest priced product
    price: 0,
    shipping: false,
  },
}

const FilterContext = React.createContext()

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { products } = useProductsContext()

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW })
  }

  const setListView = () => {
    dispatch({ type: SET_LISTVIEW })
  }

  // updateSort triggers when we change the select input
  const updateSort = (e) => {
    // const name = e.target.name // for demonstration. We will use this later
    const value = e.target.value
    dispatch({ type: UPDATE_SORT, payload: value })
  }

  // when filters are changed this single function updateFilters is invoked - Similar to updateSort
  const updateFilters = (e) => {
    let name = e.target.name
    let value = e.target.value
    if (name === 'category') value = e.target.textContent
    if (name === 'color') value = e.target.dataset.color
    if (name === 'price') value = +value // converting from str to num
    if (name === 'shipping') value = e.target.checked
    dispatch({
      type: UPDATE_FILTERS,
      payload: { name: name, value: value },
    })
  }

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS })
  }

  // when the filters change (for example when user types something in search), the updateFilters is called which sets the state of that filter. Once the filter is set, we need to fetch the products for that search, hence this below useEffect
  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS })
  }, [products, state.filters])

  // when sort is clicked, first the updateSort is called and then  the below useEffect will run to change the products as per the sort
  useEffect(() => {
    dispatch({ type: SORT_PRODUCTS })
  }, [products, state.sort])

  /* NOTE THAT : we could have combined ABOVE TWO useEffects for sort and filters into one and add two dispatches into that, but I prefer keeping them independent. BUT POINT IS, FIRST WE HAVE TO FILTER THE PRODUCTS AND THEN ONLY SORT THEM. HENCE WE NEED TO PLACE FILTER dispatch FIRST and then SORT dispatch like we have done above*/

  // Load the products
  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products })
  }, [products])

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateSort,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext)
}
