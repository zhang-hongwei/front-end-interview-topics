import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./App.css";

import A from "./pages/a"
import B from "./pages/b"

//TODO Web Template Studio: Add routes for your new pages here.
class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Link to="/a">a</Link>
      <Link to="/b">b</Link>

        <Switch>
          <Route exact path = "/" component = { A } />
          <Route path = "/a" component = { A } />
          <Route path = "/b" component = { B } />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
