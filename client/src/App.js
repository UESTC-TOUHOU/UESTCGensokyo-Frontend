import logo from "./logo.png";
import "./App.css";
import { Component, useEffect } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  resetHtmlFontSize = () => {
    document.documentElement.style.fontSize = window.innerWidth / 10 + "px";
  };

  componentDidMount() {
    this.resetHtmlFontSize();
    window.addEventListener("resize", this.resetHtmlFontSize);
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <>
        <div className="App-header">
          <p className="apiTest">{this.state.apiResponse}</p>
        </div>
        <div className="App">
          <div className="App-logo-move">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </div>
      </>
    );
  }
}

export default App;
