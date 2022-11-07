import { Typography, Paper, Grid, Avatar } from '@mui/material'

export const Friend = ({ description, image }) => {
  return (
    <Grid item xs={12} md={6}>
      <Paper data-testid="friend-card">
        {/* wrap = 'nowrap' keeps elements in card (image and text) in same row without putting into new line */}
        <Grid container alignItems="center" wrap="nowrap">
          <Grid item>
            <Avatar
              alt="Remy Sharp"
              sx={{ width: 65, height: 65, marginX: 3, marginY: 1 }}
              src={image}
              //   src="https://mui.com/static/images/avatar/2.jpg"
            />
          </Grid>
          {/* Wrapping this as an item because this is necessary if the content here in typography grows. Also, giving the margin for the same reason. This margin is not required and no effect on this content but incase if it grows then it palys out well. Try adding more content lorem40 and see. */}
          <Grid item xs={8} sx={{ marginY: 2 }}>
            <Typography>{description}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}
