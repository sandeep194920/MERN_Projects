import React, { useState } from 'react'
import Background from './Background'
import { FaAngleRight, FaLongArrowAltRight } from 'react-icons/fa'
function Navbar() {
  const [hovered, setHovered] = useState(false)

  return (
    <nav>
      <div className="navbar-container">
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
        <button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          Sign in
          {hovered ? (
            <FaLongArrowAltRight className="icon" />
          ) : (
            <FaAngleRight className="icon" />
          )}
        </button>
      </div>

      <div className="gradient-background">
        <Background angle={20.65} />
      </div>

      <div>
        <h1>
          Payments
          <br />
          infrastructure
          <br />
          for the internet
        </h1>
        <div className="title-container">
          <p>
            Millions of businesses of all sizes—from startups to large
            enterprises—use Stripe's software and APIs to accept payments, send
            payouts, and manage their businesses online.
          </p>
          <div className="btn-container">
            <button
              className="start"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              Start now
              {hovered ? (
                <FaLongArrowAltRight className="icon" />
              ) : (
                <FaAngleRight className="icon" />
              )}
            </button>

            <div className="btn-container">
              <button
                className="contact"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                Contact Sales
                {hovered ? (
                  <FaLongArrowAltRight className="icon" />
                ) : (
                  <FaAngleRight className="icon" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="image-container">
        <img className="iphone-img" src="./images/iphone.svg" alt="iphone" />
        <img
          className="stripe-img"
          src="./images/stripe_img.png"
          alt="stripe"
        />
      </div>
    </nav>
  )
}

export default Navbar
