import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import ReactTooltip from 'react-tooltip';

const Unicorn = () => {

  return (
    <motion.div
      id='unicorn'
      whileHover={{
        scale: 1.2,
        transition: { type: "spring", bounce: 0.8 },
      }}
      onClick={{
        scale: 1.2,
        transition: { type: "spring", bounce: 0.8 },
      }}
    ></motion.div>
  );
};

export default Unicorn;