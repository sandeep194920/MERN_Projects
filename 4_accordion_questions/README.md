# Project details

[Accordion App](https://4-accordion-questions-app.netlify.app/)

- This project is about Accordion questions. Generally you will see this on a website in FAQs section

## What you will learn?

1. What is MUI's CSSBaseline?
2. sx vs style prop. On our components we can use both sx and style prop. Then what's the difference between these two.
3. CSS transition can't be applied to display prop.
4. How to do some transition in react.
5. How to set open one accordion while closing everything else?
6. How to use Hidden component of MUI?

#### CSSBaseline

- CSSBaseline is a css preset. It's as good as writing defaults like this in index.css

```css
*,
::after,
::before{
    margin:0,
    padding:0,
    box-sizing:border-box
    /* And many more defaults */
}
```

If we include CSSBaseline in our App component, it provides all these defaults out of the box.

- CSSBaseline is a utility provided by MUI where you need `@mui/System` installed for this to work

#### sx vs style

While using style, we cannot make use of the properties provided by MUI. For example, if we need to write media queries for different breakpoints then

- in sx prop, we can use `[theme.breakpoints.up('md')] : {}`
- but in style prop, this doesn't work

[Refer my Stackoverflow Answer for sx vs style](https://stackoverflow.com/a/73768249/10824697)

#### CSS transition can't be applied to display prop

- I was trying to create some transition effect when showing and hiding the accordion answers. For this I tried to apply transition on display prop, but that doesn't work.

transition doesn't work for dipslay prop

```js
// This transition applied on showAnswer doesn't work
    showAnswer: {
      background: theme.palette.background.light,
      border: `0.5px solid ${theme.palette.primary.main}`,
      borderRadius: '0 0 3px 3px',
      padding: '1rem',
      marginBottom: '1rem',
      transition:'display 0.4s' // not working, so I removed this
    },
    hideAnswer: {
      display: 'none', // we are not addition transition effect because transition doesn't work on display prop. We will try to add transition in some other project if possible
    },
    qIcon: {
      cursor: 'pointer',
    },
```

#### How to do some transition in react?

- We could do it with css like we generally do, but note that display doesn't work as explained below
- The other option would be to use [React Transition Group library](https://reactcommunity.org/react-transition-group/)

#### How to set open one accordion while closing everything else?

- Let's understand with our code
- `Questions` -----> calls -----> `Question` array
- We have `selected` state that's passed as prop to `Question`. In `Questions`, We are mapping `Question` array so while doing so, we can check if selected is the current and then if yes, we can set `showAccordion` prop

```js
// Questions.js

const [selected, setSelected] = useState(null)

{
  questionSet.map((quest) => {
    /* Each item below is the question */
    return (
      <Question
        key={quest.id}
        {...quest}
        accordionHandler={accordionHandler}
        showAccordion={selected === quest.id}
      />
    )
  })
}
```

```js
// Question.js

<Grid
  item
  xs={11}
  //   OLD implementation where all acccordions were expanding
  //   sx={showAnswer ? questionStyle.showAnswer : questionStyle.hideAnswer}

  //   NEW implementation where only selected acccordion will expand
  sx={showAccordion ? questionStyle.showAnswer : questionStyle.hideAnswer}
>
  <Typography>{answer}</Typography>
</Grid>
```

#### How to use Hidden component of MUI?

```js
<Hidden lgDown>
  // This hides anything present here when reached lower than large screen
</Hidden>
```

###### App Idea came from following apps

For header and colors - [Slack](https://slack.com/)
For accordion - [Netflix](https://www.netflix.com/ca/)
