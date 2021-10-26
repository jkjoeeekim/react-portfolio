import React from "react";

class ExperienceCard extends React.Component {
  constructor(props) {
    super(props);
    this.cardName = 'experience-card';
  }

  render() {
    return (
      <div
        onMouseEnter={() => this.props.expandCard(this.cardName)}
        onMouseLeave={() => this.props.shrinkCard(this.cardName)}
        id={this.cardName}
        className="cards"
      >
        <p>Experience</p>
      </div>
    );
  }
}

export default ExperienceCard;