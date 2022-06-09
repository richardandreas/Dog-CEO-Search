import React from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import Search from "./views/Search";
import MySavedDogs from "./views/MySavedDogs";
import "../stylesheets/app.css";

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Switch>
          <Route path="/search" component={Search} />
          <Route exact path="/my_saved_dogs" component={MySavedDogs} />
          <Route>
            <Redirect to="/search" />
          </Route>
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
