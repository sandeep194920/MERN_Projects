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
const center = {
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
  },

  errorText: {
    ...center,
  },

  heading: {
    color: (theme: ShoppingStyles) => theme.palette.primary.main,
    ...center,
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
}

export default styles
