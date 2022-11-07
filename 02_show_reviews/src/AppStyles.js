export const colors = {
  primary: '#928DAB',
  secondary: '#1F1C2C',
  hovers: '#928DAB',
  linearBackground: function () {
    return `linear-gradient(to right, #928DAB, #1F1C2C)`
  },
  linearButton: function () {
    return `linear-gradient( 80deg, ${this.secondary} 16%, ${this.primary} 100%);`
  },
}

export const appStyles = {
  backgroundColor: '#08AEEA',
  backgroundImage: colors.linearBackground(),
  height: '100vh',
  textAlign: 'center',
  paddingTop: '4%',
  '& h1': {
    color: 'white',
    marginBottom: '4rem',
  },
}
