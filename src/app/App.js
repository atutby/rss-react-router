import React, { Component } from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import Home from "./home/home";
import Levels from "./levels/levels";
import { Blocking } from "./blocking/blocking";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/levels" activeClassName="active">
                Levels
              </NavLink>
            </li>
            <li>
              <NavLink to="/blocking" activeClassName="active">
                Blocking
              </NavLink>
            </li>
          </ul>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/levels" component={Levels} />
            <Route path="/blocking" component={Blocking} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
