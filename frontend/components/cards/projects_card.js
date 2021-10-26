import React from "react";

class ProjectsCard extends React.Component {
  constructor(props) {
    super(props);
    this.cardName = 'projects-card';
  }

  render() {
    return (
      <div
        onMouseEnter={() => this.props.expandCard(this.cardName)}
        onMouseLeave={() => this.props.shrinkCard(this.cardName)}
        onClick={() => this.props.showCard(this.cardName)}
        id={this.cardName}
        className="cards"
      >
        <p className="cards-text">Tech stacks</p>
        <p>Projects</p>
      </div>
    );
  }
}

export default ProjectsCard;