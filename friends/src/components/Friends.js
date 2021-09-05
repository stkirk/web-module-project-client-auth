import React, { useEffect } from "react";
import Friend from "./Friend";
import { connect } from "react-redux";
import axiosWithAuth from "../utils/axiosWithAuth";

const Friends = (props) => {
  useEffect(() => {
    console.log("Friends protected route component mounted");
    axiosWithAuth()
      .get("/friends")
      .then((res) => {
        console.log("axiosWithAuth /friends response: ", res);
      })
      .catch((err) => {
        console.log("axiosWithAuth err: ", err);
      });
  }, []);

  return (
    <div className="friends-list">
      <h1>My Friends</h1>
      {props.loadingFriends ? (
        <h2>Fetching Friends...</h2>
      ) : (
        props.friends.map((friend) => <Friend />)
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loadingFriends: state.loadingFriends,
    friends: state.friends,
  };
};

export default connect(mapStateToProps, {})(Friends);
