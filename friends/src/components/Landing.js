import React from "react";
import { useHistory } from "react-router-dom";
import Login from "./Login";

const Landing = () => {
  const history = useHistory();
  return (
    <div className="landing">
      <h1>LAnding Page</h1>
      <Login />
      <button
        onClick={() => {
          history.push("/friends");
        }}
      >
        Friends Protected Route
      </button>
    </div>
  );
};

export default Landing;
