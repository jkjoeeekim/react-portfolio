import { RECEIVE_CARD } from '../actions/card_action';

const initialState = {
  display: 'none'
};

const SplashReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CARD:
      return Object.assign({}, { display: action.cardName });
    default:
      return state;
  }
};

export default SplashReducer;