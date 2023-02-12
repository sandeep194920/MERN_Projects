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
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
