import React from "react";

class SkillsCard extends React.Component {
  constructor(props) {
    super(props);
    this.cardName = 'skills-card'
  }

  render() {
    return (
      <div 
        onMouseEnter={() => this.props.expandCard(this.cardName)}
        onMouseLeave={() => this.props.shrinkCard(this.cardName)}
        id={this.cardName}
        className="cards"
      >
      <p>Skills</p>
      </div>
    );
  }
}

export default SkillsCard;