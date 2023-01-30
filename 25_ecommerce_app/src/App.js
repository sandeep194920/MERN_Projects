import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import {
  About,
  AuthWrapper,
  Cart,
  Checkout,
  Error,
  Home,
  PrivateRoute,
  Products,
  SingleProduct,
} from './pages'

function App() {
  return (
    <Router>
      {/* Display Navbar & Sidebar in all pages, so it's placed outside of <Switch/> */}
      <Navbar />
      <Sidebar /> {/*Sidebar is position fixed so can be put in any order*/}
      <Switch>
        {/* Home */}
        <Route exact path="/">
          <Home />
        </Route>

        {/* About */}
        <Route exact path="/about">
          <About />
        </Route>

        {/* Cart */}
        <Route exact path="/cart">
          <Cart />
        </Route>

        {/* Products */}
        <Route exact path="/products">
          <Products />
        </Route>

        {/* SingleProduct -> This would be little different as it would have a children prop*/}
        <Route exact path="/products/:id" children={<SingleProduct />} />

        {/* Checkout -> This would be wrapped in PrivateRoute later */}
        <Route exact path="/checkout">
          <Checkout />
        </Route>

        {/* Error */}
        <Route exact path="*">
          <Error />
        </Route>
      </Switch>
      {/* Display footer in all pages, so it's placed outside of <Switch/> */}
      <Footer />
    </Router>
  )
}

export default App
