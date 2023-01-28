import React from 'react'
import styled from 'styled-components'
import { useAuth0 } from '@auth0/auth0-react'

const Navbar = () => {
  // using isLoading and error just to show how they look here. Later we will use wrapper as told in step 32 heading.
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading, error } =
    useAuth0()

  console.log({ isAuthenticated, user, isLoading, error })

  const isUser = isAuthenticated && user

  if (isUser) {
  }

  return (
    <Wrapper>
      {isUser && user.picture && <img src={user.picture} alt={user.name} />}
      {/* just an extra step of checking for user.name. It is obvious that it will be available but still want to be safer */}
      {isUser && user.name && (
        <h4>
          Welcome <strong>{user.name.toUpperCase()}</strong>
        </h4>
      )}

      {isUser ? (
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          {/* for logout, we need to say where we need to go back to after logging out  */}
          Logout
        </button>
      ) : (
        <button onClick={loginWithRedirect}>Login</button>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  padding: 1.5rem;
  margin-bottom: 4rem;
  background: var(--clr-white);
  text-align: center;
  display: grid;
  grid-template-columns: auto auto 100px;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  h4 {
    margin-bottom: 0;
    font-weight: 400;
  }
  img {
    width: 35px !important;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
  }
  button {
    background: transparent;
    border: transparent;
    font-size: 1.2rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
`

export default Navbar
