import React from 'react'
import Background from './Background'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useGlobalContext } from './context'

function Header() {
  const { openSidebar } = useGlobalContext()
  return (
    // NAVBAR
    <>
      {/* BACKGROUND  */}
      <div className="gradient-background">
        <Background angle={20.65} />
      </div>
      <nav>
        <div className="nav-container">
          <div className="logo">
            <h3>stripe</h3>
          </div>
          <ul>
            <li>products</li>
            <li>solutions</li>
            <li>developers</li>
            <li>resources</li>
            <li>pricing</li>
          </ul>
          <button className="signin-btn">Sign in</button>
          <button onClick={openSidebar} className="menu-btn">
            <GiHamburgerMenu />
          </button>
        </div>

        {/* Hero Text, Title Text and Start Buttons */}
        <div className="header-container">
          {/* flex item 1 */}
          <div className="header-text-container">
            <h1>
              Payments
              <br />
              infrastructure
              <br />
              for the internet
            </h1>

            <div className="title">
              Millions of businesses of all sizes—from startups to large
              enterprises—use Stripe's software and APIs to accept payments,
              send payouts, and manage their businesses online.
            </div>

            <div className="btn-container">
              <button className="start-btn">Start now</button>
              <button className="contact-sales-btn">Contact Sales</button>
            </div>
          </div>

          {/* flex item 2 */}
          <div className="img-container">
            <div className="phone-images">
              <img
                className="iphone-image"
                src="./images/iphone.svg"
                alt="iphone"
              />
              <img
                className="stripe-image"
                src="./images/stripe_img.png"
                alt="stripe"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
