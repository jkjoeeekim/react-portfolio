import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  active: {
    position: 'absolute !important',
    height: '80vh !important',
    width: '80vw !important',
    top: '0vh !important',
    left: '10vw !important',
    backgroundColor: 'rgb(82, 82, 82) !important',
    borderRadius: '30px !important',
    boxShadow: '0px 0px 8px rgba(255, 255, 255, 100%) !important',
    transition: '2s !important',
    zIndex: '5 !important',
  },
  inActive: {
    height: '45vh',
    width: '22vw',
    borderRadius: '20px',
    backgroundColor: 'rgb(51,51,51)',
    boxShadow: "0px 0px 3px rgba(208, 208, 208, 70%)",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    transition: '0.4s',
    display: 'none'
  }
};
const EducationCard = (props) => {
  const [isToggled, setToggle] = useState(false);

  return (
    <AnimatePresence>
      <motion.div
        onMouseEnter={() => props.expandCard('education-card')}
        onMouseLeave={() => props.shrinkCard('education-card')}
        // onClick={() => this.props.showCard(this.state.cardName)}
        // onClick={() => setToggle(!isToggled)}
        // animate={isToggled ? "active" : "inActive"}
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.4 }}
        // variants={variants}
        id='education-card'
        className="cards"
      >
        <motion.div
          onClick={() => setToggle(!isToggled)}
          animate={isToggled ? "active" : "inActive"}
          id='toggle-button'
        >
          BTN
        </motion.div>
        <p className="cards-text">Education</p>
        <p>Experience</p>
      </motion.div>
    </AnimatePresence>
  );
};

export default EducationCard;;