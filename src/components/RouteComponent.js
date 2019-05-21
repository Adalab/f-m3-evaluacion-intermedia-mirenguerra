import React from "react";
import PokemonDescription from "./PokemonDescription";
import { Route, Switch } from "react-router-dom";

class RouteComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route
            path="/:id"
            render={routerProps => (
              <PokemonDescription match={routerProps.match} />
            )}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default RouteComponent;
