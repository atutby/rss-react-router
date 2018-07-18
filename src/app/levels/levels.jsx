import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Level from "./level/level";

const Levels = props => {
  return (
    <div>
      <h1>Levels</h1>
      <p>
        With the help of "Match" Component we can specify the Component we want
        to render for a particular pattern of the App location/window.pathname.
      </p>
      <p>
        Select a level from Left Navigation to view the content, also notice the
        change in URL.
      </p>
      <div className="leftNavi">
        <ul>
          <li>
            <Link to={props.match.url + "/level1"} className="active">
              Level 1
            </Link>
          </li>
          <li>
            <Link to={props.match.url + "/level2"} className="active">
              Level 2
            </Link>
          </li>
          <li>
            <Link to={props.match.url + "/level3"} className="active">
              Level 3
            </Link>
          </li>
        </ul>
      </div>
      <div className="rightContent">
        <p>Second Level Content will appear here:</p>
        {/*<Switch>*/}
        <Route path={`${props.match.url}/:level`} component={Level} />
        {/*</Switch>*/}
      </div>
    </div>
  );
};

export default Levels;
