import React, { Component } from "react";
import "./Intro2.css";

class Intro2 extends Component {
  render() {
    return (
      <div className="intro2">
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default Intro2;
