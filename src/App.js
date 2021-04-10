import "./App.css";
import "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Box } from "@material-ui/core";

import Login from "./client/components/Admin/login";
import Panel from "./client/components/Admin/Panel";
import Home from "./client/components/Sections/Home";
import Tesis from "./client/components/Sections/Guiadetesis";
import SplashScreen from "../src/components/SplashScreen";

import BottomNav from "./client/components/Navigation/BottomNavigation";
import AppBar from "./client/components/Navigation/AppBar";

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
