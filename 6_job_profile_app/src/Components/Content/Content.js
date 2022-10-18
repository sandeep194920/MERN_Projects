import { useState, useEffect } from 'react'
import { Typography, Box, Grid, Button } from '@mui/material'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import employees from '../../data.json'

function Content() {
  // content will be divided into two columns
  // first column will be candidate name tabs
  // second column will be resume

  const [currentEmployee, setCurrentEmployee] = useState(0)
  //   const [currentEmployee, setCurrentEmployee] = useState(employees[0])
  const [employeeResponsibilities, setEmployeeResponsibilities] = useState(
    employees[0].responsibilities
  )
  // for each employee
  const [moreInfo, setMoreInfo] = useState(false)

  // this is to change how many responibilites to be shown when more info is clicked
  useEffect(() => {
    if (!moreInfo) {
      setEmployeeResponsibilities(
        employees[currentEmployee].responsibilities.slice(0, 3)
      )
    } else {
      setEmployeeResponsibilities(employees[currentEmployee].responsibilities)
    }
  }, [moreInfo, currentEmployee])

  // this is to reset moreInfo to false every time when an employee is switched
  useEffect(() => {
    setMoreInfo(false)
  }, [currentEmployee])

  return (
    <Grid
      container
      sx={{
        marginY: 8,
      }}
    >
      <Grid item xs={4} justifyContent="center" container>
        <Grid
          container
          direction="column"
          alignItems="flex-start"
          sx={{
            height: '100%',
            width: 'fit-content',
            paddingTop: '5px',
          }}
        >
          {/* Employee Tabs */}

          {employees.map((employee, index) => (
            <Grid
              key={index}
              item
              onClick={() => setCurrentEmployee(index)}
              sx={{
                color: (theme) =>
                  employee.name === employees[currentEmployee].name &&
                  theme.palette.primary.main,
                marginBottom: '3rem',
                padding: '3px 1.5rem',
                cursor: 'pointer',
                borderLeft: (theme) =>
                  employee.name === employees[currentEmployee].name
                    ? `3px solid ${theme.palette.primary.main}`
                    : `2px solid ${theme.palette.secondary.main}`,
              }}
            >
              <Typography
                fontWeight={
                  employee.name === employees[currentEmployee].name
                    ? 'bold'
                    : 'normal'
                }
              >
                {employee.name}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={8}>
        <Grid
          container
          justifyContent="center"
          direction="column"
          rowSpacing={3}
        >
          {/* Position, Name, Duration  */}
          <Grid container item direction="column" rowSpacing={2} sx={{}}>
            <Grid item>
              <Typography variant="h4">
                {employees[currentEmployee].position}
              </Typography>
            </Grid>
            <Grid item>
              <Typography fontWeight="bold" color="primary" variant="h6">
                {employees[currentEmployee].name}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                color="black"
                sx={{
                  padding: '3px',
                  backgroundColor: (theme) => `${theme.palette.grey[300]}`,
                  opacity: '0.7',
                  width: 'fit-content',
                }}
              >
                {employees[currentEmployee].duration}
              </Typography>
            </Grid>
          </Grid>
          <Grid item container rowSpacing={2}>
            {/* Responsibilities */}
            {employeeResponsibilities.map((role) => {
              return (
                <Grid key={role} item container alignItems="center">
                  <Grid item xs={0.5}>
                    <KeyboardDoubleArrowRightIcon
                      // fontSize="small"
                      color="primary"
                    />
                  </Grid>
                  <Grid item xs={11}>
                    <Typography>{role}</Typography>
                  </Grid>
                </Grid>
              )
            })}
          </Grid>
          <Box sx={{ mt: 5 }}>
            <Button
              disableRipple
              variant="contained"
              onClick={() => setMoreInfo((prev) => !prev)}
            >
              {!moreInfo ? 'More Info' : 'Key Points'}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Content
