# Project details

[Random User Generator](https://17-random-user.netlify.app/)

## Details

We will use [random user](https://randomuser.me/) API to display random user. We will show name, email and so on.

## Things we can learn

- How to set state when hovered on a element
- How to use same handler function when for different input values? (This can also be done for form values)

---

### How to use same handler function when for different button values? (This can also be done for form values, but for input values, refer the 23-Quiz project)

When we hover(mouse over) on icons, we need to set the values.

```jsx
<div className="values-list">
  {/* when hovered on - onMouseOver */}
  <button className="icon" data-label="name" onMouseOver={handleValue}>
    <FaUser />
  </button>
  <button className="icon" data-label="email" onMouseOver={handleValue}>
    <FaEnvelopeOpen />
  </button>
  <button className="icon" data-label="age" onMouseOver={handleValue}>
    <FaCalendarTimes />
  </button>
  <button className="icon" data-label="street" onMouseOver={handleValue}>
    <FaMap />
  </button>
  <button className="icon" data-label="phone" onMouseOver={handleValue}>
    <FaPhone />
  </button>
  <button className="icon" data-label="password" onMouseOver={handleValue}>
    <FaLock />
  </button>
</div>
```

You can see that we are using the same function called `handleValue`, so what differentiates each button is the `data-label`. Using `data-label` we can set different things in `handleValue` function.

To access the `data-something`, we can do this inside `handleValue` function - `e.target.dataset.something`. So in this case it would be `e.target.dataset.label`

**`handleValue`**

```js
const handleValue = (e) => {
  // When hovered on a button, we see it's svg as well, so we only need this function to take place when button (containing class icon) is hovered
  if (e.target.classList.contains('icon')) {
    const newValue = e.target.dataset.label
    setTitle(newValue)
    setValue(person[newValue])
  }
}
```

**NOTE:** Here we have used data-label since it is a button. For the inputs however, since `input` has name prop on that, we could use that `name` and use `e.target.name` to dynamically get the inputs and change their state in a single handler function, so that we could have same handler function for multiple inputs. For more details about this, refer [23_Quiz_app]()

---
