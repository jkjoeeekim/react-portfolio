import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import EducationCard from './education_card';
import ProjectsCard from './projects_card';
import SkillsCard from './skills_card';
import ExperienceCard from './experience_card';

class Cards extends React.Component {
  constructor(props) {
    super(props);

    this.showCard = this.showCard.bind(this);
  }

  expandCard(cardName) {
    const elem = document.getElementById(`${cardName}`);
    elem.id = `${cardName}-cards-hovered`;
  }

  shrinkCard(cardName) {
    const elem = document.getElementById(`${cardName}-cards-hovered`);
    elem.id = `${cardName}`;
  }

  showCard(cardName) {
    console.log(this.props);
    this.props.receiveCard(cardName);
  }

  expandButton() {
    const elem = document.getElementsByClassName('shrink-button')[0];
    console.log(document.getElementsByClassName('shrink-button'), elem);
    if (!!elem) { elem.classList.add('shrink-button-expanded'); }
  }

  shrinkButton() {
    const elem = document.getElementsByClassName('shrink-button')[0];
    console.log(document.getElementsByClassName('shrink-button'), elem);
    if (!!elem) { elem.classList.remove('shrink-button-expanded'); }
  }

  render() {
    // switch (this.props.display) {
    //   case 'education-card':
    //     return (
    //       <EducationCardExpanded />
    //     );
    //   case 'projects-card':
    //     return (
    //       <ProjectsCardExpanded />
    //     );
    //   default:
    //     return (
    //       <div className="cards-container">
    //         <EducationCard store={this.props.store} expandCard={this.expandCard} shrinkCard={this.shrinkCard} showCard={this.showCard}></EducationCard>
    //         <ProjectsCard store={this.props.store} expandCard={this.expandCard} shrinkCard={this.shrinkCard} showCard={this.showCard}></ProjectsCard>
    //       </div>
    //     );
    // }
    return (
      <AnimatePresence>
        <motion.div className="cards-container">
          <motion.div className="cards-container-left">
            <EducationCard store={this.props.store} expandCard={this.expandCard} shrinkCard={this.shrinkCard} showCard={this.showCard} expandButton={this.expandButton} shrinkButton={this.shrinkButton}></EducationCard>
            <ExperienceCard store={this.props.store} expandCard={this.expandCard} shrinkCard={this.shrinkCard} showCard={this.showCard} expandButton={this.expandButton} shrinkButton={this.shrinkButton}></ExperienceCard>
          </motion.div>
          <motion.div className="cards-container-right">
            <ProjectsCard store={this.props.store} expandCard={this.expandCard} shrinkCard={this.shrinkCard} showCard={this.showCard} expandButton={this.expandButton} shrinkButton={this.shrinkButton}></ProjectsCard>
            <SkillsCard store={this.props.store} expandCard={this.expandCard} shrinkCard={this.shrinkCard} showCard={this.showCard} expandButton={this.expandButton} shrinkButton={this.shrinkButton}></SkillsCard>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );

  }
}

export default Cards;