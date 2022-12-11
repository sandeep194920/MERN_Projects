export const initialState = {
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
  numberOfCartItems: 0, // this will be calculated on initial load using useEffect below
  cartTotalAmount: 0, // this will also be calculated on initial load using useEffect,
  loading: true,
}

export const actions = {
  INCREASE_QUANTITY: 'INCREASE_QUANTITY',
  DECREASE_QUANTITY: 'DECREASE_QUANTITY',
  CART_QUANTITY: 'CART_QUANTITY',
  REMOVE_ITEM: 'REMOVE_ITEM',
  CART_TOTAL: 'CART_TOTAL',
  CLEAR_CART: 'CLEAR_CART',
  FILL_CART: 'FILL_CART',
  START_LOADING: 'START_LOADING',
  STOP_LOADING: 'STOP_LOADING',
  LOAD_PRODUCTS: 'LOAD_PRODUCTS',
  CHANGE_QUANTITY: 'CHANGE_QUANTITY',
}

export const reducer = (state = initialState, action) => {
  // const stateCopy = _.cloneDeep(state)
  if (action.type === actions.INCREASE_QUANTITY) {
    const updatedProducts = [...state.products].map((product) => {
      if (product.id === action.payload) {
        // deepcopying the individual array item here
        return {
          ...product,
          quantity: product.quantity + 1,
        }
      }
      return product
    })

    return {
      ...state,
      products: updatedProducts,
    }
  }

  if (action.type === actions.DECREASE_QUANTITY) {
    const updatedProducts = [...state.products]
      .map((product) => {
        if (product.id === action.payload) {
          return {
            ...product,
            quantity: product.quantity - 1,
          }
        }
        return product
      })
      .filter((product) => product.quantity !== 0) // this filter actually filters the products whose quantity became 0 (less than 1) and hence removes it from the list

    return {
      ...state,
      products: updatedProducts,
    }
  }

  // INCREASE_QUANTITY AND DECREASE_QUANTITY LOOKS SIMILAR SO LET'S COMBINE THEM HERE
  if (action.type === actions.CHANGE_QUANTITY) {
    const updatedProducts = [...state.products]
      .map((product) => {
        if (product.id === action.payload.productId) {
          return {
            ...product,
            quantity:
              action.payload.type === 'increase'
                ? product.quantity + 1
                : product.quantity - 1,
          }
        }
        return product
      })
      .filter((product) => product.quantity !== 0) // this filter actually filters the products whose quantity became 0 (less than 1) and hence removes it from the list

    return {
      ...state,
      products: updatedProducts,
    }
  }
  if (action.type === actions.CART_QUANTITY) {
    return {
      ...state,
      numberOfCartItems: action.payload,
    }
  }

  if (action.type === actions.REMOVE_ITEM) {
    const updatedProducts = [...state.products].filter(
      (product) => product.id !== action.payload
    )
    return {
      ...state,
      products: updatedProducts,
    }
  }
  if (action.type === actions.CART_TOTAL) {
    return {
      ...state,
      cartTotalAmount: action.payload,
    }
  }
  if (action.type === actions.CLEAR_CART) {
    return {
      ...state,
      products: [],
    }
  }
  if (action.type === actions.FILL_CART) {
    return {
      ...state,
      products: initialState.products,
    }
  }
  if (action.type === actions.START_LOADING) {
    return {
      ...state,
      loading: true,
    }
  }
  if (action.type === actions.STOP_LOADING) {
    return {
      ...state,
      loading: false,
    }
  }
  if (action.type === actions.LOAD_PRODUCTS) {
    return {
      ...state,
      products: action.payload,
      loading: false,
    }
  }
  throw new Error('No actions matched')
}
