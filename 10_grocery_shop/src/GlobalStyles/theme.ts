import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#541653',
    },
    secondary: {
      main: '#F4EDE4',
    },
    /* This will be overridden by MUICssBaseline style in components key below*/
    // background: {
    //   default: 'lightgreen',
    // },
  },
  //  In palette, the background.default (which gets used when I use CSSBaseline inside Theme provider) can have a single color. I wish to have gradiant color, so customising it below

  // Write all you global styles here
  components: {
    MuiCssBaseline: {
      styleOverrides: (themeParam) => `
          body {
        // color:${themeParam.palette.primary.main};
        //     background-image: linear-gradient(
        //         140deg,
        //         #541653 12%,
        //         #541653 45%,
        //         #541653 95%
        //   );
            
            background:${theme.palette.primary.dark};

          }
        `,
    },
  },
})

export default theme
