import React from "react";
import { motion, AnimatePresence } from 'framer-motion';

class ProjectsCard extends React.Component {
  constructor(props) {
    super(props);
    this.cardName = 'projects-card';
  }

  render() {
    return (
      <AnimatePresence>
        <motion.div
          onMouseEnter={() => this.props.expandCard(this.cardName)}
          onMouseLeave={() => this.props.shrinkCard(this.cardName)}
          onClick={() => this.props.showCard(this.cardName)}
          initial={{ opacity: 0.4 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.4 }}
          id={this.cardName}
          className="cards"
        >
          <p className="cards-text">Tech stacks</p>
          <p>Projects</p>
        </motion.div>
      </AnimatePresence>
    );
  }
}

export default ProjectsCard;