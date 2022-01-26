import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

class Socials extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false
    };

    this.expandIcon = this.expandIcon.bind(this);
  }

  expandIcon(icon) {

  }

  render() {
    return (
      <motion.div
        id="socials"
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 1 }}
        onMouseEnter={() => this.setState({ display: true })}
        onMouseLeave={() => this.setState({ display: false })}
      >
        {this.state.display ? (
          <motion.div>
            {/* <motion.div
              id="socials-text-area"
              transition='0'
            >
              <motion.p
                id="socials-text"
                whileHover={{
                  scale: 1.2,
                  transition: { type: "spring", bounce: 0.75 },
                }}
              >
                SOCIALS
              </motion.p>
            </motion.div> */}
            <motion.div
              id="social-icons"
              animate={{ x: '-2.5vw' }}
              transition={{ delay: 0 }}
            >
              <motion.div
                id='linkedin-social'
                whileHover={{
                  scale: 1.25,
                  transition: { type: "spring", bounce: 0.8 },
                }}
              >
              </motion.div>
              <motion.div
                id='github-social'
                whileHover={{
                  scale: 1.25,
                  transition: { type: "spring", bounce: 0.8 },
                }}
              >
              </motion.div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div>
            {/* <motion.div
              id="socials-text-area"
              animate={{ x: 0 }}
              transition={{ delay: 0 }}
            >
              <motion.p
                id="socials-text"
                whileHover={{
                  scale: 1.2,
                  transition: { type: "spring", bounce: 0.75 },
                }}
              >
                SOCIALS
              </motion.p>
            </motion.div> */}
            <motion.div
              id="social-icons"
              // animate={{ x: '22vw' }}
              animate={{ x: '-1.5vw' }}
              transition={{ delay: 0 }}
            >
              <motion.div
                id='linkedin-social'
                whileHover={{
                  scale: 1.25,
                  transition: { type: "spring", bounce: 0.8 },
                }}
              >
              </motion.div>
              <motion.div
                id='github-social'
                whileHover={{
                  scale: 1.25,
                  transition: { type: "spring", bounce: 0.8 },
                }}
              >
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    );
  }
}

export default Socials;