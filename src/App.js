import React, { useState } from "react";
import { Router, Link } from "@reach/router";
import { render } from "react-dom";
import Details from "./Details";
import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";

const App = () => {
  const themeHook = useState("peru");

  return (
    <ThemeContext.Provider value={themeHook}>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </ThemeContext.Provider>
  );
};

render(<App />, document.getElementById("root"));
