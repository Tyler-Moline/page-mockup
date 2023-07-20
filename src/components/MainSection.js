import "../App.scss";
import { Component } from "react";
import Buttons from "./Button";
import Image from "./Image";
import LargeContent from "./MainContentLarge";
import SmallContent from "./MainContentSmall";
import Headers from "./Headers";

export default class MainSection extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="main-section-wrapper">
        <div className="header">
          <Image />
          <Headers />
        </div>

        <div className="content">
          <LargeContent />

          <div className="content-top">
            <SmallContent />
            <Image />
          </div>

          <div className="content-bottom">
            <Image />
            <SmallContent />
          </div>

          <LargeContent />
        </div>

        <div className="footer">
          <div className="footer-btn">
            <Buttons />
          </div>
          <div className="footer-media">Social Media Icons</div>
          <div className="footer-copyright">Copyright</div>
        </div>
      </div>
    );
  }
}
