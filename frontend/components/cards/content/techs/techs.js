import React from 'react';
import { motion } from 'framer-motion';

class Techs extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <motion.div
        id="techs-content"
      >
        <motion.div
          id="techs-title"
          animate={{ opacity: 1, y: '25vh' }}
          transition={{ delay: 0.5 }}
        >
          Tech stacks | Languages
        </motion.div>
        <motion.div
          className="contents"
          initial={{ scale: 1.15, lineHeight: 3 }}
          animate={{ scale: 1, y: '3vh', lineHeight: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            className="content-first-title content-titles"
          >
            <motion.div
              className="content-title-name-majors"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, x: 40 }}
                transition={{ delay: 0.5 }}
              >
                App Academy
              </motion.div>
              <motion.div
                className="content-title-majors"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, x: -60 }}
                transition={{ delay: 1 }}
              >
                Computer Sofware Engineering
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.ul
            className="content-descriptions"
          >
            <motion.li
              animate={{ opacity: 1, x: -150 }}
              transition={{ delay: 1.25 }}
            >Highly selective software-engineering(SWE) program with a 3% acceptance rate</motion.li>
            <motion.li
              animate={{ opacity: 1, x: -130 }}
              transition={{ delay: 1.5 }}
            >Accumulative 700+ hours full-stack SWE program</motion.li>
            <motion.li
              animate={{ opacity: 1, x: -110 }}
              transition={{ delay: 1.75 }}
            >third point</motion.li>
          </motion.ul>
        </motion.div>
      </motion.div>
    );
  }
}

export default Techs;