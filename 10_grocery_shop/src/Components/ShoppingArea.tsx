import {
  Box,
  Button,
  Container,
  TextField,
  Grid,
  Typography,
} from '@mui/material'
import React, { useId, useState } from 'react'
import styles from './ShoppingAreaStyles'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { nanoid } from 'nanoid'

interface Item {
  id: string
  name: string
}

function ShoppingArea() {
  // const id = useId()
  const [item, setItem] = useState('')
  const [error, setError] = useState(false)

  // WE ARE NOT TAKING THE APPROACH OF USEID - PLEASE SEE README

  // const [items, setItems] = useState<[] | Item[]>([
  //   { id: `${id}-0001`, name: 'Apples' },
  //   { id: `${id}-0002`, name: 'Oranges' },
  //   { id: `${id}-0003`, name: 'Eggs' },
  // ])

  const [items, setItems] = useState<[] | Item[]>([
    { id: nanoid(), name: 'Apples' },
    { id: nanoid(), name: 'Oranges' },
    { id: nanoid(), name: 'Eggs' },
  ])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (item === '') {
      setError(true)
      return
    }

    // WE ARE NOT TAKING THE APPROACH OF USEID - PLEASE SEE README
    //const itemId = `${id}-${item}` // This line causes same key if name is same

    const newItem = { id: nanoid(), name: item }

    // setItems([...items, newItem]) // first way to declare state without using previous state
    setItems((prevItems) => [...prevItems, newItem]) // second way to declare state using previous state
  }

  return (
    <Container>
      <Box sx={styles.container}>
        <Typography sx={styles.heading} variant="h4" component="h3">
          Grocery Store
        </Typography>
        <Typography sx={styles.errorText}>Please add an item</Typography>

        <form onSubmit={handleSubmit}>
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
                Add Item
              </Button>
            </Grid>
          </Grid>
        </form>
        <Box>
          {items.map((item) => {
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
                    <EditIcon color="primary" />
                  </Grid>
                  <Grid item>
                    <DeleteIcon color="error" />
                  </Grid>
                </Grid>
              </Grid>
            )
          })}
        </Box>
      </Box>
    </Container>
  )
}

export default ShoppingArea
