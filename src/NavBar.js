import React, { useState } from "react";
import { css } from "@emotion/core";
import { Link } from "@reach/router";

const color = "pink";

const NavBar = () => {
  const [padding, setPadding] = useState(15);

  return (
    <header
      css={css`
        background-color: ${color};
        padding: 15px;
      `}
    >
      <Link to="/">Adopt Me!</Link>
      <span role="img" aria-label="logo">
        🐶
      </span>
    </header>
  );
};

export default NavBar;
