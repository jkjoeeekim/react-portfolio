import React from 'react';
import Splash from './splash';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <HashRouter>
          <Splash />
        </HashRouter>
      </Provider>
    );
  }
}

export default Root;