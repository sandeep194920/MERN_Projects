import React, { useState } from 'react'
import { Grid, Typography, useTheme } from '@mui/material'
import { AiOutlinePlus } from 'react-icons/ai'

function Question({ id, question, answer, accordionHandler, showAccordion }) {
  const theme = useTheme()
  const questionStyle = {
    question: {
      background: theme.palette.background.default,
      border: `0.5px solid ${theme.palette.primary.main}`,
      padding: '1rem 0',
      borderRadius: '5px',
    },
    showAnswer: {
      background: theme.palette.background.light,
      border: `0.5px solid ${theme.palette.primary.main}`,
      borderRadius: '0 0 3px 3px',
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

  //   OLD implementation where all acccordions were expanding
  //   const [showAnswer, setShowAnswer] = useState(false)
  const toggleHandler = (id) => {
    accordionHandler(id)
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
            <Typography variant="h6">{question}</Typography>
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
          //   OLD implementation where all acccordions were expanding
          //   sx={showAnswer ? questionStyle.showAnswer : questionStyle.hideAnswer}

          //   NEW implementation where only selected acccordion will expand
          sx={
            showAccordion ? questionStyle.showAnswer : questionStyle.hideAnswer
          }
        >
          <Typography>{answer}</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Question
