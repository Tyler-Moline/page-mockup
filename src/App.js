import "./App.scss";
import { Component } from "react";
import LeftSection from "./components/LeftSection";
import MainSection from "./components/MainSection";

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <div className="left-container">
          <LeftSection />
        </div>
        <div className="main-container">
          <MainSection />
        </div>
      </div>
    );
  }
}
