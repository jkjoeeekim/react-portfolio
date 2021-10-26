const initialState = {
  isAuthenticated: false,
  user: {}
};

const SplashReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    default:
      return state;
  }
}

export default SplashReducer;