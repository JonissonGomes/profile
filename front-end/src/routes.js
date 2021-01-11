// Importando librarys
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Importando páginas
import About from "./pages/about/about";
import Add from "./pages/add/add";
import Experience from "./pages/experience/experience";
import Welcome from "./pages/welcome/welcome";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/about" component={About} />
        <Route path="/add" component={Add} />
        <Route path="/experience" component={Experience} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
