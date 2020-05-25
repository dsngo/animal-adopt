import React from "react";
import { Router, Link } from "@reach/router";
import { render } from "react-dom";
import Details from "./Details";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </>
  );
};

render(<App />, document.getElementById("root"));
