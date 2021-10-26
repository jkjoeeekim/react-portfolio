import React from "react";

class ProjectsCardExpanded extends React.Component {
  constructor(props) {
    super(props);
    this.cardName = 'projects-card-expanded';
  }

  render() {
    return (
      <div
        id={this.cardName}
        className="card-detail"
      >
        <p className="">card</p>
      </div>
    );
  }
}

export default ProjectsCardExpanded;