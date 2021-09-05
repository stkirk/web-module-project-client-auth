const initialState = {
  friends: [],
  loadingLogin: false,
  loadingFriends: false,
  error: "",
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      console.log("Error: unknown action type");
      return state;
  }
};
