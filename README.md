This repo contains `React projects` (with `Material UI`, except for a few projects) done topic wise. Each react hook will be that topic, based on which these projects are arranged.

Each project will be in its own folder and will have a detailed README that describes the concepts we learn, and some challenges we face during the project.

Some projects will have unit tests implemented to it in `React Testing Library` and we may occassionally use `Express`, and `MonogDB` to build our backend. In such projects, there will be tag/s that indicate these implementations. For example, in `1. Show Hide People` we implement unit tests, so there's a tag next to it to specify that.

## Deployed Apps

### useState Projects

1. [Show Hide People App](https://1-show-hide-people-app.netlify.app/)

- `Unit Tests implemented`
- `Shows how to deploy to netlify`

2. [Reviews App](https://2-reviews-app.netlify.app/)

- `Unit Tests implemented`
- `Emotion CSS implemented and not MUI`

3. [Accordion App](https://4-accordion-questions-app.netlify.app/)

### useEffect Projects

4. [Tours App](https://3-tours-app.netlify.app/)

- `Express API implemented`
- `Express deployed on Heroku`
- `Adding static images in react - front-end images`

5. [Menu App](https://5-menu-app.netlify.app/)

- `Unit Tests implemented`
- `Adding dynamic images in react - images from backend`

6. [Job Profile App](https://6-job-profile-app.netlify.app/)
7. [Slider Reviews App](https://7-review-slider.netlify.app/)

- `Typescript`
- `useEffect cleanup function`
- `CSS only`

8. [Text Generator](https://8-text-generator.netlify.app/)

- `useEffect cleanup function`
- `CSS only`
- `html form`

9. [Color Generator](https://9-colour-generator.netlify.app/)

- `Typescript`
- `useEffect cleanup function`
- `CSS Grid`
- `html form`

10. [Grocery Store](https://10-grocery-store.netlify.app/)

- `CRUD Functionality`
- `LocalStorage`
- `Typescript`
- `useEffect cleanup function`
- `Unique IDs`
- `Better styling structure in MUI`
- `Alert`
- `show different error/alert programmatically based on different conditions - setting alert state object`
- `Conditional styling`

### useRef Project

11. [Responsive Navbar](https://11-responsive-navbar.netlify.app/)

- `CSS only`
- `Animation effect`
- `svg-logo used`
- `getBoundingClientRect()`

### useContext Projects

12. [Sidebar & Modal](https://12-sidebar-modal-app.netlify.app/)

- `CSS only`
- `Animation effect - adding and removing class`
- `custom hook`

13. [Stripe Header](https://13-stripe-header-clone.netlify.app/)

- `CSS only`
- `flex-shrink on flex child`
- `centering tool-tip`
- `onMouseOver`
- `Center react icon`
- `useRef`
- `getBoundingClientRect()`
- `useRef`

### useReducer Projects

14. [Shopping Cart](https://14-shopping-cart.netlify.app/)

- `Add text to material icon`
- `Deep-Copy vs Shallow-Copy pitfalls`
- `React Strict mode issue - double render which is solved using deepcopy above`
- `Subtract item and also remove from list when reaches 0`
- `reduce function to calculate the sum`
- `Express API implemented`
- `Express deployed on Netlify`
- `Netlify lambda functions`
- `useContext hook`

### React Router Project

15. [Cocktail Search](https://15-cocktail-search.netlify.app/)

- `migrate react-router-5 to react-router-6 (see commits)`
- `Navbar with logo(left) and links(right)`
- `Using John's pre-prepared CSS (for this and all project below)`
- `External API - No API key required` - [API Link](https://www.thecocktaildb.com/api.php)
- `Search bar (instantly brings up items on search) with no enter button`
- `uncontrolled input using useRef - focus when component loads`
- `async function inside useEffect`
- `react-router netlify issue`
- `useCallback hook`

### Additional Projects (Include usage of External API)

16. [Markdown Preview](https://16-markdown-preview.netlify.app/)

- `react-markdown library` - [Link](https://www.npmjs.com/package/react-markdown)

17. [Random User Generator](https://17-random-user.netlify.app/)

- `External API - No API key required` - [Random user api](https://randomuser.me/api/)
- `Using same handler function for all inputs  using data label -  set state when hovered on element using data attribute on JSX`
- `e.target.classList.contains`
- `When element is hovered on functionality - onMouseOver`
- `Object destructuring from nested API response`
- `useCallback hook`

18. [Pagination on Client](https://18-pagination-on-client.netlify.app/)

- `Client side pagination`
- `External API - No API key required` - [Github users api](https://api.github.com/users/john-smilga/followers?per_page=100)
- `Array.from() to create main array and subarrays inside main array`
- `custom hook useFetch() to get the data - use it when you have repetitive code - for example fetching data from API in multiple places`
- **`This implementation could be an interview question`**
- `Conditional rendering depending on loading state`
- `Dynamically set active class CSS on clicked button`
- **`Circular Array Functionality`** - `When Previous btn is clicked, the last page is shown, and when next btn is clicked at last, first page is shown`

19. [Photos search](https://19-photos-search.netlify.app/)

- `External API - API access key required` - [photos main api](https://api.unsplash.com/photos/) &nbsp; [photo search api](https://api.unsplash.com/search/photos/)
- `Guidelines on using external API that requires API key`
- `Infinite Scroll`
- `Two flavours of fetching data when enter button is pressed on search`
- `.env file to store API keys`
- `load on scroll functionality`
- `Two URLs used - one to fetch initial data (main URL) and other one is to fetch data when user searches something (search URL). So we have if else logic in fetch`
- `Search functionality when enter button is pressed`
- `Add env variable to Netlify`
- `Rate limit - 403 error`
- `useRef to stop useEffect initial render and only call useEffect on rerender. I havent implemented this, look at John's last video of this project.`
- `useCallback hook`
- `server side pagination - get additional pages from server as we scroll`

20. [Dark mode toggle](https://20-dark-mode-toggle.netlify.app/)

- `Moment js to work with` **`dates`** `in Javascript`
- `MaxWidth and width explained - useful when you need a card of some fixed size`
- `Dark and light theme toggle using CSS`
- `Dark and light theme toggle using Material UI`
- `Local storage to persist the light/dark theme toggle`
- `Material UI - style vs sx prop`

21. [Movies search](https://21-movies-search.netlify.app/)

- `External API - API access key required` - [omdb api](https://www.omdbapi.com/)
- `migrate react-router-5 to react-router-6`
- `useContext hook - for gloabal context`
- `Quick context api state setup`
- `Show different error/alert programmatically based on different conditions - setting alert state object` - [similar to 10-grocery-store project](https://github.com/sandeep194920/React_MUI_Express_Projects/tree/master/10_grocery_shop#how-to-set-alert-programmatically-based-on-different-conditions-on-crud)
- `Search bar (instantly brings up items on search) with no enter button` [similar to 15-Cocktail-search project](https://github.com/sandeep194920/React_MUI_Express_Projects/tree/master/15_cocktail_search)
- **Gotcha** - `useEffect + useCallback infinite loop cause and resolution - explained`
- `Show different image when image from API is not available`
- `useParams hook to get the query params from the url given by react router (both v5 and v6 - same in both versions)`
- `custom hook useFetch() to get the data - use it when you have repetitive code - for example fetching data from API in multiple places - see commits - before and after useFetch hook`

22. [News Search](https://22-news-search.netlify.app/)

- `External API - No API access key required` - [hacker news algolia api](https://hn.algolia.com/api)
- `Server side pagination`
- `useContext hook - for gloabal context`
- `useReducer hook - for state management`
- `Search bar (instantly brings up items on search) with no enter button similar to` [15-Cocktail-search project](https://github.com/sandeep194920/React_MUI_Express_Projects/tree/master/15_cocktail_search) `and` [21-Movie-search project](https://github.com/sandeep194920/React_MUI_Express_Projects/tree/master/21_movies_search)
- `Delete each item functionality`
- `Use predefined variables (actions) for useReducer to avoid typos`
- `switch-case statements in reducer`
- `Open link in new tag when clicked on <a href/> tag`
- `button disabled while loading which is a good practice`
- `two flavours of implementing next and prev buttons in reducer`

23. [Quiz App]()

- `External API - No API access key required` - [open trivia database api (opentdb)](https://opentdb.com/api_config.php)
- `Generate dynamic URL`
- `axios` [axios notes for more info](https://app.gitbook.com/s/-MVEiPUp08kYt33g51v7/languages-and-frameworks/axios)
- `Modal (placed inside App.js) and shown dynamically`
- `HTML converted into string`
- `Form - Matching form's name prop to the state so that we can have same handlechange function for all the inputs` [Similar to 17_random_user_generator app](https://github.com/sandeep194920/React_MUI_Express_Projects/tree/master/17_random_user_generator#how-to-use-same-handler-function-when-for-different-input-values-this-can-also-be-done-for-form-values)
- `Form - select tag`

## Handy Tools

1. [To get tints and shades of a selected colour](https://maketintsandshades.com/)
2. [Free logos in svg and png](https://myfreelogomaker.com/)
3. [Ready made Gradient backgrounds](https://uigradients.com/)
4. [Generate Photos of peoples' faces](https://generated.photos/)
5. [Images for background](https://unsplash.com/)
6. [Box shadow css generator](https://html-css-js.com/css/generator/box-shadow/)
7. [Create gradient videos for background like stripe](https://codesandbox.io/s/bxnsx?file=/src/App.js:0-617) - [Refer stripe.com](https://stripe.com/en-ca)
8. [Clip Image](https://bennettfeely.com/clippy/)
9. [Design Tool-tips](https://blog.logrocket.com/creating-beautiful-tooltips-with-only-css/)
