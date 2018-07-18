import React, { Component } from "react";
import { BrowserRouter, Switch, Route, NavLink, Redirect } from "react-router-dom";
import Home from "./home/home";
import Levels from "./levels/levels";
import { Blocking } from "./blocking/blocking";
import { Miss } from './miss/miss';
import NoMatch from './miss/no-match';
import { QueryParams } from './query/query';
import fakeAuth from './auth/auth';
import Login from './auth/login';
import Protected from './auth/protected';
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
            <li>
              <NavLink to="/miss" activeClassName="active">
                Miss
              </NavLink>
            </li>
            <li>
              <NavLink to="/query-params" activeClassName="active">
                Query Params
              </NavLink>
            </li>
            <li>
              <NavLink to="/protected" activeClassName="active">
                Protected
              </NavLink>
            </li>
          </ul>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/levels" component={Levels} />
            <Route path="/blocking" component={Blocking} />
            <Route path="/miss" component={Miss} />
            <Route path="/query-params" component={QueryParams} />
            <Route path="/login" component={Login} />
            <Route
              path="/protected"
              component={() =>
                fakeAuth.isAuthenticated ? (
                  <Protected />
                ) : (
                  <Redirect
                    to={{
                      pathname: "/login",
                      state: { from: "/protected" }
                    }}
                  />
                )
              }
            />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
