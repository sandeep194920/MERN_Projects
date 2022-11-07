import React, { useEffect, useState } from 'react'
import people from './data'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'

function SliderUsingHandlerFunctions() {
  const [activePerson, setActivePerson] = useState(0)

  const leftHandler = () => {
    setActivePerson((prev) => {
      if (prev === people.length - 1) {
        return 0
      }
      return prev + 1
    })
  }

  const rightHandler = () => {
    setActivePerson((prev) => {
      if (prev === 0) return people.length - 1
      return prev - 1
    })
  }
  // automatically move slides after 4 seconds (4000ms) if right btn are is clicked
  useEffect(() => {
    const interval = setInterval(() => {
      rightHandler()
    }, 4000)

    return () => {
      clearInterval(interval)
    }
  }, [activePerson])

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span> / </span> reviews
        </h2>
      </div>

      <div className="section-center">
        {people.map((person, personIndex) => {
          // Every slide initially will be placed at -100% (prevSlide) left side of active slide.

          let position = 'prevSlide'
          if (personIndex === activePerson) position = 'activeSlide'
          // if personIndex will be the last index then there will be no more slides to its right side (if active slide is the last slide). To place 0th slide as next slide to active slide when last slide is the active slide then we can use this trick
          if (
            personIndex === activePerson + 1 ||
            // (personIndex === 0 && personIndex !== activePerson)
            (activePerson === people.length - 1 && personIndex === 0)
            // both commented and uncommented code works
          )
            position = 'nextSlide'

          const { id, image, name, title, quote } = person
          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <div className="quote">
                <p>{quote}</p>
                <FaQuoteRight className="quoteIcon" />
              </div>
            </article>
          )
        })}
        <button className="prevBtn" onClick={leftHandler}>
          <FiChevronLeft />
        </button>
        <button className="nextBtn" onClick={rightHandler}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}

export default SliderUsingHandlerFunctions
