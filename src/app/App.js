import React, { Component } from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import Home from "./home/home";
import Levels from "./levels/levels";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <NavLink to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/basic-routing" activeClassName="active">
                BasicRouting
              </NavLink>
            </li>
          </ul>

          <Route path="/" component={Home} />
          <Route path="/basic-routing" component={Levels} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
