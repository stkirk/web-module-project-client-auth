const initialState = {
  friends: [],
  loading: false,
  error: "",
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      console.log("Error: unknown action type");
      return state;
  }
};
