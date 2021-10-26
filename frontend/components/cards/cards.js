import React from 'react';
import EducationCard from './education_card';
import ExperienceCard from './experience_card';
import ProjectsCard from './projects_card';
import SkillsCard from './skills_card';

class Cards extends React.Component {
  constructor(props) {
    super(props);


  }

  expandCard(cardName) {
    // let id = null;
    // const elem = document.getElementById(`${cardName}`);
    // console.log(elem);
    // // debugger;
    // let currentWidth = elem.clientWidth;
    // let currentHeight = elem.clientHeight;
    // let maxHeight = elem.clientHeight + 200;
    // clearInterval(id);
    // id = setInterval(frame, 5);
    // function frame() {
    //   if (currentWidth == maxHeight) {
    //     clearInterval(id);
    //   } else {
    //     elem.style.width = (currentWidth + 1) + "px";
    //     // elem.style.left = currentWidth + "px";
    //   }
    // }
    const elem = document.getElementById(`${cardName}`);
    elem.classList.add("cards-hovered");
  }

  shrinkCard(cardName) {
    const elem = document.getElementById(`${cardName}`);
    elem.classList.remove("cards-hovered");
  }

  render() {
    return (
      <div className="cards-container">
        <EducationCard store={this.props.store} expandCard={this.expandCard} shrinkCard={this.shrinkCard}></EducationCard>
        <ExperienceCard store={this.props.store} expandCard={this.expandCard} shrinkCard={this.shrinkCard}></ExperienceCard>
        <ProjectsCard store={this.props.store} expandCard={this.expandCard} shrinkCard={this.shrinkCard}></ProjectsCard>
        <SkillsCard store={this.props.store} expandCard={this.expandCard} shrinkCard={this.shrinkCard}></SkillsCard>
      </div>
    );
  }
}

export default Cards;