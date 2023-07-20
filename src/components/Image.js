import "../App.scss";
import { Component } from "react";

export default class Image extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="img-wrapper">
        <img src="" alt="img" />
      </div>
    );
  }
}
