import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Level } from "../levels/level/level";

export const QueryParams = ({ match: { url } }) => (
  <div>
    <h1>Reading the query parameters.</h1>
    <p>Check out the links below to view the queryparams value.</p>
    <div className="leftNavi">
      <ul>
        <li>
          <Link
            to={{
              pathname: `${url}/level1`,
              search: '?abc=23'
            }}
            className="active"
          >
            Level 1
          </Link>
        </li>
        <li>
          <Link
            to={{
              pathname: `${url}/level2`,
              search: "?abc=2&xyz=4"
            }}
            className="active"
          >
            Level 2
          </Link>
        </li>
        <li>
          <Link to={`${url}/level3?xyz=HavingFun`} className="active">
            Level 3
          </Link>
        </li>
      </ul>
    </div>
    <div className="rightContent">
      <p>Second Level Content will appear here:</p>
      <Switch>
        <Route path={`${url}/:level`} component={Level} />
      </Switch>
    </div>
  </div>
);
