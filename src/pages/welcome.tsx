import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./welcome.css";

class Welcome extends Component {
    constructor(props: any) {
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

    welcome() {
        return (
        <>
        <div className="App-header">
            <p className="apiTest">{(this.state as any).apiResponse}</p>
        </div>
        <div className="App">
        <div className="App-logo-move">
            <img src={logo} className="App-logo" alt="logo" />
        </div>
        </div>
        <div className="wrap">
            <div className="menu">
                <Link to="/homepage" className="section">To Homepage</Link><br/>
                <a href="/homepage" className="section" id="test" target="_blank" rel="noopener noreferrer">new window home page</a>
            </div>
        </div>
        </>
    );
    }
  // ---------------------------------------------------------------------------------------------------------------------------------------------------------------

  // ---------------------------------------------------------------------------------------------------------------------------------------------------------------
    render() {
        return this.welcome();
    }
}

export default Welcome;
