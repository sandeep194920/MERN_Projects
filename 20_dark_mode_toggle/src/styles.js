const styles = {
  navCenter: {
    width: '90vw',
    maxWidth: '600px',
    margin: '0rem auto',
    padding: '2rem 0',
    h1: {
      fontSize: '2.5rem',
      textTransform: 'capitalize',
      letterSpacing: '2px',
    },
  },
  postContainer: {
    width: '90vw',
    maxWidth: '600px',
    margin: '4rem auto',
  },
  post: {
    marginBottom: '3rem',
    h4: {
      fontSize: '1.75rem',
      textTransform: 'capitalize',
      letterSpacing: '2px',
      color: (theme) => theme.palette.primary.main,
    },
  },
  postInfo: {
    marginBottom: '0.75rem',
    fontStyle: 'italic',
    span: {
      marginRight: '0.5rem',
    },
  },
}
export default styles
