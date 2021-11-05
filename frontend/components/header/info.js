import React from "react";
import { motion } from 'framer-motion';

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false
    };

  }

  render() {
    return (
      <motion.div
        id="info"
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 1 }}
        onMouseEnter={() => this.setState({ display: true })}
        onMouseLeave={() => this.setState({ display: false })}
      >
        {this.state.display ? (
          <motion.div
            id="info-area"
          >
            <motion.p
              id="info-text"
              className="infos"
            >
              Riverside, CA 92508
            </motion.p>
            <motion.p
              id="info-text"
              className="infos"
            >
              JkJosephKim@hotmail.com
            </motion.p>
          </motion.div>
        ) : (
          <motion.div
            id="info-area"
          >
            <motion.div
              id="info-text-area"
              animate={{ x: 0 }}
              transition={{ delay: 0 }}
            >
              <motion.p
                id="info-text"
                className="infos"
              >
              </motion.p>
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