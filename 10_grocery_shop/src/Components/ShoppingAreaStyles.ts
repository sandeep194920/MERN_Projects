interface ShoppingStyles {
  palette: {
    secondary: {
      main: string
    }
    primary: {
      main: string
    }
  }
}

// style snippets that can be reused
const centerText = {
  marginBottom: '1rem',
  textAlign: 'center',
}

const verticalSpacing = {
  margin: '1rem 0',
}

const styles = {
  container: {
    width: '50%',
    background: (theme: ShoppingStyles) => theme.palette.secondary.main,
    margin: 'auto',
    marginTop: '25vh',
    padding: '2rem',
    // border: (theme: ShoppingStyles) =>
    // `1px solid ${theme.palette.primary.main}`,
  },

  alertText: {
    ...centerText,
  },

  heading: {
    color: (theme: ShoppingStyles) => theme.palette.primary.main,
    ...centerText,
  },

  item: {
    ...verticalSpacing,
  },
  icon: {
    cursor: 'pointer',
  },
  iconDisabled: {
    cursor: 'not-allowed',
  },
  // alert
  danger: {
    color: 'red',
  },
  success: {
    color: 'green',
  },
}

export default styles
