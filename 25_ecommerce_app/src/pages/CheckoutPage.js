import React from 'react'
import styled from 'styled-components'
import { PageHero, StripeCheckout } from '../components'
// extra imports
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
  return (
    <main>
      <PageHero title="checkout" />
      <Wrapper className="page">
        <h3>Checkout here (Will work on this later)</h3>
      </Wrapper>
    </main>
  )
}
const Wrapper = styled.div``
export default CheckoutPage
