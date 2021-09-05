import React, { useEffect } from "react";
import Friend from "./Friend";
import { connect } from "react-redux";

const Friends = (props) => {
  useEffect(() => {
    console.log("Friends protected route component mounted");
  }, []);

  return (
    <div className="friends-list">
      <h1>My Friends</h1>
      <Friend />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {})(Friends);
