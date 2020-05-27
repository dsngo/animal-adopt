import React, { useState, lazy, Suspense } from "react";
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
      <Suspense fallback={<h1>loading route …</h1>}>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </Suspense>
    </ThemeContext.Provider>
  );
};

render(<App />, document.getElementById("root"));
