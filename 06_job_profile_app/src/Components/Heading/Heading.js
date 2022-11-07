import { Typography, Box } from '@mui/material'

function Heading() {
  const headingStyles = {
    headingContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginY: 4,
    },
    headingText: {
      '&:after': {
        content: '" "',
        height: '0.2rem',
        position: 'absolute', // to support that effect for image
        top: '5.1rem',
        margin: '0 auto',
        left: 0,
        right: 0,
        width: '8rem',
        background: (theme) => theme.palette.primary.light,
      },
    },
  }
  return (
    <Box sx={headingStyles.headingContainer}>
      <Typography sx={headingStyles.headingText} color="primary" variant="h4">
        Job Profile
      </Typography>
    </Box>
  )
}

export default Heading
