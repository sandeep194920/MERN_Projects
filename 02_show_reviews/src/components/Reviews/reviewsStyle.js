import { colors } from '../../AppStyles'
export const reviewStyles = {
  reviewContainer: {
    padding: '1rem',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '80%',
    margin: '0 auto',
    boxShadow: '6px 3px 12px 3px black',
    borderRadius: '20px',

    /* For large screen this should be 60%. 
    This is mobile first approach where we 
    designed for mobile first and then adjusted for large screen*/

    '@media(min-width: 1000px)': {
      maxWidth: '60%',
    },

    // For image within this reviewStyles container
    '& ': {
      h4: {
        fontSize: '1.2rem',
        marginBottom: '0.2rem',
      },
      h6: {
        color: colors.secondary,
        fontSize: '0.8rem',
      },
    },
  },
  imageContainer: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    marginBottom: '0.4rem',
    position: 'relative', // to support that effect for image, this is the parent
    '&:before': {
      content: '" "',
      width: '100%',
      height: '100%',
      background: colors.linearBackground(),
      position: 'absolute', // to support that effect for image
      top: '-0.3rem',
      right: '-0.4rem',
      borderRadius: '50%',
    },
    '& img': {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      display: 'block',
      position: 'relative', // to support that effect for image
      objectFit: 'cover',
      objectPosition: 'center -7px',
    },
    quoteIcon: {
      background: colors.linearBackground(),
      color: 'white',
      padding: '0.5rem',
      borderRadius: '50%',
      width: '2rem',
      height: '2rem',
      position: 'absolute',
      top: '0',
    },
  },
  buttonContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '1rem 0 0.5rem 0',
    '& ': {
      button: {
        backgroundImage: colors.linearButton(),
        color: 'white',
        padding: '0.8rem',
        border: 'transparent',
        borderRadius: '50px',
        outline: colors.primary,
        fontSize: '0.8rem',
        lineHeight: '1.1rem',
        letterSpacing: '1px',
        cursor: 'pointer',
        '&:hover': {
          backgroundImage: 'unset',
          backgroundColor: colors.hovers,
        },
      },
      svg: {
        color: colors.secondary,
        cursor: 'pointer',
      },
    },
  },
}
