import React from "react";
import { motion } from "framer-motion";

class EducationCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: 'education-card'
    }
  }

  render() {
    return (
      <div
        onMouseEnter={() => this.props.expandCard(this.state.cardName)}
        onMouseLeave={() => this.props.shrinkCard(this.state.cardName)}
        onClick={() => this.props.showCard(this.state.cardName)}
        id={this.state.cardName}
        className="cards"
      >
        <p className="cards-text">Education</p>
        <p>Experience</p>
      </div>
    );
  }
}

export default EducationCard;