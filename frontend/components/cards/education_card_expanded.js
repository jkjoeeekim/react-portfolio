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
          <motion.div id="icons">
            <motion.div id="left-icon">
              <i class="fas fa-angle-double-left left-arrow-icon"></i>
            </motion.div>
            <motion.div id="right-icon">
              <i class="fas fa-angle-double-right right-arrow-icon"></i>
            </motion.div>
          </motion.div>
          <p className="">card</p>
        </div>
      </div>
    );
  }
}

export default EducationCardExpanded;