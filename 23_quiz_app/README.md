# Project details

[Quiz app]()

## Details

In this app, we can setup a quiz by defining number of questions, category, and difficulty level. Each multiple choice question will have a correct answer and if we get it right, it will be registered and we can also skip the question by clicking next button, but that will be considered a wrong answer. We have a modal at the end to show how many questions we got it right.

## Things we can learn

- Flow of this app
- How to work with axios
- How to convert HTML kind of string into normal string and display on UI?

---

### Flow of this app

- We have `waiting` state set to `true` initially, and once that is `false`, then we need to fetch the questions
- Once the user selects the categories of Quiz (like type of questions, difficulty level and so on) and clicks start, we then set `waiting` to false and dynamically generate the questions URL based on users preferences

---

### How to work with axios

For full axios tutorials [Refer my notes](https://app.gitbook.com/s/-MVEiPUp08kYt33g51v7/languages-and-frameworks/axios)

```js
const fetchQuestions = async (url) => {
  setLoading(true)
  setWaiting(false)
  const response = await axios(url).catch((err) => console.log(err))
  console.log(response.data.results)
}
```

If there is some kind of issue with URL then response will be undefined, so we can use that to display the error

```js
const fetchQuestions = async (url) => {
  setLoading(true)
  setWaiting(false)
  const response = await axios(url).catch((err) => console.log(err)) // line 1
  if (response) {
    const data = response.data.results
    if (data.length > 0) {
      setQuestions(data)
      setLoading(false)
      setError(false)
      setWaiting(false)
    } else {
      setWaiting(true)
      setError(true)
    }
  } else {
    // response is undefined, which means we have some kind of error (we technically need to handle this here or in line1, but that's ok for now )
    setWaiting(true)
  }
}
```

---

### How to convert HTML kind of string into normal string and display on UI?

You can use `dangerouslySetInnerHTML`

```js
<h2 dangerouslySetInnerHTML={{ __html: `question&nbsp;` }} /> // this will be - question
```
