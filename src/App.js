import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import { Home, Starships, Vehicles, Species, People } from "./pages";


function App(props) {
  return (
    <Switch>
      <Route exact path="/app" component={Home} />

      <Route path="/app/starships" component={Starships} />

      <Route path="/app/people" component={People} />

      <Route path="/app/vehicles" component={Vehicles} />
      <Route path="/app/species" component={Species} />

      {/* <Redirect to="/" /> */}
    </Switch>
  );
}
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
