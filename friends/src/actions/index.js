import axiosWithAuth from "../utils/axiosWithAuth";

export const FETCHING_FRIENDS_START = "FETCHING_FRIENDS_START";
export const FETCHING_FRIENDS_SUCCESS = "FETCHING_FRIENDS_SUCCESS";
export const FETCHING_FRIENDS_FAILURE = "FETCHING_FRIENDS_FAILURE";

export const fetchFriends = () => (dispatch) => {
  //start process - friendsLoading state update
  dispatch({ type: FETCHING_FRIENDS_START });

  axiosWithAuth()
    .get("/friends")
    .then((res) => {
      console.log("axiosWithAuth /friends response: ", res.data);
      dispatch({ type: FETCHING_FRIENDS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log("axiosWithAuth err: ", err);
      dispatch({ type: FETCHING_FRIENDS_FAILURE, payload: err });
    });
};
