import { Box, Button, Typography } from "@material-ui/core"
import { OnboardingTwo } from "../constants/URL";
import { makeStyles } from "@material-ui/core/styles";
import { motion } from "framer-motion";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: 600,
    height: '100%',
    margin: 'auto',
    '& img': {
      width: '60%',
      margin: 72,
      marginBottom: 80
    }
  },
  message: {
    width: '80%',
    margin: '0 auto',
    minHeight: 112,
    height: 'fit-content',
    fontWeight: 400,
    fontSize: 24,
    textAlign: 'center',
    color: '#861c55',
    lineHeight: '28.13px'
  },
  button: {
    display: 'flex',
    alignSelf: 'center',
    backgroundColor: '#861c55',
    color: '#fcfcff',
    fontWeight: 500,
    fontSize: 14,
    width: 144,
    height: 48,
    margin: '24px auto',
    '&:hover': {
      backgroundColor: '#861c55'
    }
  },
  dots: {
    paddingBottom: 40,
    display: 'flex',
    width: 144,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    border: 'solid 1px #861c55'
  },
  filledDot: {
    backgroundColor: '#861c55',
    borderRadius: '50%',
    border: 'solid 8px #861c55'
  }
}))

const OnboardingScreenTwo = () => {
  const classes = useStyles();
  const history = useHistory()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
      className={classes.root}
    >
      <img src={OnboardingTwo} alt="Ups" />
      <Typography className={classes.message}>
        Forma parte de nuestra comunidad interactuando con otros estudiantes en el FORO.
      </Typography>
      <Button
        className={classes.button}
        onClick={() => history.push('/app')}
      >
        Comencemos
      </Button>
      <Box className={classes.dots}>
        <Box className={classes.dot} onClick={() => history.push('/onboarding-one')} />
        <Box className={classes.filledDot} />
      </Box>
    </motion.div>
  )
}

export default OnboardingScreenTwo;
