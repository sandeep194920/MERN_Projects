import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { GithubProvider } from './context/context'
import { Auth0Provider } from '@auth0/auth0-react'

const root = ReactDOM.createRoot(document.getElementById('root'))
// We could have added domain and clientId inside .env file, but just leaving it here for now
root.render(
  <Auth0Provider
    domain="dev-5wz2wjfk.us.auth0.com"
    clientId="HmN3Dr40ZmjzNP69NxfbuIe9Y1ceMeSp"
    redirectUri={window.location.origin}
  >
    <GithubProvider>
      <App />
    </GithubProvider>
  </Auth0Provider>
)

{
  /* <React.StrictMode>

</React.StrictMode> */
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
