import "./App.css";
import "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Route } from "react-router-dom";
import { Box } from "@material-ui/core";

import Login from "./client/components/Admin/login.jsx";
import Panel from "./client/components/Admin/Panel";
import Home from "./client/components/Sections/Home";
import Tesis from "./client/components/Sections/Guiadetesis";

import BottomNav from "./client/components/Navigation/BottomNavigation";
import AppBar from "./client/components/Navigation/AppBar";

function App() {
  const useStyles = makeStyles((theme) => ({
    content: {
      [theme.breakpoints.up("md")]: {
        marginLeft: "240px",
      },
      padding: "32px",
      display: "flex",
    },
  }));

  const classes = useStyles();

  return (
    <Box className="app">
      <AppBar />
      <BottomNav />

      <Box className={classes.content}>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin/login" component={Login} />
        <Route exact path="/admin/panel" component={Panel} />
        <Route exact path="/guiadetesis" component={Tesis} />
      </Box>
    </Box>
  );
}

export default App;
