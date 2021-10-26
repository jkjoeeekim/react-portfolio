import React from 'react';
import Header from './header/top_nav';
import Cards from './cards/cards_container';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header store={this.props.store}></Header>
        <Cards></Cards>
      </div>
    );
  }
}

export default Splash;