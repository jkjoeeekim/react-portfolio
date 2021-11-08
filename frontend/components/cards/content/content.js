import React from 'react';
import Education from './education/education';
import Experiences from './experiences/experiences';
import Projects from './projects/projects';
import Techs from './techs/techs';
import { motion } from 'framer-motion';

class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const display = () => {
      switch (this.props.card) {
        case "education":
          return (<Education></Education>);
        case "experience":
          return (<Experiences></Experiences>);
        case "projects":
          return (<Projects></Projects>);
        case "skills":
          return (<Techs></Techs>);
        case "empty":
          return (<motion.div id="empty-content"></motion.div>);
      }
    };

    return (
      <div id="content">
        {display()}
      </div>
    );
  }
}

export default Content;