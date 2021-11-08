import React from "react";
import { motion } from 'framer-motion';

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false
    };
  };

  render() {
    return (
      <motion.div
        id="info"
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 1 }}
        onMouseEnter={() => this.setState({ display: true })}
        onMouseLeave={() => this.setState({ display: false })}
      >
        {/* <motion.div
          class="cursor"
        >
        </motion.div> */}
        {this.state.display ? (
          <motion.div
            id='contact'
            transition='0'
          >
            <motion.p
              whileHover={{
                scale: 1.2,
                transition: { type: "spring", bounce: 0.75 },
              }}
            >
              CONTACT
            </motion.p>
            <motion.div
              id="info-area"
              transition='0'
            >
              <motion.div
                className="infos info-text"
                id='contact-address'
                whileHover={{
                  scale: 1.1,
                  transition: { type: "spring", bounce: 0.6 },
                }}
                animate={{ y: '26.5vh' }}
                transition={{ delay: 0 }}
              >
                Riverside, CA 92508
              </motion.div>
              <motion.div
                className="infos info-text"
                id='contact-email'
                whileHover={{
                  scale: 1.1,
                  transition: { type: "spring", bounce: 0.6 },
                }}
                animate={{ y: '26.5vh' }}
                transition={{ delay: 0 }}
              >
                JkJosephKim@hotmail.com
              </motion.div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            id='contact'
            transition={{ type: 'spring', bounce: 0.75 }}
          >
            <motion.p
              whileHover={{
                scale: 1.1,
                transition: { type: "spring", bounce: 0.6 },
              }}
            >
              CONTACT
            </motion.p>
            <motion.div
              id="info-area"
              transition='0'
            >
              <motion.div
                className="infos info-text"
                id="contact-address"
                whileHover={{
                  scale: 1.1,
                  transition: { type: "spring", bounce: 0.6 },
                }}
                animate={{ y: 0, scale: 0.2, opacity: 0.4 }}
                transition={{ delay: 0 }}
              >
                Riverside, CA 92508
              </motion.div>
              <motion.div
                className="infos info-text"
                id="contact-email"
                whileHover={{
                  scale: 1.1,
                  transition: { type: "spring", bounce: 0.6 },
                }}
                animate={{ y: 0, scale: 0.2, opacity: 0.4 }}
                transition={{ delay: 0 }}
              >
                JkJosephKim@hotmail.com
              </motion.div>
            </motion.div>
          </motion.div>
        )}
        {/* <motion.p className="infos">Riverside, CA 92508</motion.p>
        <motion.p className="infos">JkJosephKim@hotmail.com</motion.p> */}
      </motion.div>
    );
  }
}

export default Info;