# Project details

[Pagination on Client](https://18-pagination-on-client.netlify.app/)

## Details

This app is similar to [unsplash](https://unsplash.com/) where we can search photos using search bar. Once we search the photos, we can keep scrolling and new photos get generated on scroll.

## Things we can learn

- How to read API docs of [unsplash](https://unsplash.com/documentation#search-photos)
- How to setup env variables?
- How to setup `load on scroll` functionality?
- Two flavours of calling API again when search's enter button is clicked to fetch the data with the search query

---

### How to read API docs of [unsplash](https://unsplash.com/documentation#search-photos)

The key point when working with any API is its docs. Every API documentation is different. Once we figure out how to get the data using it's API key then it's easy to use that data in our APP.

**Key things to look at when working with API**

- **`Do I need an API key?`**

  - Generally, this will be somewhere at the start in the API documentation page as shown in the image below.

  - Most of the times, the API service might need you to create an account to give you the keys. Once you create an account, then you also might have to create an APP in their website so that they will give you the keys with reference to the created app.

  ![Developer account](./readmeImages/developer_account.png)

  - Here I created an app, `react-projects-19-recording` in unsplash to get an API key as explained in 2nd point above

  ![API keys](./readmeImages/API_keys.png)

- **`Now I have got API keys, how to fetch the data using those keys?`**

  - So once we have the API key, our next step is to see how to use that API key to grab the data. You need to see what is the base URL and how to attach the key to it. Sometimes it might not be straight forward so you might need to do some research and read the docs thoroughly. But in this case, we can send the API key in client ID in URL

  ![API keys](./readmeImages/photos_endpoint.png)

- **`Now I have got the data, how to get different data?`**

  - Once you get the data, now you might need to see how to get the particular data you are looking for. In the above image, you get the photos. But now you need to be able to search photos on specific query and get the photos related to that. Once you read the docs you find this

  ![API keys](./readmeImages/search_photos_endpoint.png)

These are some of the guidelines when working with external API. The main takeaway is, spend some time on reading the API docs.

---

### How to setup env variables?

[My Stackoverflow answer](https://stackoverflow.com/a/68945430/10824697)

---

### How to setup `load on scroll` functionality?

`document.body.scrollHeight` - Defines the height of the body that is scrollable.
[Reference of scrollHeight](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_scrollheight)

`window.scrollY` - returns the number of pixels that the document is currently scrolled vertically.

`Window.innerHeight` - returns the interior height of the window in pixels, including the height of the horizontal scroll bar, if present. - This would change if we decrease the screen vertically (usually when console is open), but the `body.scrollHeight` stays same.

**So the idea is to check if I have scrolled till end**

To do this, I need to check if `innerHeight + scrollY === bodyHeight`, and if that is the case then I can fetch new images.

```js
// adding 5 pixels here as - before the end is reached we can start load new images
if (innerHeight + scrollY >= bodyHeight - 5) {
  console.log('Reached the end')
}
```

also, we should not fetch the images if it is still loading...

```js
if (!loading && innerHeight + scrollY >= bodyHeight - 5) {
  console.log('Reached the end')
}
```

---

### Two flavours of calling API again when search's enter button is clicked to fetch the data with the search query

```js
const handleSubmit = (e) => {
  e.preventDefault()
  console.log('calling fetch again with qyert', query)
  setPage(1) //~ comment this if setPhotos([]) and fetchImages() are called like below

  /* Initially, when page is set to 1 and  here when we set page to 1 again, the first 10 photos will not change as the state call for setPhotos would be same as before. Hence, either of two things can be done*/

  //! This is not my favourite way
  /*1. Initially set the page to 0, and setPage(1) as done in above line. In this case, everytime, the enter button is clicked, page is set from 0 to 1 and the data would be pulled.  */

  //* This is my favourite way
  /*2. Instead of setting the page to 0, when the enter button is clicked, we will wipe out the data by setting setPhotos([]) and then call fetchImages() which would call the images again with the query. To achieve this, comment above setPage(1) and uncomment below setPhotos([]) and fetchImages() */

  // setPhotos([])
  // fetchImages()
}
```
