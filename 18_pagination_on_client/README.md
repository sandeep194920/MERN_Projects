# Project details

[Pagination on Client](https://18-pagination-on-client.netlify.app/)

## Details

We will generally have two flavours of pagination.

- client side pagination (shown in this project)
- server side pagination (we will see this in future projects)

We get github profiles in this project using github API. Since there are more profiles, it's a good user experience to paginate and show the results. If little results are shown on each page, then number of pages grow.

- If there are 100 results, and 10 are shown on each page then number of pages are 10.
- If there are 100 results, and 5 are shown on each page then number of pages are 20.

## Things we can learn

- How to paginate on front-end?
- How to set active class dynamically when button is selected?
- `Circular Array Functionality` - When we are in first page and `prev` btn is clicked, last page must be shown. Also, when `next` btn is clicked in last page, first page should be shown
- How to make custom hooks like `useFetch`?

---

### How to paginate on front-end?

Once we have our cards fetched on to the screen, all the cards will be on single page and we need to scroll. Then we can paginate on UI. Steps to paginate:

- While there can be many methods to do this, one of the easiest to visualize would be, creating array of arrays
- Say we have an array of 100 items, then we can make array of 10 items each inside the big array
- This is our `getProducts` function

```js
const getProducts = async () => {
  const response = await fetch(url)
  const data = await response.json()
  paginate(data) // if we want to paginate, then we call the util function, paginate, here
  setData(data)
  setLoading(false)
}

useEffect(() => {
  getProducts()
}, [])
```

- So the paginate function returns us a small chunk array (specific array of 10 items) from the large array
- The idea is, first we need to create main (big) array, and then, inside it, create small arrays.

  - To create a main array, we can use `Array.from({length:x})`
  - `Array.from({ length: 4 })` this gives `[undefined,undefined,undefined,undefined]`
  - `Array.from({ length: 4 }, () => 7)` this gives `[7,7,7,7]`
  - We can pass the arguments into second param like this `Array.from({ length: 4 }, (noUse,index) => index)` and this gives `[0,1,2,3]` as index value in each iteration fills the array. The `noUse` arg is the element itself which will be `undefined` from 2nd point in this bullet point set and we don't use it, so we can just put `_` instead of `undefined`
  - `Array.from({ length: 4 }, (_,index) => index)` gives `[0,1,2,3]`

- With this knowledge, lets apply it to make array of arrays

```js
const paginate = (followers) => {
  const itemsPerPage = 9
  // if followers / itemsPerPage is a decimal then we need to round it of (ceil or floor) so the remaining data goes to next page
  const pages = Math.ceil(followers.length / itemsPerPage)
  /*
So if the itemsPerPage is 9, and if followers are 100, then pages will be 100/9 -> 11.111 (ceil value is 12 pages)
Meaning, we will have 12 pages, and last page will have one item

11 pages * 9 items -> 99 items for 11 pages, and remaining one item in last page
*/

  // Now let's create that array(big array) of arrays(small arrays)

  const newFollowers = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage
    const end = start + itemsPerPage
    return followers.slice(start, end)
  })
  console.log(newFollowers)
}
```

So, to summarize,

- Define `number of items per page`
- Define number of pages -> `total results` `/` `number of items per page`
- Define `Array.from` and then return `total results slice (start, end)` -> start will be `index * items per page`, and end will be `start + items per page`

---

### How to set active class dynamically when button is selected?

```js
{
  !loading && ( // ALSO NOTE THAT: instead of checking for data, you can check for !loading and then render data.map
    <div className="btn-container">
      {data.map((_, index) => {
        return (
          <button
            key={index}
            onClick={() => handlePage(index)}
            // className={
            //   index === page ? 'page-btn active-btn' : 'page-btn'
            // }
            /* OR */
            className={`page-btn ${index === page && 'active-btn'}`} // YOU CAN set either like this or above commented way
          >
            {index + 1}
          </button>
        )
      })}
    </div>
  )
}
```

### `Circular Array Functionality` - When we are in first page and `prev` btn is clicked, last page must be shown. Also, when `next` btn is clicked in last page, first page should be shown

```js
const prevPage = () => {
  setPage((oldPage) => {
    if (oldPage === 0) {
      return data.length - 1
    }
    return oldPage - 1
  })
}

const nextPage = () => {
  setPage((oldPage) => {
    if (oldPage === data.length - 1) {
      return 0
    }
    return oldPage + 1
  })
}
```

```jsx
<button className="prev-btn" onClick={prevPage}>
  prev
</button>

<button className="next-btn" onClick={nextPage}>
  next
</button>
```

---

### How to make custom hooks like `useFetch`?

I have implemented `useFetch` in this project in `18_pagination_on_client/src/useFetch.js`, but explained in detail in [21_movie_search project](https://github.com/sandeep194920/React_MUI_Express_Projects/tree/master/21_movies_search#implement-custom-hook-usefetch)

---
