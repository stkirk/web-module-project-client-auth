import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Login from "./Login";

const Landing = (props) => {
  const history = useHistory();
  return (
    <div className="landing">
      <h1>LANDING PAGE</h1>
      {props.loadingLogin ? <h1>Logging in...</h1> : <Login />}
      <button
        onClick={() => {
          history.push("/friends");
        }}
      >
        Friends Protected Route
      </button>
      <button onClick={() => localStorage.removeItem("token")}>Logout</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loadingLogin: state.loadingLogin,
  };
};

export default connect(mapStateToProps, {})(Landing);
