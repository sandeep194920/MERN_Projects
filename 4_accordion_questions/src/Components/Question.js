import React, { useState } from 'react'
import { Grid, Typography, useTheme } from '@mui/material'
import { AiOutlinePlus } from 'react-icons/ai'

function Question({ id, question, answer }) {
  const theme = useTheme()
  const questionStyle = {
    question: {
      background: theme.palette.background.default,
      border: '0.5px solid black',
      padding: '1rem 0',
      borderRadius: '5px',
    },
    showAnswer: {
      background: theme.palette.background.light,
      padding: '1rem',
      border: '0.5px solid black',
      marginBottom: '1rem',
    },
    hideAnswer: {
      display: 'none',
    },
    qIcon: {
      cursor: 'pointer',
    },
  }

  const [showAnswer, setShowAnswer] = useState(false)

  const toggleHandler = (id) => {
    setShowAnswer((answer) => !answer)
  }

  return (
    <Grid key={id} item xs={11}>
      {/* Question Section */}
      <Grid container direction="column">
        {/* Question +  */}
        <Grid
          item
          container
          justifyContent="space-around"
          alignItems="center"
          sx={questionStyle.question}
        >
          <Grid item xs={10}>
            <Typography variant="h6" component="subtitle1">
              {question}
            </Typography>
          </Grid>
          <Grid item>
            <AiOutlinePlus
              style={questionStyle.qIcon}
              onClick={() => toggleHandler(id)}
            />
          </Grid>
        </Grid>
        {/* Answer */}
        <Grid
          item
          xs={11}
          sx={showAnswer ? questionStyle.showAnswer : questionStyle.hideAnswer}
        >
          <Typography>{answer}</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Question
