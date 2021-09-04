import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Login from "./Login";

const Landing = (props) => {
  const history = useHistory();
  return (
    <div className="landing">
      <h1>LAnding Page</h1>
      {props.loading ? <h1>Logging in...</h1> : <Login />}
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
    loading: state.loading,
  };
};

export default connect(mapStateToProps, {})(Landing);
