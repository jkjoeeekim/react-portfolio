import React from "react";

class EducationCardExpanded extends React.Component {
  constructor(props) {
    super(props);
    this.cardName = 'education-card-expanded';
  }

  render() {
    return (
      <div id='dim-background'>
        <div
          // id={this.cardName}
          className={this.cardName + " card-detail"}
        >
          <p className="">card</p>
        </div>
      </div>
    );
  }
}

export default EducationCardExpanded;