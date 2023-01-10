# Project details

[Shopping Cart](https://14-shopping-cart.netlify.app/)

## Details

A simple shopping cart where we can add/remove an item to/from the cart and also increase the quantity of the product in the cart. We can also delete items and clear the cart.

## Things we can learn

- How to add text to material ui icon
- How to update a reducer state (deep copy)
- In reducer, we have to subtract item's quantity and if it reaches 0, we need to remove from the list
- How to calculate single number(like sum) from an array using reduce function
- How to use useReducer hook (will be helpful for redux section as well)

### How to add text to material ui icon

We are using material icon and this is how I did it

**Header.js**

```jsx
<Grid item>
  <div style={styles.cart}>
    <div style={styles.ShoppingCartContent}>9</div>
    <ShoppingCartIcon color="secondary" fontSize="large" />
  </div>
</Grid>
```

```js
cart: {
    position: 'relative',
  },
  ShoppingCartContent: {
    color: '#14213d',
    position: 'absolute',
    left: '18px',
    top: '20px',
    background: 'white',
    borderRadius: '20px',
    width: '1.8rem',
    height: '1.8rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '1.2rem',
  },
```

---

### How to update a reducer state (deep copy)

Let's say I have a state like this

```js
state = {
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
```

And I want to update quantity of any product on a button click, then first of all, you need to deep copy the state in order to update an item or an item's property(in this case - quantity)

Deep copy here means, copying state -> products -> and all individual array items

**Mistake I did in deep copy because of which I had inconsitent state updates**

I did this initially and I had to spend a lot of time debugging it.
Inside reducer I did this initially which didn't work.

```js
const reducer = (state = initialState, action) => {
  if (action.type === actions.INCREASE_QUANTITY) {
    // here I am shallow copying products as I am not copying the individual products (each object inside products array is not deep copied so it will still point to original item)
    const updatedProducts = [...state.products].map((product) => {
      // I mean, this product (array item object) is still pointing to original as this is not deep copied.
      if (product.id === action.payload) {
        product.quantity += 1
      }
      return product
    })

    return {
      ...state,
      products: updatedProducts,
    }
  }
}
```

Because of the problem mentioned in the comments in above code block (product is not deep copied) I had quantity of a product incremented by 2 when I wanted it to increment by 1

**How I solved this**

I could solve this in 2 ways

1. First deepcopy the entire state->product object that includes deepcopy of each product object in products array using lodash (this could also be done manually without using lodash)

```js
import _ from 'lodash'

const reducer = (state = initialState, action) => {
  const stateCopy = _.cloneDeep(state) // first deep copying the state. This includes deep copying everything inside state
  if (action.type === actions.INCREASE_QUANTITY) {
    const updatedProducts = stateCopy.products.map((product) => {
      if (product.id === action.payload) {
        product.quantity += 1 // this is now altering the copy and not original
      }
      return product
    })
    return {
      ...state,
      products: updatedProducts,
    }
  }
}
```

2. Deepcopy the product (array item) as you map through array items (**My preferred way**) without lodash or any other deepcopy technique. First we will shallow copy only state->products, map through the shallow copy array and then inside map, deep copy individual item and then return it as shown.

```js
const reducer = (state = initialState, action) => {
  // const stateCopy = _.cloneDeep(state)
  if (action.type === actions.INCREASE_QUANTITY) {
    // first we will shallow copy only the products inside state.
    const updatedProducts = [...state.products].map((product) => {
      if (product.id === action.payload) {
        // deepcopying the individual array item (each product object inside products) here
        return {
          ...product,
          quantity: product.quantity + 1,
        }
      }
      return product
    })
  }
}
```

This way, I don't have to worry about doing a deepcopy at the beginning like in technique 1, and I can deepcopy as I iterate the products array inside map.

**Tip**: With my wrong implementation (without deepcopy in any way), if I remove react strict mode, then it works fine so don't ever remove react strict mode. We might falls into traps where we do something wrong but react will not be able to help us catch those bugs if we comment it out. Note that with react strict mode, you will see a few things twice in console as the component, unmounts and mounts itself. To know more about react strict mode, [see this](https://www.youtube.com/watch?v=XUwzASyHr4Q&t=544s)

---

### In reducer, we have to subtract item's quantity and if it reaches 0, we need to remove from the list

In this project there is a scenario where we click on `-` sign and quantity of product decreases. If we need to remove that product from the list once the quantity becomes 0, we can do this

```js
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
```

This is same as doing

```js
let updatedProducts = [...state.products].map((product) => {
  if (product.id === action.payload) {
    return {
      ...product,
      quantity: product.quantity - 1,
    }
  }
  return product
})

updatedProducts = updatedProducts.filter((product) => product.quantity !== 0)
```

---

### How to calculate single number(like sum) from an array using reduce function

**Example 1** - To calculate quantity of all objects

```js
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
```

**Example 2** - To calculate cart total

```js
// calculates cart total
useEffect(() => {
  const cartTotal = state.products.reduce((acc, product) => {
    return acc + product.quantity * product.price
  }, 0)
  dispatch({ type: actions.CART_TOTAL, payload: cartTotal })
}, [state.products])
```

---

### How to use useReducer hook (will be helpful for redux section as well)

In `context.js` (file where we use `useReducer`) we pass `reducer and initialState` to `useReducer`

```js
const [state, dispatch] = useReducer(reducer, initialState)
```

`useReducer` will give us `state` that can be used in any component, and `dispatch` that will be used to update the state (similar to setState). `dispatch` will dispatch an action that should be defined inside the reducer.

`useReducer` hook implementation in detail is explained in [22_news_search project](https://github.com/sandeep194920/React_MUI_Express_Projects/tree/22_news_search/22_news_search#how-to-implement-basic-usereducer-hook)
