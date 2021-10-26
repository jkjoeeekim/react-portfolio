import React from "react";
import Name from './name';
import Info from "./info";

class TopNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="top-nav">
        <Info store={this.props.store}></Info>
        <Name store={this.props.store}></Name>
      </div>
    );
  }
}

export default TopNav;