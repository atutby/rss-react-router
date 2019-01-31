import React from "react";

export const Level = ({ location, match }) => (
  <div>
    <h2>This is {match.params.level}!</h2>
    <h3>this.props.location</h3>
    <p>{JSON.stringify(location)}</p>
    <h3>this.props.match</h3>
    <p>{JSON.stringify(match)}</p>
    {!!location.search && (
      <p>
        <strong>Query String:</strong>{" "}
        {JSON.stringify(location.search, null, 2)}
      </p>
    )}
  </div>
);
