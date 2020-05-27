import React, { useState, lazy } from "react";
import { Router } from "@reach/router";
import { render } from "react-dom";
import NavBar from "./NavBar";
import ThemeContext from "./ThemeContext";

const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));

const App = () => {
  const themeHook = useState("peru");

  return (
    <ThemeContext.Provider value={themeHook}>
      <NavBar />
      <Router>
        <SearchParams />
        <Details path="/details/:id" />
      </Router>
      S
    </ThemeContext.Provider>
  );
};

render(<App />, document.getElementById("root"));
