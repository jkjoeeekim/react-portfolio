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
        {/* <motion.div
          id="top-nav"
          initial={{ opacity: 0.4 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.4 }}
        >
          <motion.div
            id='contact'
          >
            <motion.p
              whileHover={{
                scale: 1.2,
                transition: { type: "spring", bounce: 0.75 },
              }}
            >
              Contact
            </motion.p>
          </motion.div>
          <Info store={this.props.store}></Info>
          <Name store={this.props.store}></Name>
        </motion.div> */}

        <Info store={this.props.store}></Info>
        <Name store={this.props.store}></Name>
      </AnimatePresence>
    );
  }
}

export default TopNav;