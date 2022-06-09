import React from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Search from "./Views/Search";
import MySavedDogs from "./Views/MySavedDogs";
import "../stylesheets/app.css";

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/search" element={<Search />} />
          <Route exact path="/my_saved_dogs" element={<MySavedDogs />} />

          <Route path="*" element={<Navigate to="/search" />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
