# Project details

Remove this - Tags - CRUD on UI, unique ids, better defenition of styles in mui, localstorage

- How to generate unique IDs in react (useId vs nanoid)

---

### How to generate unique IDs in react

[useId hook introduced in react 18](https://reactjs.org/docs/hooks-reference.html#useid)

`useId` can be used to generate unique Ids. This is helpful when mapping the data where we can use this useId as key prop.

This works best when we are defining ids on html form, for example, on input field.

[Note from react docs](https://reactjs.org/docs/hooks-reference.html#useid): useId is not for generating keys in a list. Keys should be generated from your data.

Hence doing something like this is not good as we are generating multiple useId() calls which is bad for performance

```js
  const [items, setItems] = useState<[] | Item[]>([
    { id: useId(), name: 'Apples' },
    { id: useId(), name: 'Oranges' },
    { id: useId(), name: 'Eggs' },
  ])
```

Instead, we can do this

```js
  const id = useId()
  const [items, setItems] = useState<[] | Item[]>([
    { id: `${id}-0001`, name: 'Apples' },
    { id: `${id}-0002`, name: 'Oranges' },
    { id: `${id}-0003`, name: 'Eggs' },
  ])
```

But while adding the elements dynamically, here's what I did

```js
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  if (item === '') {
    setError(true)
    return
  }
  const itemId = `${id}-${item}` // This line causes same key if name is same
  const newItem = { id: itemId, name: item }
  // setItems([...items, newItem]) // first way to declare state without using previous state
  setItems((prevItems) => [...prevItems, newItem]) // second way to declare state using previous state
}
```

But we have a problem here as well. For two elements having same content, we still get same key because of line **const itemId = `${id}-${item}`** above.

![use ID issue](./readme_images/use-id-error.png)

So let's use nano-id package for now until we get to know some better approach of using this useId for this usecase.

[Use nanoId like this](https://stackoverflow.com/a/65962066/10824697)

![nano ID solves this issue](./readme_images/nano-id-solves.png)
