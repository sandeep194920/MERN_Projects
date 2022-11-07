import { Grid, useTheme } from '@mui/material'
import Question from './Question'
import questionSet from '../data'
import { useState } from 'react'

function Questions() {
  const theme = useTheme()

  const questionsStyle = {
    container: {
      border: `1px solid ${theme.palette.primary.main}`,
      [theme.breakpoints.down('lg')]: {
        border: 'none',
      },
    },
  }

  const [selected, setSelected] = useState(null)

  const accordionHandler = (accoridonId) => {
    if (selected === accoridonId) {
      return setSelected(null)
    }
    setSelected(accoridonId)
  }

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={questionsStyle.container}
    >
      {questionSet.map((quest) => {
        /* Each item below is the question */
        return (
          <Question
            key={quest.id}
            {...quest}
            accordionHandler={accordionHandler}
            showAccordion={selected === quest.id}
          />
        )
      })}
    </Grid>
  )
}

export default Questions
