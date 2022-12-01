# Project details

[Shopping Cart]()

## Details

A simple shopping cart where we can add/remove an item to/from the cart and also increase the quantity of the product in the cart. We can also delete items and clear the cart.

## Things we can learn

- How to add text to material ui icon

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
