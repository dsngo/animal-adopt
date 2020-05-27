import React, { useState, FunctionComponent } from "react";
import { css, keyframes } from "@emotion/core";
import { Link } from "@reach/router";

const color = "pink";

const Spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const NavBar: FunctionComponent = () => {
  const [padding, setPadding] = useState(15);

  return (
    <header // eslint-disable-line
      onClick={() => {
        setPadding(padding + 1);
      }}
      css={css`
        background-color: ${color};
        padding: ${padding}px;
      `}
    >
      <Link
        css={css`
          &:hover {
            text-decoration: underline;
          }
        `}
        to="/"
      >
        Adopt Me!
      </Link>
      <span
        css={css`
          display: inline-block;
          animation: 1s ${Spin} linear infinite;
          font-size: 60px;
        `}
        role="img"
        aria-label="logo"
      >
        🐶
      </span>
    </header>
  );
};

export default NavBar;
