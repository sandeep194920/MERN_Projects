import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true }
    case SET_STORIES:
      const { hits, nbPages } = action.payload
      return { ...state, isLoading: false, hits, nbPages }
    case REMOVE_STORY:
      return {
        ...state,
        hits: state.hits.filter((hit) => hit.objectID !== action.payload),
      }
    case HANDLE_SEARCH:
      return {
        ...state,
        query: action.payload,
      }
    // case HANDLE_PAGE:
    //   let page
    //   if (action.payload === 'dec') {
    //     if (state.page === 0) {
    //       page = state.nbPages - 1
    //     } else {
    //       page = state.page - 1
    //     }
    //   } else if (action.payload === 'inc') {
    //     if (state.page === state.nbPages - 1) {
    //       page = 0
    //     } else {
    //       page = state.page + 1
    //     }
    //   }
    //   return {
    //     ...state,
    //     page,
    //   }
    case HANDLE_PAGE:
      if (action.payload === 'dec') {
        let prevPage = state.page - 1 // desired functionality
        if (prevPage < 0) {
          prevPage = state.nbPages - 1 // edge case
        }
        return {
          ...state,
          page: prevPage,
        }
      }
      if (action.payload === 'inc') {
        let nextPage = state.page + 1 // desired functionality
        if (nextPage > state.nbPages - 1) {
          nextPage = 0
        }
        return {
          ...state,
          page: nextPage,
        }
      }
      return {
        ...state,
      }

    default:
      throw new Error(`no matching "${action.type} action type"`)
  }
}
export default reducer
