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
    // {
    //   reviewId: 1,
    //   data: `1. Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //     Perspiciatis blanditiis rerum, delectus laborum adipisci aliquid,
    //     omnis fugiat, corrupti asperiores dolorem magni? Animi, obcaecati`,
    // },
    // {
    //   reviewId: 2,
    //   data: `1. Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //     Perspiciatis blanditiis rerum, delectus laborum adipisci aliquid,
    //     omnis fugiat, corrupti asperiores dolorem magni? Animi, obcaecati`,
    // },
  ]
  const [move, setMove] = useState<string | null>(null)

  const rightHandler = () => {
    console.log('righthandler')
    setMove('right')
  }

  const leftHandler = () => {
    console.log('left')
    setMove('left')
  }

  let reviewContainerStyle = [styles.reviewContainer]

  //   useEffect(()=>{

  //   },[])
  console.log(reviewContainerStyle.join(' '))
  if (move === 'right') {
    reviewContainerStyle = reviewContainerStyle.filter(
      (style) => style !== styles.left
    )
    reviewContainerStyle.push(styles.right)
    console.log('moving right')
    console.log(reviewContainerStyle)
  } else if (move === 'left') {
    reviewContainerStyle = reviewContainerStyle.filter(
      (style) => style !== styles.right
    )
    reviewContainerStyle.push(styles.left)
    console.log('moving left')
  }

  return (
    <article>
      <div className={styles.row}>
        {reviews.map((review) => {
          return (
            <article
              className={reviewContainerStyle.join(' ')}
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
