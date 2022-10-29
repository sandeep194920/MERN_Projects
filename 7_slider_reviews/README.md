# Project details

[Slider Reviews App](https://7-review-slider.netlify.app/)

- How to create a create-react-app project with TypeScript?
- High level project steps
- How to center an image
- Automatic slides without button click (How useEffect cleanup function works)?
- Why to use `rebase` over `merge` when merging main branch into feature branch?

### How to create a create-react-app project with TypeScript?

If you are in a parent folder and run this command `npx create-react-app my-app --template typescript` then a child folder called `my-app` will be created and inside that the project files will exist.

If you directly want the project files to exist inside your parent folder and don't want a new child folder (my-app), then run `npx create-react-app . --template typescript`

---

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

---

### How to center an image

Just like text centering, with `text-align:center`, we could also do the same for images. [Refer my codepen example here](https://codepen.io/sandeepamarnath/pen/jOKOQGb)

---

### Automatic slides without button click (How useEffect cleanup function works)?

We have implemented automatic slides where, after 4 seconds, the slides moves to right by itself if we don't click the right button. We do this using `useEffect with a cleanup function`

So, let's understand how this works in two steps

- How `useEffect cleanup` function works?
- How did we implement this automatic slides using `useEffect cleanup`?

#### How `useEffect cleanup` function works?

[See this demo to understand](https://codesandbox.io/s/agitated-gianmarco-nmm586?file=/src/App.js)

```jsx
export default function App() {
  const [val, setVal] = useState(9)
  useEffect(() => {
    console.log('Running useEffect')
    return () => {
      console.log('cleaning up previous effect')
    }
  }, [val])

  return (
    <div className="App">
      <h1>Value - {val}</h1>
      <button onClick={() => setVal((pre) => pre + 1)}>+</button>
    </div>
  )
}
```

- When app loads initially, the useEffect is run so it prints `Running useEffect`. BUT (when app loads initially) the cleanup function WILL NOT RUN, hence you don't see console log `cleaning up previous effect`
- When `+` button is clicked, val changes (and val is a depenedency in our useEffect) so useEffect runs again. This time, the cleanup function runs first before the `Running useEffect` and cleansup the previous `useEffect` residues, and THEN RUNS `Running useEffect`.
- Also, the cleanup function runs once the component is unmounted (some other component is shown on the screen)
- So to summarize this, the cleanup function runs in two cases
  - Doesn't run first time when page loads, but runs next time when useEffect is triggered to cleanup the previously run useEffect
  - It also runs when the component is removed from the DOM / unmounted (when some other component is shown on screen)

Ok, with this understanding, let's now look at how to implement this auto slider

#### How did we implement this automatic slides using `useEffect cleanup`?

```js
// automatically move slides after 4 seconds (4000ms) if right btn are is clicked

useEffect(() => {
  // UseEffect MAIN CODE
  const interval = setInterval(() => {
    setActivePerson((prev) => {
      if (prev === 0) return people.length - 1
      return prev - 1
    })
  }, 4000)

  // CLEANUP FUNCTION
  return () => {
    clearInterval(interval)
  }
}, [activePerson])
```

We have two parts in our `useEffect` -> `MAIN CODE` and a `CLEANUP FUNCTION`.

- First time the page loads, we know the `cleanup` is not run, only the `main code` runs. Hence a new `interval` due to setInterval is created
- After 4 seconds, the code within setInterval exectues, thus
  - Active slide is moved to right
  - `activePerson` state is updated which will trigger this `useEffect` hook again
- Now we have `useEffect` hook triggered again, this time the `cleanup` function runs first hence removes the previously completed interval. After the `cleanup` function is done, the `main code` is run setting a new `interval`, and after 4s the `activePerson` is updated again making the hook to re-run
- Let's say, the useEffect hook runs again, cleans up previous `interval` and `main code` is run, waited for 2 seconds thinking that, after 2 more seconds, I can update the `activePerson` which will move the slide to right. But during the 3rd second, the user manually click the right button.
  - On manually clicking right button, the `activePerson` got updated, thus this `useEffect` re-ran again at 3rd second. The `cleanup` function is ran, and that clears the active `interval` (from previous `useEffect` call) which had run for only 3 seconds, thus not letting it to complete 4 seconds, and then the `main code` is run which will create a new interval again (it didn't let old interval to complete which had finished 3 seconds).

---

### Why to use `rebase` over `merge` when merging main branch into feature branch?

I was using `git merge master` into my feature branch, but rebase would be better because of [this reason](https://stackoverflow.com/a/64319712/10824697)
