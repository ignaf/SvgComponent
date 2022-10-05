import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Scada from "./Components/Scada";
import PlanosLineas from "./Components/PlanosLineas";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/scada" component={Scada} />
        <Route path="/planos" component={PlanosLineas} />
        <Route path="/" component={Scada} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
