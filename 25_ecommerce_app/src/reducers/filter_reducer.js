import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    return {
      ...state,
      all_products: [...action.payload], // spreading out values are extemely important here so that we are deep copying now. In that way both all_products and filtered_products point to different memory location. During filtering the products we just modify the filtered_products and don't touch all_products
      filtered_products: [...action.payload],
    }
  }

  if (action.type === SET_GRIDVIEW) {
    return {
      ...state,
      grid_view: true,
    }
  }

  if (action.type === SET_LISTVIEW) {
    return {
      ...state,
      grid_view: false,
    }
  }

  if (action.type === UPDATE_SORT) {
    return {
      ...state,
      sort: action.payload,
    }
  }

  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state
    let tempProducts = [...filtered_products]
    if (sort === 'price-lowest') {
      tempProducts = tempProducts.sort((a, b) => a.price - b.price)
    }
    if (sort === 'price-highest') {
      tempProducts = tempProducts.sort((a, b) => b.price - a.price)
    }
    if (sort === 'name-a') {
      tempProducts = tempProducts.sort((a, b) => {
        return a.name.localeCompare(b.name)
      })
    }
    if (sort === 'name-z') {
      tempProducts = tempProducts.sort((a, b) => {
        return b.name.localeCompare(a.name)
      })
    }
    return {
      ...state,
      filtered_products: tempProducts,
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
