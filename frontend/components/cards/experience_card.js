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
import ReactTooltip from 'react-tooltip';
import Content from './content/content';

const variants = {
  active: {
    position: 'absolute',
    height: '87vh',
    width: '90vw',
    top: '-47vh',
    left: '-20.25vw',
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

  const toggleTooltip = () => {
    ReactTooltip.hide();
    setToggle(!isToggled);
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
        key='content1'
      >
        <motion.div
          animate={isToggled ? "active" : "inActive"}
          variants={variants}
          id='toggle-experience-button'
        >
          <motion.div
            onClick={() => toggleTooltip()}
            className={isToggled ? 'shrink-button' : 'expand-button'}
            animate={{ y: '-25vh', opacity: 1 }}
            transition={{ delay: 0.5 }}
            data-tip='Click to toggle'
            cursor='pointer'
          >
            {isToggled ? (
              <motion.div
                className="hide-button"
              >
                <motion.div
                  className='close-button'
                  whileHover={{
                    scale: 1.25,
                    transition: { type: "spring", bounce: 0.8, delay: 0 },
                  }}
                >
                  <i className="far fa-times-circle close-icon"></i>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div>
                <Content card="empty" />
              </motion.div>
            )}
          </motion.div>
          {isToggled ? (
            <motion.div id="content-container">
              {/* <motion.div id="icons">
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
              </motion.div> */}
              <Content card="experience" />
            </motion.div>
          ) : (
            ''
          )}
        </motion.div>
        <p className="cards-text">Experiences</p>
      </motion.div>
      <ReactTooltip delayShow={1000} scrollHide={true} resizeHide={true} clickable={true} />
    </AnimatePresence>
  );
};

export default ExperienceCard;;