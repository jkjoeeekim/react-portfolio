// import React from "react";

// class ExperienceCard extends React.Component {
//   constructor(props) {
//     super(props);
//     this.cardName = 'experience-card';
//   }

//   render() {
//     return (
//       <div
//         onMouseEnter={() => this.props.expandCard(this.cardName)}
//         onMouseLeave={() => this.props.shrinkCard(this.cardName)}
//         id={this.cardName}
//         className="cards"
//       >
//         <p>Experience</p>
//       </div>
//     );
//   }
// }

// export default ExperienceCard;

// Using hooks //
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Content from './content/content';

const variants = {
  active: {
    position: 'absolute',
    height: '90vh',
    width: '90vw',
    top: '-45vh',
    left: '-13vw',
    backgroundColor: 'rgb(82, 82, 82)',
    borderRadius: '30px',
    border: '1px solid rgb(249, 156, 23)',
    boxShadow: '0px 0px 13px rgba(249, 156, 23, 100%)',
    transition: '3s',
    zIndex: '500',
  },
  inActive: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    borderRadius: '20px',
    backgroundColor: 'rgb(51,51,51, 0%)',
    borderThickness: '0px',
    // boxShadow: "0px 0px 3px rgba(208, 208, 208, 70%)",
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    zIndex: '24',
    transition: '3s',
  }
};
const ExperienceCard = (props) => {
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
        onMouseEnter={() => props.expandCard('experience-card')}
        onMouseLeave={() => toggleAndShrink('experience-card')}
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.4 }}
        id='experience-card'
        className="cards"
      >
        <motion.div
          animate={isToggled ? "active" : "inActive"}
          variants={variants}
          id='toggle-experience-button'
        >
          <motion.div
            onClick={() => setToggle(!isToggled)}
            className={isToggled ? 'shrink-button' : 'expand-button'}
            onMouseEnter={() => props.expandButton()}
            onMouseLeave={() => props.shrinkButton()}
            animate={{ opacity: 1 }}
          >
            {isToggled ? (
              <motion.div
                className='close-button'
              >
                <i className="far fa-times-circle close-icon"></i>
              </motion.div>
            ) : (
              <motion.div>

              </motion.div>
            )}
          </motion.div>
          {isToggled ? (
            <motion.div>
              <motion.div id="icons">
                <motion.button id="left-icon">
                  <motion.div className="left-arrow-icon">
                    <i className="fas fa-angle-double-left"></i>
                  </motion.div>
                </motion.button>
                <motion.button id="right-icon">
                  <motion.div className="right-arrow-icon">
                    <i className="fas fa-angle-double-right"></i>
                  </motion.div>
                </motion.button>
              </motion.div>
              <Content />
            </motion.div>
          ) : (
            <div></div>
          )}
        </motion.div>
        <p className="cards-text">Experiences</p>
      </motion.div>
    </AnimatePresence>
  );
};

export default ExperienceCard;;