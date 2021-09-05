import React, { useEffect } from "react";
import Friend from "./Friend";
import { connect } from "react-redux";
import { fetchFriends } from "../actions";

const Friends = (props) => {
  const { fetchFriends } = props;
  useEffect(() => {
    console.log("Friends protected route component mounted");
    fetchFriends();
  }, [fetchFriends]);

  return (
    <div className="friends">
      <h1>My Friends</h1>

      <div className="friends-list">
        {props.loadingFriends ? (
          <h2>Fetching Friends...</h2>
        ) : (
          props.friends.map((friend) => (
            <Friend key={friend.id} friend={friend} />
          ))
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loadingFriends: state.loadingFriends,
    friends: state.friends,
  };
};

export default connect(mapStateToProps, { fetchFriends })(Friends);
