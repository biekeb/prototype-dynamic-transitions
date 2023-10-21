import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>404</h1>
      <h2>Page not found</h2>
      <p>
        {error.status}
        {error.statusText}
        {error.message}
      </p>

      <a href="/">go home</a>
    </div>
  );
};

export default ErrorPage;
