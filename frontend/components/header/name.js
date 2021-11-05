import React from "react";
import { motion } from 'framer-motion';

class Name extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 'name'
    };
  }

  boldLetters() {
    const greyedElements = document.getElementsByClassName('greyed-out-letters');
    const highlightElements = document.getElementsByClassName('highlight');

    this.setState({ id: 'name-hovered' });

    for (let i = 0; i < greyedElements.length; i++) {
      greyedElements[i].classList.add("greyed-out-letters-unbold");
    }

    for (let i = 0; i < highlightElements.length; i++) {
      highlightElements[i].classList.add("highlight-bold");
    }
  }

  unboldLetters() {
    const greyedElements = document.getElementsByClassName('greyed-out-letters');
    const highlightElements = document.getElementsByClassName('highlight');
    // const nameBanner = document.getElementById("name-hovered");

    this.setState({ id: 'name' });

    for (let i = 0; i < highlightElements.length; i++) {
      highlightElements[i].classList.remove("highlight-bold");
    }

    for (let i = 0; i < greyedElements.length; i++) {
      greyedElements[i].classList.remove("greyed-out-letters-unbold");
    }
  }

  render() {
    return (
      <motion.div
        layout
        id={this.state.id}
        transition={{ type: "spring", bounce: 1 }}
        onMouseEnter={() => this.boldLetters()}
        onMouseLeave={() => this.unboldLetters()}
      >
        <motion.div className="header-title">
          <p className="first-letters highlight letters">J</p>
          <p className="highlight letters">o</p>
          <p className="greyed-out-letters">s</p>
          <p className="highlight letters">e</p>
          <p className="greyed-out-letters">ph</p>
          <p className="first-letters greyed-out-letters">S.</p>
          <p className="first-letters highlight letters">Kim</p>
        </motion.div>
      </motion.div>
    );
  }
}

export default Name;