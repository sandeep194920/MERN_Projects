const { nanoid } = require('nanoid')

const products = [
  {
    id: nanoid(12), // generates a random ID of 12 characters
    name: 'Samsung Galaxy S8',
    price: 399.99,
    img: './products/phone1.png',
    quantity: 1,
  },
  {
    id: nanoid(12), // generates a random ID of 12 characters
    name: 'Google Pixel',
    img: './products/phone2.png',
    price: 499.99,
    quantity: 1,
  },
  {
    id: nanoid(12), // generates a random ID of 12 characters
    name: 'Xiaomi Redmi Note 2',
    img: './products/phone3.png',
    price: 599.99,
    quantity: 1,
  },
  {
    id: nanoid(12), // generates a random ID of 12 characters
    name: 'Samsung Galaxy S7',
    img: './products/phone4.png',
    price: 699.99,
    quantity: 1,
  },
]

module.exports = products
