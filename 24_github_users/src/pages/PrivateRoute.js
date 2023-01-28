import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

const PrivateRoute = ({ children, ...rest }) => {
  const isUser = false // we will later get this from auth0
  console.log('rest is', rest) // this will be exact and path that we passed into private route
  return (
    <Route
      {...rest}
      render={() => {
        return isUser ? children : <Redirect to="/login" />
      }}
    />
  )
}
export default PrivateRoute
