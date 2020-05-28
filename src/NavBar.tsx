/** @jsx jsx */
import React, { useState, FunctionComponent } from "react"; // eslint-disable-line
import { jsx, css, keyframes } from "@emotion/core";
import { Link } from "@reach/router";

const color = "pink";

const Spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const NavBar: FunctionComponent = () => {
  const [padding] = useState(15);

  return (
    <header // eslint-disable-line
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
        aria-label="logo"
        css={css`
          display: inline-block;
          animation: 5s ${Spin} linear infinite;
          font-size: 100px;
          &:hover {
            animation: 1s ${Spin} linear infinite reverse;
            text-decoration: underline;
          }
        `}
        role="img"
      >
        🐶
      </span>
    </header>
  );
};

export default NavBar;
