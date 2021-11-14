import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "../pages/main";
import Home from "../pages/home";

const router = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/testing">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
};

export default router;
