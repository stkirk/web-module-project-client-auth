import axiosWithAuth from "../utils/axiosWithAuth";

export const FETCHING_FRIENDS_START = "FETCHING_FRIENDS_START";
export const FETCHING_FRIENDS_SUCCESS = "FETCHING_FRIENDS_SUCCESS";
export const FETCHING_FRIENDS_FAILURE = "FETCHING_FRIENDS_FAILURE";
export const CREATE_FRIEND_START = "CREATE_FRIEND_START";
export const CREATE_FRIEND_SUCCESS = "CREATE_FRIEND_SUCCESS";
export const CREATE_FRIEND_FAILURE = "CREATE_FRIEND_FAILURE";

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

export const createFriend = (newFriend) => (dispatch) => {
  dispatch({ type: CREATE_FRIEND_START });

  axiosWithAuth()
    .post("/friends", newFriend)
    .then((res) => {
      console.log("Create friend res: ", res);
      dispatch({ type: CREATE_FRIEND_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log("Create friend err: ");
      dispatch({ type: CREATE_FRIEND_FAILURE, payload: err });
    });
};
