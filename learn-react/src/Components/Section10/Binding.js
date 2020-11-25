import React, { Component } from "react";

class Binding extends Component {
  constructor(props) {
    super(props);
    // this.bound = this.bound.bind(this);
  }

  //   bound = () => {
  //     console.log("Bound");
  //   };
  // {^^^ above doesn't need constructor }
  render() {
    return (
      <div>
        {/* <div className="OptionOne" onclick={this.bound().bind(this)}></div> */}
        {/* <div className="OptionTwo" onClick={() => this.bound()}></div> */}
      </div>
    );
  }
}

export default Binding;
