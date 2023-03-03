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

  // when sort is clicked, first the updateSort is called and then  the below useEffect will run to change the products as per the sort
  useEffect(() => {
    dispatch({ type: SORT_PRODUCTS })
  }, [products, state.sort])

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products })
  }, [products])

  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, updateSort }}
    >
      {children}
    </FilterContext.Provider>
  )
}
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext)
}
