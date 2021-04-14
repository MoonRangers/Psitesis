import "./App.css";
import "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Admin/login";
import Panel from "./components/Admin/Panel";
import Home from "./components/Sections/Home";
import Tesis from "./components/Sections/Guiadetesis";
import SplashScreen from "../src/components/SplashScreen";

import BottomNav from "./components/Navigation/BottomNavigation";
import AppBar from "./components/Navigation/AppBar";
import OnboardingScreenOne from "./components/OnboardingScreenOne";
import OnboardingScreenTwo from "./components/OnboardingScreenTwo";

const useStyles = makeStyles((theme) => ({
  content: {
    [theme.breakpoints.up("md")]: {
      marginLeft: "240px",
    },
    padding: "32px",
    display: "flex",
  },
}));

function App() {
  const classes = useStyles();

  /* 
    Every new component must receive the following prop for the className of the wrapper:
      styles={classes.content}
  */

  return (
    <Router className="app">
      <Route exact path="/" component={SplashScreen} />
      <Route exact path="/onboarding-one" component={OnboardingScreenOne} />
      <Route exact path="/onboarding-two" component={OnboardingScreenTwo} />
      <Route path="/app">
        <AppBar />
      </Route>
      <Route path="/app">
        <BottomNav />
      </Route>
      <Route exact path="/app">
        <Home styles={classes.content} />
      </Route>
      <Route exact path="/app/admin/login">
        <Login styles={classes.content} />
      </Route>
      <Route exact path="/app/admin/panel">
        <Panel styles={classes.content} />
      </Route>
      <Route exact path="/app/guiadetesis">
        <Tesis styles={classes.content} />
      </Route>
    </Router>
  );
}

export default App;
