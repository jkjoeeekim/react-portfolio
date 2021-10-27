// import React from "react";
// import { motion, AnimatePresence } from 'framer-motion';

// class ProjectsCard extends React.Component {
//   constructor(props) {
//     super(props);
//     this.cardName = 'projects-card';
//   }

//   render() {
//     return (
//       <AnimatePresence>
//         <motion.div
//           onMouseEnter={() => this.props.expandCard(this.cardName)}
//           onMouseLeave={() => this.props.shrinkCard(this.cardName)}
//           onClick={() => this.props.showCard(this.cardName)}
//           initial={{ opacity: 0.4 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0.4 }}
//           id={this.cardName}
//           className="cards"
//         >
//           <motion.div
//             initial={{ opacity: 0.4 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0.4 }}
//           >
//             <p className="cards-text">Techs</p>
//             <p>Projects</p>
//           </motion.div>
//         </motion.div>
//       </AnimatePresence>
//     );
//   }
// }

// export default ProjectsCard;


// Using hooks //
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  active: {
    position: 'absolute',
    height: '85vh',
    width: '85vw',
    top: '-35vh',
    left: '-37vw',
    backgroundColor: 'rgb(82, 82, 82, 100%)',
    borderRadius: '30px',
    boxShadow: '0px 0px 8px rgba(255, 255, 255, 100%)',
    transition: '3s',
    zIndex: '25',
  },
  inActive: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    borderRadius: '20px',
    backgroundColor: 'rgb(51,51,51, 0%)',
    borderThickness: '0px',
    // boxShadow: "0px 0px 3px rgba(208, 208, 208, 70%)",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    transition: '3s',
  }
};
const ProjectsCard = (props) => {
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
        onMouseEnter={() => props.expandCard('projects-card')}
        onMouseLeave={() => toggleAndShrink('projects-card')}
        // onClick={() => this.props.showCard(this.state.cardName)}
        // onClick={() => setToggle(!isToggled)}
        // animate={isToggled ? "active" : "inActive"}
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.4 }}
        id='projects-card'
        className="cards"
      >
        <motion.div
          onClick={() => setToggle(!isToggled)}
          animate={isToggled ? "active" : "inActive"}
          variants={variants}
          id='toggle-project-button'
        >
        </motion.div>
        <p className="cards-text">Techs</p>
        <p>Projects</p>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectsCard;;