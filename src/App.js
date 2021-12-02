import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store";
import Users from "./components/Users";
import Posts from "./components/Posts";
import Comments from "./components/Comments";
import Box from "@mui/material/Box";
import Drawer from "./components/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import ButtonAppBar from "./components/AppBar";
import Toolbar from "@mui/material/Toolbar";
const useStyles = makeStyles({
  container: {
    display: "flex",
  },
});

export default function App() {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <Router>
        <div className="head">
          <ButtonAppBar />
        </div>
        <div className={classes.container}>
          <Drawer />

          <Switch>
            <Route exact path="/" render={(props) => <Users {...props} />} />
            <Route
              path="/Comments"
              render={(props) => <Comments {...props} />}
            />
            <Route path="/Posts" render={(props) => <Posts {...props} />} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}
