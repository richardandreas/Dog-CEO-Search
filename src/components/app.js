import React from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Search from "./views/Search";
import MySavedDogs from "./views/MySavedDogs";
import "../stylesheets/app.css";

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/search" element={<Search />} />
          <Route exact path="/my_saved_dogs" element={<MySavedDogs />} />
          <Route>
            <Navigate to="/search" />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
