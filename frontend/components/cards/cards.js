import React from 'react';
import EducationCard from './education_card';
import EducationCardExpanded from './education_card_expanded';
import ProjectsCard from './projects_card';
import ProjectsCardExpanded from './projects_card_expanded';

class Cards extends React.Component {
  constructor(props) {
    super(props);

    this.showCard = this.showCard.bind(this);
  }

  expandCard(cardName) {
    const elem = document.getElementById(`${cardName}`);
    elem.classList.add("cards-hovered");
  }

  shrinkCard(cardName) {
    const elem = document.getElementById(`${cardName}`);
    elem.classList.remove("cards-hovered");
  }

  showCard(cardName) {
    console.log(this.props);
    this.props.receiveCard(cardName);
  }

  render() {
    switch (this.props.display) {
      case 'education-card':
        return (
          <EducationCardExpanded />
        );
      case 'projects-card':
        return (
          <ProjectsCardExpanded />
        );
      default:
        return (
          <div className="cards-container">
            <EducationCard store={this.props.store} expandCard={this.expandCard} shrinkCard={this.shrinkCard} showCard={this.showCard}></EducationCard>
            <ProjectsCard store={this.props.store} expandCard={this.expandCard} shrinkCard={this.shrinkCard} showCard={this.showCard}></ProjectsCard>
          </div>
        );
    }
  }
}

export default Cards;