import React, { useEffect } from 'react'
import { Logo } from "../constants/URL";
import '../App.css'
import { useHistory } from 'react-router';
import { motion, useAnimation } from 'framer-motion';
import { Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#861C55',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  title: {
    color: "#fff",
    fontSize: 38,
    marginTop: 48,
    fontFamily: 'Roboto Mono, monospace'
  }
}))

const SplashScreen = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const controls = useAnimation()

  useEffect(() => {
    controls.start(i => ({
      opacity: 0,
      transition: { delay: i * 0.92 },
    }))

    setTimeout(() => {
      history.push('/onboarding-one')
    }, 2000)
    // eslint-disable-next-line
  }, [])

  return (
    <motion.div
      custom={2} animate={controls}
      className={classes.root}
    >
      <img src={Logo} alt="ups" />
      <Typography className={classes.title}>Psitesis</Typography>
    </motion.div>
  )
}

export default SplashScreen
