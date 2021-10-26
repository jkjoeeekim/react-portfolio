import React from 'react';
import Splash from './splash';
import { Provider } from 'react-redux';

class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <Splash />
      </Provider>
    );
  }
}

export default Root;