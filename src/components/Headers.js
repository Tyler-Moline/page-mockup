import "../App.scss";
import { Component } from "react";

export default class Headers extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="headers-wrapper">
        <div className="header-main">Header</div>
        <div className="sub-header">Subheader</div>
      </div>
    );
  }
}
