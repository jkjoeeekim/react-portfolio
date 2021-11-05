import React from 'react';
import Header from './header/top_nav';
import Cards from './cards/cards_container';
import Socials from './socials/socials';
import About from './about/about';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header store={this.props.store}></Header>
        <Cards></Cards>
        <Socials store={this.props.store}></Socials>
        <About store={this.props.store}></About>
      </div>
    );
  }
}

export default Splash;