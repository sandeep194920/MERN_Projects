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

/* Define Constants*/
const CANT_BE_EMPTY_ERROR = `Items can't be empty. Please enter an item`
const ADDED = `Item added successfullly`
const REMOVED = `Item removed successfully`
const CLEARED = `All items cleared`
const UPDATED = `Item updated successfully`

/* Define Interfaces */
interface Item {
  id: string
  name: string
}

interface Alert {
  show: boolean
  msg?: string
  type?: 'danger' | 'success' // type could be either of these two values
}

/* Define initial values */
const initialItems = [
  { id: nanoid(), name: 'Apple' },
  { id: nanoid(), name: 'Orange' },
  { id: nanoid(), name: 'Banana' },
]

// get local storage items if available. Else, get our defined items (initialItems)
const getLocalStorageItems = () => {
  let items = []
  if (localStorage.getItem('locallyStoredItems')) {
    items = JSON.parse(localStorage.getItem('locallyStoredItems') || '[]')
  } else {
    items = initialItems
  }
  return items
}

function ImprovedShoppingArea() {
  /* Define State values */
  const [item, setItem] = useState('')
  const [alert, setAlert] = useState<Alert>({
    show: false,
  })
  // to know if editing or not
  const [editMode, setEditMode] = useState(false)
  // to know which item is currently editted
  const [editId, setEditId] = useState<null | string>(null)
  // With localstorage
  const [items, setItems] = useState<[] | Item[]>(getLocalStorageItems())

  /* Define utility functions (functions that can be used in other functions) */

  const showAlert = (
    show: boolean = true,
    msg?: string,
    type?: Alert['type']
  ) => {
    setAlert((prevAlert) => ({
      ...prevAlert,
      show,
      msg,
      type,
    }))
  }

  const capitalize = (str: string) => {
    return `${str[0].toUpperCase()}${str.slice(1)}`
  }

  /* Define handler functions */

  // when user clicks on ADD or EDIT button
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // validate the input
    if (item === '') {
      showAlert(true, CANT_BE_EMPTY_ERROR, 'danger')
      return
    }
    // edit mode
    if (editMode) {
      // edit the current item and set edit mode to false
      const itemsAfterEdit = items.map((myItem) => {
        if (myItem.id === editId) {
          myItem = { ...myItem, name: capitalize(item) }
        }
        return myItem
      })
      setItems(itemsAfterEdit)
      setEditMode(false)
      showAlert(true, UPDATED, 'success')
      // add mode
    } else {
      // this is hit when we are not editing. When we add an item
      const newItem = { id: nanoid(), name: capitalize(item) }
      setItems((prevItems) => [...prevItems, newItem])
      showAlert(true, ADDED, 'success')
    }
    // setting the input back to '' after edit or add
    setItem('')
  }

  // when user clicks on edit on any item
  const editHandler = (id: string) => {
    setEditMode(true)
    const itemToUpdate = items.find((item) => item.id === id)
    if (itemToUpdate) {
      setEditId(itemToUpdate.id)
      setItem(itemToUpdate.name)
    }
  }

  // when user clicks on delete icon
  const deleteHandler = (id: string) => {
    // when editting the product, the delete should not work
    if (editMode) return
    const updatedItems = items.filter((item) => item.id !== id)
    // setting items after removal of selected item
    setItems(updatedItems)
    showAlert(true, REMOVED, 'danger')
  }

  // when user clears all the items by clicking clear btn
  const clearHandler = () => {
    setItems([])
    showAlert(true, CLEARED, 'success')
  }

  /* Defining UseEffects*/

  // to updated local storage if items change
  useEffect(() => {
    // if items change anywhere - in handleSubmit/ deleteHandler/ submitHandlerOnEdit we need to update our local storage as well and make it equal to our items state
    localStorage.setItem('locallyStoredItems', JSON.stringify(items))
  }, [items])

  // alert should disappear after 3 seconds
  useEffect(() => {
    const timeOut = setTimeout(() => {
      showAlert(false)
    }, 3000)
    return () => clearTimeout(timeOut)
  }, [alert])

  return (
    <Container>
      <Paper sx={styles.container} elevation={8}>
        <Typography sx={styles.heading} variant="h4" component="h3">
          Grocery Store
        </Typography>
        {alert.show && (
          <Typography
            sx={{ ...styles.alertText, ...(alert.type && styles[alert.type]) }}
          >
            {alert.msg}
          </Typography>
        )}
        <form onSubmit={submitHandler}>
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
            <Button onClick={clearHandler}>Clear Items</Button>
          </Grid>
        )}
      </Paper>
    </Container>
  )
}

export default ImprovedShoppingArea
