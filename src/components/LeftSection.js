import "../App.scss";
import { Component } from "react";
import Buttons from "./Button";
import Logo from "./Logo";

export default class LeftSection extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="left-section-wrapper">
        <div className="inside-left-section">
          <Logo />

          <div className="button-wrapper">
            <Buttons />
            <Buttons />
            <Buttons />
            <Buttons />
            <Buttons />
          </div>

          <Logo />
        </div>
      </div>
    );
  }
}
