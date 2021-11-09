import React, { useState, useTransform } from 'react';
import { motion, useMotionValue, useElementScroll } from 'framer-motion';

const Education = (props) => {
  const motionValue = useMotionValue(0);
  console.log(motionValue.scrollY);

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
        className="all-contents"
      >
        <motion.div
          className="contents first-content"
          initial={{ scale: 1.05, lineHeight: 3 }}
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
                Computer Software Engineering
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.ul
            className="content-descriptions"
          >
            <motion.li
              animate={{ opacity: 1, x: -200 }}
              transition={{ delay: 1.25 }}
            >Highly selective software-engineering(SWE) program with a 3% acceptance rate</motion.li>
            <motion.li
              animate={{ opacity: 1, x: -200 }}
              transition={{ delay: 1.5 }}
            >Accumulative 700+ hours full-stack SWE program</motion.li>
            <motion.li
              animate={{ opacity: 1, x: -140 }}
              transition={{ delay: 1.75 }}
              className='content-description-dates'
            >May 2021 - August 2021</motion.li>
          </motion.ul>
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
                Computer Software Engineering
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.ul
            className="content-descriptions"
          >
            <motion.li
              animate={{ opacity: 1, x: -200 }}
              transition={{ delay: 1.25 }}
            >Highly selective software-engineering(SWE) program with a 3% acceptance rate</motion.li>
            <motion.li
              animate={{ opacity: 1, x: -200 }}
              transition={{ delay: 1.5 }}
            >Accumulative 700+ hours full-stack SWE program</motion.li>
            <motion.li
              animate={{ opacity: 1, x: -140 }}
              transition={{ delay: 1.75 }}
              className='content-description-dates'
            >May 2021 - August 2021</motion.li>
          </motion.ul>
        </motion.div>
        <motion.div id="icons">
          <motion.button id="left-icon">
            <motion.div className="left-arrow-icon" onClick={() => window.scrollTo(0, 200)}>
              <i className="fas fa-angle-double-left"></i>
            </motion.div>
          </motion.button>
          <motion.button id="right-icon">
            <motion.div className="right-arrow-icon">
              <i className="fas fa-angle-double-right"></i>
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Education;