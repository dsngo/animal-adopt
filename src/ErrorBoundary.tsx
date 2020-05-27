import React, { Component, ErrorInfo, ReactNode } from "react";
import { Link, Redirect } from "@reach/router";

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };

  static getDerivedStateFromError(): Record<string, unknown> | null {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error("ErrorBoundary caught an error", error, info); // eslint-disable-line
  }

  componentDidUpdate(): void {
    // eslint-disable-next-line
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  render(): ReactNode {
    const { hasError, redirect } = this.state;

    if (redirect) {
      return <Redirect to="/" noThrow />;
    }

    if (hasError) {
      return (
        <h1>
          There was an error with this listing. <Link to="/">Click here</Link> to go
          back to the home page or wait five seconds.
        </h1>
      );
    }

    return this.props.children; // eslint-disable-line
  }
}

export default ErrorBoundary;
