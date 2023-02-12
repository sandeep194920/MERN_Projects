import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import { useCartContext } from '../context/cart_context'
import AmountButtons from './AmountButtons'

const AddToCart = ({ product }) => {
  const { id, stock, colors } = product
  // state values to display selected color of the product. We can keep the state here as it is local to the product and don't need to bring it from the context
  const [mainColor, setMainColor] = useState(colors[0]) // setting first color as main color

  // state to keep track of selected number of items in cart
  const [amount, setAmount] = useState(1) // By default no sense in having 0 items so let's do 1

  // Since cart increase and decrease are local to this component, let's add handler functions here and pass them one level down into AmountButtons component
  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1
      // check if amount increased is in stock or not
      if (tempAmount > stock) {
        tempAmount = stock
      }
      return tempAmount
    })
  }

  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1
      // check if amount increased is in stock or not
      if (tempAmount < 1) {
        tempAmount = 1
      }
      return tempAmount
    })
  }

  return (
    <Wrapper>
      <div className="colors">
        <span>colors : </span>
        <div>
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                // adding active class on selected button. All buttons by default have 0.5 opacity, but active class has opacity of 1. Check css below in this file
                className={`color-btn ${mainColor === color && 'active'}`}
                style={{ backgroundColor: color }}
                onClick={() => setMainColor(color)}
              >
                {mainColor === color && <FaCheck />}
              </button>
            )
          })}
        </div>
      </div>
      <div className="btn-container">
        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
        <Link to="/cart" className="btn">
          add to cart
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`
export default AddToCart
