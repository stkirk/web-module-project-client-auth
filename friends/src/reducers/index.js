import {
  CREATE_FRIEND_FAILURE,
  CREATE_FRIEND_START,
  CREATE_FRIEND_SUCCESS,
  FETCHING_FRIENDS_FAILURE,
  FETCHING_FRIENDS_START,
  FETCHING_FRIENDS_SUCCESS,
} from "../actions";

const initialState = {
  friends: [],
  loadingLogin: false,
  loadingFriends: false,
  friendsError: "",
  loadingCreateFriend: false,
  createFriendError: "",
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
    case CREATE_FRIEND_START:
      return { ...state, loadingCreateFriend: true };
    case CREATE_FRIEND_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        loadingCreateFriend: false,
      };
    case CREATE_FRIEND_FAILURE:
      return {
        ...state,
        createFriendError: action.payload,
        loadingCreateFriend: false,
      };

    default:
      console.log("Error: unknown action type");
      return state;
  }
};
