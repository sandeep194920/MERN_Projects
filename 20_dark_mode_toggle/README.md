# Project details

[Dark Mode Toggle]()

## Details

This app is similar to

## Things we can learn

- How to make use of max-width and width when you want?

  - a layout, in the big screen, that should have at max 600px so it should not go beyond that
  - and when screen is shrinked, in a mobile view, it should have 90vw

- How to use `moment js` to display dates in any format easily?
- How to implement dark theme and toggle using CSS?
- Once the dark theme toggle is implemented, how can we persist on page storage using local storage?

---

### How to make use of max-width and width when you want

- a layout, in the big screen, that should have at max 600px so it should not go beyond that
- and when screen is shrinked, in a mobile view, it should have 90vw

To achieve this we can make use of `max-width` and `width` css properties.

```css
.nav-center {
  width: 90vw;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  /* to see how it looks, enable bg color*/
  /* background-color:#000; */
}
```

It means that,

- Let the container be at max `600px` (`max-width` dictates that). So even when the screen is very big, the nav-center will not exceed 600px
- But when screen is shrinked below 600px, then it still tries to be 600px max, and we don't need this. We need it to become 90% of the screen width in that case. Hence we say `width = 90vw` which controls the width of nav-center when it becomes smaller than max-width.

So the take away is,

- when screen-size is greater than defined max-width, the max-width is applied
- when screen-size is smaller than defined max-width, width is applied

Note: Opposite of max-width is min-width

min-width is used when we want the nav-center to be minimum of some width no matter in which ever screen size.

---

### How to use `moment js` to display dates in any format easily?

Let's say we want to display date in JS. If we do `new Date()`, we get `Fri Nov 22 2019 00:00:00 GMT-0500 (Eastern Standard Time)` which is not the format we want.

We want something like `Sunday 14, 2022`. This could be done in plain JS using more lines of code, but the easiest way to do it is by using a library called [moment js](https://momentjs.com/)

Install it with the command `npm install moment --save`

**How to use it?**

Let's say we have a date like this `new Date(2019, 10, 22)` and we want to convert into `Nov 22nd 19` this format

We can do

```js
import moment from 'moment'
const myDate = new Date(2019, 10, 22)
const formattedDate = moment(myDate).format('dddd Do, YYYY')
console.log(formattedDate) // gives - Nov 22nd 19
```

---

### How to implement dark theme and toggle using CSS?

In `index.css` we have `:root` that defines the css for light theme

```css
:root {
  --clr-bcg: #fff;
  --clr-font: #282c35;
  --clr-primary: #d23669;
}
```

In our react component we need to have a state (string) to define light or dark theme. If it's dark we need to apply the dark theme css that we define as below. We need to use same keys defined in `:root` but the values are going to change. We technically don't need root here as we won't use it, but we can just let it be here.

```css
/* :root {
  --clr-bcg: #fff;
  --clr-font: #282c35;
  --clr-primary: #d23669;
} */
.dark-theme {
  --clr-bcg: #282c35;
  --clr-font: #fff;
  --clr-primary: #ffa7c4;
}
.light-theme {
  --clr-bcg: #fff;
  --clr-font: #282c35;
  --clr-primary: #d23669;
}
```

Now, we need to use a state variable and based on that, we will need to add this class to HTML.

We can access HTML using `document.documentElement`, and if we want to set `className` to this, we can do this `document.documentElement.className = 'dark-theme'`

**`App.js`**

```js
function App() {
  const [theme, setTheme] = useState('light-theme')

  useEffect(() => {
    document.documentElement.className = theme
  }, [theme])

  const handleToggle = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme')
    } else {
      setTheme('light-theme')
    }
  }

  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>Dark Mode Toggle</h1>
          <button onClick={handleToggle} className="btn">
            toggle
          </button>
        </div>
      </nav>
      <section className="articles">
        {data.map((item) => {
          return <Article key={item.id} {...item} />
        })}
      </section>
    </main>
  )
}
```

![html](./readmeImages/html.png)

---

### Once the dark theme toggle is implemented, how can we persist on page storage using local storage?

We have used the local storage in our grocery storage app as well. You can refer it [here](https://github.com/sandeep194920/React_MUI_Express_Projects/tree/master/10_grocery_shop)

It has two parts,

- Retrieve theme from local storage
- Set theme to local storage

**Retrieve theme from local storage**

We can retrieve from local storage using

- A function

```js
// with function
const getSavedTheme = () => {
  let savedTheme = 'light-theme'
  if (localStorage.getItem('savedTheme')) {
    savedTheme = localStorage.getItem('savedTheme')
  }
  return savedTheme
}
```

- Without a function

```js
// without a function
const savedTheme = localStorage.getItem('savedTheme') || 'light-theme'
```

Then we use it in useState

```js
// const [theme, setTheme] = useState(savedTheme) //^ without function
const [theme, setTheme] = useState(getSavedTheme()) //* with a function
```

**Set theme to local storage**

```js
useEffect(() => {
  document.documentElement.className = theme
  localStorage.setItem('savedTheme', theme)
}, [theme])
```

Full code below

```js
/* We can retrieve saved theme using a function or without a function, just through a variable as shown below*/

// without a function
// const savedTheme = localStorage.getItem('savedTheme') || 'light-theme'

// with function
const getSavedTheme = () => {
  let savedTheme = 'light-theme'
  if (localStorage.getItem('savedTheme')) {
    savedTheme = localStorage.getItem('savedTheme')
  }
  return savedTheme
}

function App() {
  // const [theme, setTheme] = useState(savedTheme) //^ without function
  const [theme, setTheme] = useState(getSavedTheme()) //* with a function

  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem('savedTheme', theme)
  }, [theme])

  const handleToggle = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme')
    } else {
      setTheme('light-theme')
    }
  }

  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>Dark Mode Toggle</h1>
          <button onClick={handleToggle} className="btn">
            toggle
          </button>
        </div>
      </nav>
      <section className="articles">
        {data.map((item) => {
          return <Article key={item.id} {...item} />
        })}
      </section>
    </main>
  )
}

export default App
```
