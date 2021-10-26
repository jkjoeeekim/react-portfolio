import React from "react";

class Info extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="info">
        <p className="infos">Riverside, CA 92508</p>
        <p className="infos">JkJosephKim@hotmail.com</p>
      </div>
    );
  }
}

export default Info;