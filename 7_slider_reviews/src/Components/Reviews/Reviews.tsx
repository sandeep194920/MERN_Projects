import { useEffect, useState } from 'react'
import styles from './Reviews.module.css'
function Reviews() {
  const reviews = [
    {
      reviewId: 0,
      data: `1. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Perspiciatis blanditiis rerum, delectus laborum adipisci aliquid,
        omnis fugiat, corrupti asperiores dolorem magni? Animi, obcaecati`,
    },
    {
      reviewId: 1,
      data: `1. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Perspiciatis blanditiis rerum, delectus laborum adipisci aliquid,
        omnis fugiat, corrupti asperiores dolorem magni? Animi, obcaecati`,
    },
    {
      reviewId: 2,
      data: `1. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Perspiciatis blanditiis rerum, delectus laborum adipisci aliquid,
        omnis fugiat, corrupti asperiores dolorem magni? Animi, obcaecati`,
    },
  ]
  const [move, setMove] = useState<string | null>(null)
  const [active, setActive] = useState(1)

  const rightHandler = () => {
    /* 
    Two things to be done when right btn is clicked
      * Remove left style (if already exists) and set right style, so that when right btn is clicked, the card moves right
      * Also, we need to set the next card to active so that, the next card shows up on screen hiding all inactive cards 
    */

    // move card to right
    setMove('right')
    // set next card to active. So when right is clicked, the card behind this must become active
    setActive((prev) => prev - 1)
  }

  const leftHandler = () => {
    setMove('left')
    setActive((prev) => prev + 1)
  }

  let reviewContainerStyle = [styles.reviewContainer]

  console.log(reviewContainerStyle.join(' '))
  if (move === 'right') {
    // remove left style and add right one to move this card to right
    reviewContainerStyle = reviewContainerStyle.filter(
      (style) => style !== styles.left
    )
    reviewContainerStyle.push(styles.right)
  } else if (move === 'left') {
    reviewContainerStyle = reviewContainerStyle.filter(
      (style) => style !== styles.right
    )
    reviewContainerStyle.push(styles.left)
  }

  return (
    <article>
      <div className={styles.row}>
        {reviews.map((review) => {
          return (
            <article
              className={[
                `${reviewContainerStyle.join(' ')} ${
                  review.reviewId === active && styles.active
                }`,
              ].join(' ')}
              key={review.reviewId}
            >
              {review.data}
            </article>
          )
        })}
      </div>
      <div className={styles.center}>
        {/* {/* <button onClick={() => reviewHandler('left')}>Left</button> */}
        <button onClick={leftHandler}>Left</button>
        <button onClick={rightHandler}>Right</button>
      </div>
    </article>
  )
}

export default Reviews
