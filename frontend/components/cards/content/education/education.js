import React from 'react';
import { motion } from 'framer-motion';

class Education extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <motion.div
        id="education-content"
      >
        <motion.div
          id="education-title"
          animate={{ opacity: 1, y: '25vh' }}
          transition={{ delay: 0.5 }}
        >
          Education | studies
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
              animate={{ opacity: 1, x: -180 }}
              transition={{ delay: 1.25 }}
            >Highly selective software-engineering(SWE) program with a 3% acceptance rate</motion.li>
            <motion.li
              animate={{ opacity: 1, x: -140 }}
              transition={{ delay: 1.5 }}
            >Accumulative 700+ hours full-stack SWE program</motion.li>
            <motion.li
              animate={{ opacity: 1, x: -100 }}
              transition={{ delay: 1.75 }}
            >third point</motion.li>
          </motion.ul>
        </motion.div>
      </motion.div>
    );
  }
}

export default Education;