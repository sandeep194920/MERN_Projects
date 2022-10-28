https://codepen.io/sandeepamarnath/pen/jOKOQGb

# Project details

- High level project steps

### High level project steps

- Make a div (`.section-center` class) with fixed height and width and put it to center, and make is div `position : relative` and `display : flex`. Relative position because the child (each review) will be absolute. Flex because, each child will be next to each other in row
  - **Note** that when child is absolutely positioned, we need to add height to the parent (relative), to section-center in this case
- Inside this div, add reviews `article` (map each array element from this data) and this article will be `position:absolute` so each review will sit on top of other
- Also, each of this review is centered in the container. [Look at this to understand how to center an image or content](https://codepen.io/sandeepamarnath/pen/jOKOQGb)
- We will define these css classes. One for article -> and this is where all the css of a single review will be which is `position:absolute` as mentioned above.
  Then we will have `nextSlide`, `prevSlide`, and `activeSlide` css which will have translate props set on this. So these nextSlide moves a slide to right and prevSlide moves slide to left. activeSlide will remain in center.
- You can try adding these 3 classes `nextSlide`, `prevSlide`, and `activeSlide` in browser to each rendered `article` and you can see there are 3 slides prev, active and next side by side.
- To add this classes in code, in data mapping jsx, we give position to each slide and by default, each slide will be prevSlide sitting next to each other.

```jsx
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
        <p>{quote}</p>
      </article>
    )
  })}
</div>
```

- To control slides, we will have 2 buttons, left and right. When left btn is clicked, active slide should move to left and next slide should become active slide.
  Similarly when right btn is clicked, active slide should move to right and prev slide will become active slide.

- We can handle the left and right buttons using handler functions or useEffects. In this project, we will see both the approaches. You have 2 implementations for same functionality (one commented out).
  - `7_slider_reviews/src/SliderUsingUseEffect.tsx`
  - `7_slider_reviews/src/SliderUsingHandlerFunctions.tsx`
