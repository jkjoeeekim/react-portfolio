import { connect } from 'react-redux';
import { receiveCard } from '../../actions/card_action';
import Cards from './cards';

const mSTP = (state, ownParams) => ({
  state: state,
  // display: state.splash.display,
  ownParams
});

const mDTP = (dispatch) => ({
  receiveCard: (cardName) => dispatch(receiveCard(cardName)),
});

export default connect(mSTP, mDTP)(Cards);