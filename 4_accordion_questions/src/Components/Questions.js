import { Grid, useTheme } from '@mui/material'
import Question from './Question'
import questionSet from '../data'

function Questions() {
  const theme = useTheme()

  const questionsStyle = {
    container: {
      border: `1px solid ${theme.palette.primary.main}`,
    },
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
        return <Question key={quest.id} {...quest} />
      })}
    </Grid>
  )
}

export default Questions
