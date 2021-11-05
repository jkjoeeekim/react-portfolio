import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false
    };
  }

  render() {
    return (
      <motion.div
        id="about"
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 1 }}
        onMouseEnter={() => this.setState({ display: true })}
        onMouseLeave={() => this.setState({ display: false })}
      >
        {this.state.display ? (
          <motion.div>
            <motion.div
              id="about-text-area"
            >
              <motion.p
                id="about-text"
              >
                ABOUT
              </motion.p>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div>
            <motion.div
              id="about-text-area"
              animate={{ x: 0 }}
              transition={{ delay: 0 }}
            >
              <motion.p
                id="about-text"
              >
                ABOUT
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    );
  }
}

export default About;