import React from 'react';
import Education from './education/education';
import Experiences from './experiences/experiences';
import Projects from './projects/projects';
import Techs from './techs/techs';

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