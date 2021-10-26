import React from "react";
import Name from './name';
import Info from "./info";
import { motion, AnimatePresence } from 'framer-motion';

class TopNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AnimatePresence>
        <motion.div
          id="top-nav"
          initial={{ opacity: 0.4 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.4 }}
        >
          <Info store={this.props.store}></Info>
          <Name store={this.props.store}></Name>
        </motion.div>

      </AnimatePresence>
    );
  }
}

export default TopNav;