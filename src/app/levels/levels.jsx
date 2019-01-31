import React from "react";
import { Route, Link } from "react-router-dom";
import { Level } from "./level/level";

const Levels = ({ match: { url } }) => {
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
            <Link to={`${url}/level1`}>
              Level 1
            </Link>
          </li>
          <li>
            <Link to={`${url}/level2`}>Level 2</Link>
          </li>
          <li>
            <Link to={`${url}/level3`}>Level 3</Link>
          </li>
        </ul>
      </div>
      <div className="rightContent">
        <p>Second Level Content will appear here:</p>
        <Route path={`${url}/:level`} component={Level} />
      </div>
    </div>
  );
};

export default Levels;
