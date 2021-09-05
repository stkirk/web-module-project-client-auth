import {
  FETCHING_FRIENDS_FAILURE,
  FETCHING_FRIENDS_START,
  FETCHING_FRIENDS_SUCCESS,
} from "../actions";

const initialState = {
  friends: [],
  loadingLogin: false,
  loadingFriends: false,
  friendsError: "",
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS_START:
      return { ...state, loadingFriends: true };
    case FETCHING_FRIENDS_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        loadingFriends: false,
      };
    case FETCHING_FRIENDS_FAILURE:
      return {
        ...state,
        friendsError: action.payload,
        loadingFriends: false,
      };

    default:
      console.log("Error: unknown action type");
      return state;
  }
};
