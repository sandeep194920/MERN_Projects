# Project details

[Cocktails Search](https://13-stripe-header-clone.netlify.app/)

## Details

We will design stripe home page mainly we will focus on navbar where we have a nice drop-down for each nav link

## Things we can learn

- How the components are arranged since we are using react router?
- How to design a simple navbar (with a logo to the left and links to the right)?
- Which external API are we using?
- How to fetch cocktail API?

---

### How the components are arranged since we are using react router?

Since we are using react-router now, we use a pages folder and put all page components (pages) into that folder. Technically we could have added it in components folder itself, but this is a good practice so don't get confused.

**Folder structure**

- components - Have components like `Navbar`, `Loading` and so on
- pages - Have different page components like `Home`, `Error` and so on.

---

### How to design a simple navbar (with a logo to the left and links to the right)?

![navbar-image](./readmeImages/navbar.png)

**JSX**

```js
<nav className="navbar">
  <div className="nav-center">
    <Link to="/">
      <img src={logo} alt="cock-tail-db-logo" />
    </Link>
    <ul className="nav-links">
      <li>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </div>
</nav>
```

**CSS**

```css
/* 
====== 
Navbar
======
*/
.navbar {
  background: var(--mainWhite);
  height: 5rem;
  display: flex;
  align-items: center;
  border-bottom: 2px solid var(--primaryColor);
  box-shadow: var(--lightShadow);
}
.nav-center {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: var(--smallWidth);
  margin: 0 auto;
  max-width: var(--fullWidth);
}
.nav-links {
  display: flex;
  align-items: center;
}
.nav-links a {
  text-transform: capitalize;
  display: inline-block;
  font-weight: bold;
  margin-right: 0.5rem;
  font-weight: 400;
  letter-spacing: 2px;
  font-size: 1.2rem;
  padding: 0.25rem 0.5rem;
  transition: var(--mainTransition);
}
.nav-links a:hover {
  color: var(--primaryColor);
}
.logo {
  width: 12rem;
}
```

---

### Which external API are we using?

- We use [Cocktail DB API](https://www.thecocktaildb.com/api.php) for this project
- This API doesn't need API key, so we can directly use it without any extra setup
- We use two API links
  - [Search cocktail by name](www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita) - `www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita` - to display all cocktails with the name
  - [Lookup full cocktail details by id](www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007) - `www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007` - to display details of one single cocktail once we click on a cocktail

---
