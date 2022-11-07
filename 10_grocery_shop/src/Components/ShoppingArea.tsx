import {
  Box,
  Button,
  Container,
  TextField,
  Grid,
  Typography,
  Paper,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import styles from './ShoppingAreaStyles'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { nanoid } from 'nanoid'

interface Item {
  id: string
  name: string
}

const initialItems = [
  { id: nanoid(), name: 'Apple' },
  { id: nanoid(), name: 'Orange' },
  { id: nanoid(), name: 'Banana' },
]

function ShoppingArea() {
  // const id = useId()
  const [item, setItem] = useState('')
  const [alert, setAlert] = useState({
    added: false,
    removed: false,
    error: false,
    updated: false,
  })
  const [editMode, setEditMode] = useState(false)
  const [editId, setEditId] = useState<null | string>(null)

  // WE ARE NOT TAKING THE APPROACH OF USEID - PLEASE SEE README

  // const [items, setItems] = useState<[] | Item[]>([
  //   { id: `${id}-0001`, name: 'Apples' },
  //   { id: `${id}-0002`, name: 'Oranges' },
  //   { id: `${id}-0003`, name: 'Eggs' },
  // ])

  // Without localstorage
  // const [items, setItems] = useState<[] | Item[]>([
  //   { id: nanoid(), name: 'Apples' },
  //   { id: nanoid(), name: 'Oranges' },
  //   { id: nanoid(), name: 'Eggs' },
  // ])

  // With localstorage
  const [items, setItems] = useState<[] | Item[]>(
    localStorage.getItem('storedItems')
      ? JSON.parse(localStorage.getItem('storedItems') || '[]')
      : initialItems // if storedItems are not present in localstorage then initialItems are read
  )

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (item === '') {
      setAlert({ ...alert, error: true, added: false, removed: false })
      return
    }
    // WE ARE NOT TAKING THE APPROACH OF USEID - PLEASE SEE README
    //const itemId = `${id}-${item}` // This line causes same key if name is same

    const newItem = { id: nanoid(), name: item }
    setItem('')

    // setItems([...items, newItem]) // first way to declare state without using previous state
    setItems((prevItems) => [...prevItems, newItem]) // second way to declare state using previous state
    setAlert({
      ...alert,
      error: false,
      added: true,
      removed: false,
      updated: false,
    })
  }

  const editHandler = (id: string) => {
    setEditMode(true)
    const itemToUpdate = items.find((item) => item.id === id)
    if (itemToUpdate) {
      setEditId(itemToUpdate.id)
      setItem(itemToUpdate.name)
    }
  }

  const submitHandlerOnEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (item === '') {
      setAlert({
        ...alert,
        error: true,
        added: false,
        removed: false,
        updated: false,
      })
      return
    }
    setEditMode(false)
    const updatedItems = items.map((updatedItem) => {
      if (updatedItem.id === editId) {
        updatedItem.name = item
      }
      return updatedItem
    })
    setAlert({ ...alert })
    setItems(updatedItems)
    setItem('')
    setAlert({
      ...alert,
      error: false,
      added: false,
      removed: false,
      updated: true,
    })
  }

  const deleteHandler = (id: string) => {
    // when editting the product, the delete should not work
    if (editMode) return
    const updatedItems = items.filter((item) => item.id !== id)
    setItems(updatedItems)
    localStorage.setItem('storedItems', JSON.stringify(updatedItems))
    setAlert({
      ...alert,
      error: false,
      added: false,
      removed: true,
      updated: false,
    })
  }

  useEffect(() => {
    // if items change anywhere - in handleSubmit/ deleteHandler/ submitHandlerOnEdit we need to update our local storage as well and make it equal to our items state
    localStorage.setItem('storedItems', JSON.stringify(items))
  }, [items])

  useEffect(() => {
    // we need alert to be disappeared after 3 sec
    const timeOut = setTimeout(() => {
      setAlert((prev) => ({
        ...prev,
        show: false,
        added: false,
        removed: false,
        error: false,
        updated: false,
      }))
    }, 3000)
    return () => clearTimeout(timeOut)
  }, [items, alert])

  let alertJSX

  if (alert.added) {
    alertJSX = (
      <Typography variant="h6" color="green" sx={styles.alertText}>
        Item added
      </Typography>
    )
  } else if (alert.error) {
    alertJSX = (
      <Typography variant="h6" color="error" sx={styles.alertText}>
        Item cannot be empty
      </Typography>
    )
  } else if (alert.removed) {
    alertJSX = (
      <Typography variant="h6" color="green" sx={styles.alertText}>
        Item removed
      </Typography>
    )
  } else if (alert.updated) {
    alertJSX = (
      <Typography variant="h6" color="green" sx={styles.alertText}>
        Item updated
      </Typography>
    )
  }
  return (
    <Container>
      <Paper sx={styles.container} elevation={8}>
        <Typography sx={styles.heading} variant="h4" component="h3">
          Grocery Store
        </Typography>
        {alertJSX}
        <form onSubmit={editMode ? submitHandlerOnEdit : handleSubmit}>
          <Grid container alignItems="center" justifyContent="space-evenly">
            <Grid item>
              <TextField
                id="outlined-basic"
                size="small"
                label="Add a product"
                variant="outlined"
                value={item}
                onChange={(e) => setItem(e.target.value)}
              />
            </Grid>
            <Grid item>
              <Button type="submit" variant="contained">
                {editMode ? 'Edit Item' : 'Add Item'}
              </Button>
            </Grid>
          </Grid>
        </form>
        <Box>
          {items &&
            items.map((item) => {
              const { id, name } = item
              return (
                <Grid
                  key={id}
                  sx={styles.item}
                  justifyContent="space-evenly"
                  container
                >
                  <Grid item xs={4}>
                    <Typography>{name}</Typography>
                  </Grid>

                  <Grid container item xs={2} justifyContent="space-evenly">
                    <Grid item>
                      <EditIcon
                        sx={styles.icon}
                        onClick={() => editHandler(id)}
                        color="primary"
                      />
                    </Grid>
                    <Grid item>
                      <DeleteIcon
                        sx={editMode ? styles.iconDisabled : styles.icon}
                        onClick={() => deleteHandler(id)}
                        color={editMode ? 'disabled' : 'error'}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              )
            })}
        </Box>
        {items.length > 0 && !editMode && (
          <Grid container justifyContent="center">
            <Button onClick={() => setItems([])}>Clear Items</Button>
          </Grid>
        )}
      </Paper>
    </Container>
  )
}

export default ShoppingArea
