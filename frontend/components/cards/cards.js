import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import EducationCard from './education_card';
import ProjectsCard from './projects_card';
import SkillsCard from './skills_card';
import ExperienceCard from './experience_card';

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false
    };

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
        <motion.div
          initial={{ opacity: 0.4 }}
          animate={{ opacity: 1 }}
          onMouseEnter={() => this.setState({ display: true })}
          onMouseLeave={() => this.setState({ display: false })}
          id="cards-main"
        >
          {this.state.display ? (
            <motion.div
              className="cards-container"
              initial={{ scale: 0, rotate: -90 }}
              animate={{ y: '-50vh', scale: 1, rotate: 0, opacity: 1 }}
              transition={{ delay: 0 }}
            >
              <motion.div
                className="cards-container-left"
              >
                <EducationCard store={this.props.store} expandCard={this.expandCard} shrinkCard={this.shrinkCard} showCard={this.showCard} expandButton={this.expandButton} shrinkButton={this.shrinkButton}></EducationCard>
                <ExperienceCard store={this.props.store} expandCard={this.expandCard} shrinkCard={this.shrinkCard} showCard={this.showCard} expandButton={this.expandButton} shrinkButton={this.shrinkButton}></ExperienceCard>
              </motion.div>
              <motion.div className="cards-container-right">
                <ProjectsCard store={this.props.store} expandCard={this.expandCard} shrinkCard={this.shrinkCard} showCard={this.showCard} expandButton={this.expandButton} shrinkButton={this.shrinkButton}></ProjectsCard>
                <SkillsCard store={this.props.store} expandCard={this.expandCard} shrinkCard={this.shrinkCard} showCard={this.showCard} expandButton={this.expandButton} shrinkButton={this.shrinkButton}></SkillsCard>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              className="cards-container"
              animate={{ y: 0, scale: 0.1, rotate: -45, opacity: 0.5 }}
              transition={{ delay: 0 }}
            >
              <motion.div
                className="cards-container-left"
              >
                <EducationCard store={this.props.store} expandCard={this.expandCard} shrinkCard={this.shrinkCard} showCard={this.showCard} expandButton={this.expandButton} shrinkButton={this.shrinkButton}></EducationCard>
                <ExperienceCard store={this.props.store} expandCard={this.expandCard} shrinkCard={this.shrinkCard} showCard={this.showCard} expandButton={this.expandButton} shrinkButton={this.shrinkButton}></ExperienceCard>
              </motion.div>
              <motion.div className="cards-container-right">
                <ProjectsCard store={this.props.store} expandCard={this.expandCard} shrinkCard={this.shrinkCard} showCard={this.showCard} expandButton={this.expandButton} shrinkButton={this.shrinkButton}></ProjectsCard>
                <SkillsCard store={this.props.store} expandCard={this.expandCard} shrinkCard={this.shrinkCard} showCard={this.showCard} expandButton={this.expandButton} shrinkButton={this.shrinkButton}></SkillsCard>
              </motion.div>
            </motion.div>
          )}
          <motion.div
            id="explore-show-cards"
          >
            <motion.p
              whileHover={{
                scale: 1.2,
                transition: { type: "spring", bounce: 0.75, delay: 0 },
              }}
            >
              EXPLORE
            </motion.p>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );

  }
}

export default Cards;