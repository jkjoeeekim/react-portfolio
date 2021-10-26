import React from "react";

class EducationCard extends React.Component {
  constructor(props) {
    super(props);
    this.cardName = 'education-card';
  }

  render() {
    return (
      <div 
        onMouseEnter={() => this.props.expandCard(this.cardName)}
        onMouseLeave={() => this.props.shrinkCard(this.cardName)}
        id={this.cardName}
        className="cards"
      >
        <p>Education</p>
      </div>
    );
  }
}

export default EducationCard;