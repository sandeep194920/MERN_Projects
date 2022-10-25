# Project details

### We are using

- Typescript in this project
- CSS modules (Not Material UI)

### We we will learn

- How to install TypeScript create-react-app
- How to use CSS variables
- How to use CSS modules
- section vs article. When to use one over another?

### How to install TypeScript create-react-app

To create a new folder inside which cra ts app exists, then use

```
npx create-react-app my-app --template typescript
```

If you already have created a folder inside which you need to have your app then use

```
npx create-react-app . --template typescript
```

If you use second command to unpack your files inside the created folder then make sure your folder should have all small case letters.

---

### How to use CSS variables

I am using CSS variables in `index.css` file like this

```css
:root {
  --main-bg: azure;
  --sub: black;
}
```

Then I can use this in **ANY** CSS file like this

```css
.appContainer {
  background-color: var(--main-bg);
}
```

---

### How to use CSS modules

Create a css file like this `something.module.css`. Make sure the css file ends with extension `module.css`.

**`App.module.css`**

```css
.appContainer {
  background-color: var(--sub);
}
```

**`App.tsx`**

```js
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.appContainer}>
      <h1>Slider Reviews</h1>
    </div>
  )
}
```

---

### section vs article. When to use one over another?
