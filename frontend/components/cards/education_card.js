import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EducationCardExpanded from './education_card_expanded';

const z = 30;
const variants = {
  active: {
    position: 'absolute',
    height: '85vh',
    width: '85vw',
    top: '-35vh',
    left: '-5vw',
    backgroundColor: 'rgb(82, 82, 82)',
    borderRadius: '30px',
    boxShadow: '0px 0px 8px rgba(255, 255, 255, 100%)',
    transition: '3s',
    zIndex: z + 1,
  },
  inActive: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    borderRadius: '20px',
    backgroundColor: 'rgb(51,51,51, 0%)',
    // boxShadow: "0px 0px 3px rgba(208, 208, 208, 70%)",
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    zIndex: '24',
    transition: '3s',
  }
};
const EducationCard = (props) => {
  const [isToggled, setToggle] = useState(false);

  const toggleAndShrink = (card) => {
    props.shrinkCard(card);
    console.log(isToggled, setToggle);
    if (isToggled) {
      setToggle(!isToggled);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        onMouseEnter={() => props.expandCard('education-card')}
        onMouseLeave={() => toggleAndShrink('education-card')}
        // onClick={() => this.props.showCard(this.state.cardName)}
        // onClick={() => setToggle(!isToggled)}
        // animate={isToggled ? "active" : "inActive"}
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.4 }}
        id='education-card'
        className="cards"
      >
        <motion.div
          onClick={() => setToggle(!isToggled)}
          animate={isToggled ? "active" : "inActive"}
          variants={variants}
          id='toggle-button'
        >
          {isToggled ? (
            <motion.div id="icons">
              <motion.div id="left-icon">
                <i class="fas fa-angle-double-left left-arrow-icon"></i>
              </motion.div>
              <motion.div id="right-icon">
                <i class="fas fa-angle-double-right right-arrow-icon"></i>
              </motion.div>
            </motion.div>
          ) : (
            ''
          )
          }
        </motion.div>
        <p className="cards-text">Education</p>
        <p>Experience</p>
      </motion.div>
    </AnimatePresence>
  );
};

export default EducationCard;;