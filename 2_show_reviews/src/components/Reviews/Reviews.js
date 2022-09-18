/** @jsxImportSource @emotion/react */
import { useState } from 'react'
import people from '../../utils/data'
import { reviewStyles } from './reviewsStyle'
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'
import { FaQuoteRight } from 'react-icons/fa'

function Reviews() {
  const [personIndex, setPersonIndex] = useState(0)

  const reviewHandler = (direction = 'random') => {
    if (direction === 'left') {
      setPersonIndex((index) => {
        if (index === 0) {
          return people.length - 1
        } else {
          return index - 1
        }
      })
    } else if (direction === 'right') {
      setPersonIndex((index) => {
        if (index === people.length - 1) {
          return 0
        } else {
          return index + 1
        }
      })
    } else {
      let random = Math.floor(Math.random() * people.length)
      // this always ensures that the previous person is not the current person
      while (random === personIndex) {
        random = Math.floor(Math.random() * people.length)
      }
      setPersonIndex(random)
    }
  }

  return (
    <div>
      <article css={reviewStyles.reviewContainer}>
        <div css={reviewStyles.imageContainer}>
          <img src={people[personIndex].avatar} alt="person1" />
          <div css={reviewStyles.imageContainer.quoteIcon}>
            <FaQuoteRight color="white" />
          </div>
        </div>
        <h4>{people[personIndex].name}</h4>
        <h6>{people[personIndex].job}</h6>
        <br />
        <p>{people[personIndex].description}</p>
        <div css={reviewStyles.buttonContainer}>
          <BsArrowLeftCircle
            onClick={() => reviewHandler('left')}
            size={'1.5rem'}
          />
          <button onClick={() => reviewHandler()}>Random Review</button>

          <BsArrowRightCircle
            onClick={() => reviewHandler('right')}
            size={'1.5rem'}
          />
        </div>
      </article>
    </div>
  )
}

export default Reviews
