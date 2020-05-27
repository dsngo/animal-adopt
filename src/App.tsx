import React, { lazy, Suspense, useState } from "react";
import { Router } from "@reach/router";
import { render } from "react-dom";
// import { Provider } from "react-redux";
// import { Store, AnyAction } from "redux";
import NavBar from "./NavBar";
import ThemeContext from "./ThemeContext";
// import store from "./store";

const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));

const App = () => {
  const themeHook = useState("peru");

  return (
    <ThemeContext.Provider value={themeHook}>
      {/* <Provider store={store as Store<unknown, AnyAction>}> */}
      <>
        <NavBar />
        <Suspense fallback={<h1>loading route …</h1>}>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </Suspense>
      </>
      {/* </Provider> */}
    </ThemeContext.Provider>
  );
};

render(<App />, document.getElementById("root"));
