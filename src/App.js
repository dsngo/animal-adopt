import React, { useState } from "react";
import { Router } from "@reach/router";
import { render } from "react-dom";
import Details from "./Details";
import NavBar from "./NavBar";
import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";

const App = () => {
  const themeHook = useState("peru");

  return (
    <ThemeContext.Provider value={themeHook}>
      <NavBar />
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </ThemeContext.Provider>
  );
};

render(<App />, document.getElementById("root"));
