import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CV from "./components/Cv/Cv";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/cv-react/cv/" component={CV} />
      </Switch>
    </Router>
  );
}

export default App;
