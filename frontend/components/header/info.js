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
                id="info-text"
                className="infos"
                whileHover={{
                  scale: 1.1,
                  transition: { type: "spring", bounce: 0.6 },
                }}
                animate={{ y: '2vh' }}
                transition={{ delay: 0 }}
              >
                Riverside, CA 92508
              </motion.div>
              <motion.div
                id="info-text"
                className="infos"
                whileHover={{
                  scale: 1.1,
                  transition: { type: "spring", bounce: 0.6 },
                }}
                animate={{ y: '2vh' }}
                transition={{ delay: 0 }}
              >
                JkJosephKim@hotmail.com
              </motion.div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            id='contact'
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
                id="info-text"
                className="infos"
                whileHover={{
                  scale: 1.1,
                  transition: { type: "spring", bounce: 0.6 },
                }}
                animate={{ y: 0 }}
                transition={{ delay: 0 }}
              >
              </motion.div>
              <motion.div
                id="info-text"
                className="infos"
                whileHover={{
                  scale: 1.1,
                  transition: { type: "spring", bounce: 0.6 },
                }}
                animate={{ y: 0 }}
                transition={{ delay: 0 }}
              >
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