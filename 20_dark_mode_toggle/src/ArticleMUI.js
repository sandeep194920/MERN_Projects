import React from 'react'
import moment from 'moment'
import styles from './styles'
import { Box, Typography } from '@mui/material'

function Article({ title, snippet, date, length }) {
  return (
    <Box sx={styles.post}>
      <Typography variant="h4">{title}</Typography>
      <div>
        <span>{moment(date).format('MMM Do YY')}, </span>
        <span>{length} min read</span>
      </div>
      <p>{snippet}</p>
    </Box>
  )
}

export default Article
