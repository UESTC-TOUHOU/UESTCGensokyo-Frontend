import react from "react";
import { Component } from "react";

class response extends Component {
    resetHtmlFontSize = () => {
        document.documentElement.style.fontSize = window.innerWidth / 10 + "px";
    };
    componentDidMount() {
        this.resetHtmlFontSize();
        window.addEventListener("resize", this.resetHtmlFontSize);
        }
}

export default Response;